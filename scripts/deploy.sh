#!/bin/bash
rsync -avzq -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress . root@$SERVER_IP:/root/$APPLICATION
ssh root@$SERVER_IP "docker build  -f $APPLICATION/Dockerfile.deploy -t $APPLICATION $APPLICATION"
ssh root@$SERVER_IP "docker stop $APPLICATION || true && docker rm $APPLICATION || true"
ssh root@$SERVER_IP "docker run -td --rm -p $EXPOSED_PORT:$APPLICATION_PORT --name $APPLICATION $APPLICATION serve -s"