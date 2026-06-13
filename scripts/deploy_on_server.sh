#!/usr/bin/env bash
# deploy_on_server.sh — runs ON the EC2 instance
# Pulls the Docker image tar from S3, loads it, and (re)starts the container.
# All variables are injected via SSH environment by the GitHub Actions job.
set -euo pipefail

: "${AWS_ACCESS_KEY_ID:?}"
: "${AWS_SECRET_ACCESS_KEY:?}"
: "${AWS_REGION:?}"
: "${S3_BUCKET:?}"
: "${IMAGE_TAG:?}"
: "${APP_NAME:?}"
: "${HOST_PORT:?}"
: "${CONTAINER_PORT:?}"

WORK_DIR="/tmp/docker-deploy"
TAR_FILE="${WORK_DIR}/${IMAGE_TAG}.tar.gz"
S3_KEY="docker-images/${IMAGE_TAG}.tar.gz"

echo "══════════════════════════════════════════════"
echo " Deploy: ${APP_NAME}:${IMAGE_TAG}"
echo " S3    : s3://${S3_BUCKET}/${S3_KEY}"
echo " Port  : ${HOST_PORT} → ${CONTAINER_PORT}"
echo "══════════════════════════════════════════════"

# ── 0. Prerequisites ─────────────────────────────────────────────────────────
if ! command -v docker &>/dev/null; then
  echo "Installing Docker …"
  sudo yum update -y
  sudo yum install -y docker
  sudo systemctl enable --now docker
  sudo usermod -aG docker "${USER}" || true
fi

if ! command -v aws &>/dev/null; then
  echo "Installing AWS CLI …"
  curl -fsSL "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o /tmp/awscliv2.zip
  unzip -q /tmp/awscliv2.zip -d /tmp
  sudo /tmp/aws/install
fi

# ── 1. Download image tar from S3 ────────────────────────────────────────────
mkdir -p "${WORK_DIR}"
echo "Downloading image from S3 …"
AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID}" \
AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY}" \
AWS_DEFAULT_REGION="${AWS_REGION}" \
aws s3 cp "s3://${S3_BUCKET}/${S3_KEY}" "${TAR_FILE}"
echo "Download complete ($(du -sh "${TAR_FILE}" | cut -f1))"

# ── 2. Load image into Docker ─────────────────────────────────────────────────
echo "Loading Docker image …"
docker load < "${TAR_FILE}"
rm -f "${TAR_FILE}"

# ── 3. Stop & remove existing container ──────────────────────────────────────
if docker ps -a --format '{{.Names}}' | grep -q "^${APP_NAME}$"; then
  echo "Stopping existing container …"
  docker stop "${APP_NAME}" || true
  docker rm   "${APP_NAME}" || true
fi

# ── 4. Start new container ────────────────────────────────────────────────────
echo "Starting container ${APP_NAME} …"
docker run -d \
  --name    "${APP_NAME}" \
  --restart unless-stopped \
  -p        "${HOST_PORT}:${CONTAINER_PORT}" \
  "${APP_NAME}:${IMAGE_TAG}"

echo "Container status:"
docker ps --filter "name=${APP_NAME}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# ── 5. Remove dangling images to free disk space ──────────────────────────────
echo "Cleaning up dangling Docker images …"
docker image prune -f || true

echo "✅ Deployment complete! App available on port ${HOST_PORT}."
