#!/bin/bash

set -e

REMOTE_HOST="$1"
REMOTE_SSH_PORT="$2"
REMOTE_USERNAME="$3"
REMOTE_PASSWORD="$4"
IMAGE_REPOSITORY="$5"

echo "$IMAGE_REPOSITORY image changed, updating..."
docker save $IMAGE_REPOSITORY | bzip2 | sshpass -p $REMOTE_PASSWORD ssh -p $REMOTE_SSH_PORT $REMOTE_USERNAME@$REMOTE_HOST -o StrictHostKeyChecking=no 'bunzip2 | docker load'

sshpass -p $REMOTE_PASSWORD ssh -p $REMOTE_SSH_PORT $REMOTE_USERNAME@$REMOTE_HOST -o StrictHostKeyChecking=no << EOF
	docker rm -f $IMAGE_REPOSITORY || true
	docker run -d --net host --name $IMAGE_REPOSITORY --restart always -v /var/data/certbot/conf:/etc/letsencrypt -v /var/data/certbot/www:/var/www/certbot -v /var/data/nginx/conf.d:/etc/nginx/conf.d $IMAGE_REPOSITORY
	expect -c "
		set timeout 5
		spawn docker image prune
		expect -nocase \"\[y/N\]\"
		send \"y\"
		exit 0
	"
	exit
EOF
