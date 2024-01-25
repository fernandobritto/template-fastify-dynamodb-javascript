#!/bin/sh

echo "Creating table infoenter \n"
AWS_ACCESS_KEY_ID=xxxxx \
AWS_SECRET_ACCESS_KEY=xxxxx \
aws dynamodb create-table \
  --cli-input-json "$(cat ../resource/migration/create-table.json)" \
  --endpoint-url http://0.0.0.0:8000 \
  --region sa-east-1
