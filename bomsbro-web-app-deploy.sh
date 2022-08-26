#!/bin/bash

set -e

REMOTE_USERNAME="..."
REMOTE_HOST="..."
IMAGE_REPOSITORY="my_repository"

function upload_image_if_needed {
	if [[ $(ssh $REMOTE_USERNAME@$REMOTE_HOST "docker images $IMAGE_REPOSITORY | grep $1 | tr -s ' ' | cut -d ' ' -f 3") != $(docker images $IMAGE_REPOSITORY | grep $1 | tr -s ' ' | cut -d ' ' -f 3) ]]
	then
		echo "$1 image changed, updating..."
		docker save $IMAGE_REPOSITORY:$1 | bzip2 | pv | ssh $REMOTE_USERNAME@$REMOTE_HOST 'bunzip2 | docker load'
	else
		echo "$1 image did not change"
	fi
}

function build_image {
	docker build -t $IMAGE_REPOSITORY:$1 $2
}

build_image apache apache/
build_image monitoring monitoring/

upload_image_if_needed apache
upload_image_if_needed monitoring

ssh -tt $REMOTE_USERNAME@$REMOTE_HOST << EOF
docker rm -f ${IMAGE_REPOSITORY}_apache || true
docker rm -f ${IMAGE_REPOSITORY}_monitoring || true

docker run -d --name ${IMAGE_REPOSITORY}_apache $IMAGE_REPOSITORY:apache
docker run -d --name ${IMAGE_REPOSITORY}_monitoring $IMAGE_REPOSITORY:monitoring

exit
EOF
