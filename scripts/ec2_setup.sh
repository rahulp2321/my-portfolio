#!/usr/bin/env bash
# ec2_setup.sh — ONE-TIME setup on a fresh AWS Linux 2 / Amazon Linux 2023 server
# Run as: bash ec2_setup.sh
set -euo pipefail

echo "═══════════════════════════════════════════════"
echo " EC2 One-Time Setup for Next.js Docker Deploy  "
echo "═══════════════════════════════════════════════"

# ── 1. System update ──────────────────────────────────────────────────────────
sudo yum update -y

# ── 2. Install Docker ─────────────────────────────────────────────────────────
if ! command -v docker &>/dev/null; then
  echo "Installing Docker …"
  sudo yum install -y docker
  sudo systemctl enable --now docker
  sudo usermod -aG docker "${USER}"
  echo "Docker installed: $(docker --version)"
else
  echo "Docker already installed: $(docker --version)"
fi

# ── 3. Install AWS CLI v2 ─────────────────────────────────────────────────────
if ! command -v aws &>/dev/null; then
  echo "Installing AWS CLI v2 …"
  curl -fsSL "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o /tmp/awscliv2.zip
  unzip -q /tmp/awscliv2.zip -d /tmp
  sudo /tmp/aws/install
  rm -rf /tmp/aws /tmp/awscliv2.zip
  echo "AWS CLI installed: $(aws --version)"
else
  echo "AWS CLI already installed: $(aws --version)"
fi

# ── 4. Open port 80 in the OS firewall (security group handles the rest) ──────
if command -v firewall-cmd &>/dev/null; then
  sudo firewall-cmd --permanent --add-service=http
  sudo firewall-cmd --reload
  echo "Port 80 opened in firewalld."
fi

# ── 5. Create deploy working directory ───────────────────────────────────────
mkdir -p /tmp/docker-deploy
echo "Working directory /tmp/docker-deploy is ready."

echo ""
echo "✅ EC2 setup complete!"
echo ""
echo "Next steps:"
echo "  1. Attach an IAM role to this EC2 with s3:GetObject on your bucket,"
echo "     OR add AWS credentials to your GitHub Actions secrets."
echo "  2. In your AWS security group, ensure inbound port 80 (and 22) is open."
echo "  3. Push to main/master to trigger the pipeline."
