#!/usr/bin/env bash
# prune_s3_images.sh — delete old Docker image tars from S3, keep last N
# Usage: bash prune_s3_images.sh <bucket> <prefix> <keep_count>
set -euo pipefail

BUCKET="${1:?bucket required}"
PREFIX="${2:?prefix required}"   # e.g. "docker-images/"
KEEP="${3:-3}"

echo "─── S3 image pruning ───────────────────────────────────────────"
echo "Bucket : s3://${BUCKET}/${PREFIX}"
echo "Keeping: last ${KEEP} objects"

# List all objects under the prefix, sorted by LastModified (oldest first)
OBJECTS=$(aws s3api list-objects-v2 \
  --bucket "${BUCKET}" \
  --prefix "${PREFIX}" \
  --query "sort_by(Contents, &LastModified)[].Key" \
  --output text 2>/dev/null || true)

if [[ -z "${OBJECTS}" ]]; then
  echo "No objects found – nothing to prune."
  exit 0
fi

# Convert to array
mapfile -t ALL_KEYS <<< "$(echo "${OBJECTS}" | tr '\t' '\n' | grep -v '^$')"
TOTAL=${#ALL_KEYS[@]}
echo "Total objects found: ${TOTAL}"

if (( TOTAL <= KEEP )); then
  echo "Nothing to delete (${TOTAL} <= ${KEEP})."
  exit 0
fi

DELETE_COUNT=$(( TOTAL - KEEP ))
echo "Deleting ${DELETE_COUNT} old object(s) …"

for (( i=0; i<DELETE_COUNT; i++ )); do
  KEY="${ALL_KEYS[$i]}"
  echo "  Deleting: s3://${BUCKET}/${KEY}"
  aws s3 rm "s3://${BUCKET}/${KEY}"
done

echo "✅ Pruning complete. ${KEEP} most recent image(s) retained."
