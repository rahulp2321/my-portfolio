# Next.js CI/CD Pipeline — GitHub Actions → S3 → EC2

## Architecture Overview

```
GitHub Push
    │
    ▼
GitHub Actions
    ├── Build Docker image
    ├── Save as .tar.gz
    ├── Upload to S3           (keeps last 3 tags, prunes older ones)
    │
    └── SSH into EC2
            ├── Pull .tar.gz from S3
            ├── docker load
            ├── docker stop/rm old container
            ├── docker run (port 80 → 3000)
            └── Health check via HTTP
```

---

## Files in This Package

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build for Next.js (deps → builder → runner) |
| `.dockerignore` | Exclude unnecessary files from the Docker build context |
| `.github/workflows/cicd.yml` | Full GitHub Actions pipeline |
| `scripts/prune_s3_images.sh` | Keep only the last 3 image tars in S3 |
| `scripts/deploy_on_server.sh` | Runs on EC2: pull from S3, load, restart container |
| `scripts/ec2_setup.sh` | One-time EC2 server setup (Docker + AWS CLI) |

---

## Step-by-Step Setup

### Step 1 — Prepare your Next.js app for standalone output

In `next.config.js`, add:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // ← required for the Dockerfile
};

module.exports = nextConfig;
```

### Step 2 — Copy these files into your repo

```
your-repo/
├── Dockerfile
├── .dockerignore
├── .github/
│   └── workflows/
│       └── cicd.yml
└── scripts/
    ├── prune_s3_images.sh
    ├── deploy_on_server.sh
    └── ec2_setup.sh
```

### Step 3 — Create an S3 bucket

```bash
aws s3api create-bucket \
  --bucket YOUR_BUCKET_NAME \
  --region ap-south-1 \
  --create-bucket-configuration LocationConstraint=ap-south-1
```

### Step 4 — Create an IAM user for GitHub Actions

Attach this inline policy (replace `YOUR_BUCKET_NAME`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:GetObject", "s3:DeleteObject", "s3:ListBucket"],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    }
  ]
}
```

Generate an **Access Key ID** and **Secret Access Key** for this user.

### Step 5 — Add GitHub Actions Secrets

Go to **Settings → Secrets and variables → Actions → New repository secret**:

| Secret Name | Value |
|-------------|-------|
| `AWS_ACCESS_KEY_ID` | From IAM user above |
| `AWS_SECRET_ACCESS_KEY` | From IAM user above |
| `AWS_REGION` | e.g. `ap-south-1` |
| `S3_BUCKET` | Your S3 bucket name |
| `EC2_HOST` | Your EC2 public IP (e.g. `13.x.x.x`) |
| `EC2_USER` | `ec2-user` (Amazon Linux) or `ubuntu` (Ubuntu) |
| `EC2_SSH_PRIVATE_KEY` | Contents of your `.pem` file (the full key) |

### Step 6 — Prepare your EC2 instance

1. Launch an **Amazon Linux 2** or **Amazon Linux 2023** EC2 instance.
2. In **Security Group**, open inbound:
   - Port **22** (SSH) — your IP or GitHub Actions range
   - Port **80** (HTTP) — `0.0.0.0/0`
3. SSH in and run the one-time setup:

```bash
scp -i your-key.pem scripts/ec2_setup.sh ec2-user@YOUR_EC2_IP:/tmp/
ssh -i your-key.pem ec2-user@YOUR_EC2_IP
bash /tmp/ec2_setup.sh
```

### Step 7 — Push and trigger the pipeline

```bash
git add .
git commit -m "Add CI/CD pipeline"
git push origin main
```

Watch the pipeline run at **GitHub → Actions tab**.

---

## Accessing Your App

After a successful deploy, open your browser:

```
http://YOUR_EC2_PUBLIC_IP
```

---

## How the S3 Tag Rotation Works

Every successful build uploads a new `.tar.gz`:
```
s3://your-bucket/docker-images/nextjs-app-a1b2c3d.tar.gz
```

The `prune_s3_images.sh` script then lists all objects in that prefix, sorts by `LastModified` (oldest first), and deletes everything beyond the last **3**. This keeps storage costs low while allowing rollback to any of the 3 most recent builds.

---

## Manual Rollback

To redeploy a previous tag:

```bash
# On your EC2 server
export APP_NAME=nextjs-app
export IMAGE_TAG=nextjs-app-<OLD_SHA>   # from S3 list
export S3_BUCKET=your-bucket
export AWS_REGION=ap-south-1
export HOST_PORT=80
export CONTAINER_PORT=3000

aws s3 cp s3://${S3_BUCKET}/docker-images/${IMAGE_TAG}.tar.gz /tmp/
docker load < /tmp/${IMAGE_TAG}.tar.gz
docker stop ${APP_NAME} && docker rm ${APP_NAME}
docker run -d --name ${APP_NAME} --restart unless-stopped \
  -p ${HOST_PORT}:${CONTAINER_PORT} ${APP_NAME}:${IMAGE_TAG}
```

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Build fails on `npm run build` | Check that `next.config.js` has `output: 'standalone'` |
| S3 upload fails | Verify `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` secrets |
| SSH connection refused | Ensure port 22 is open in the EC2 security group |
| Container not starting | SSH into EC2 and run `docker logs nextjs-app` |
| Health check fails | Check that port 80 is open in the security group |
