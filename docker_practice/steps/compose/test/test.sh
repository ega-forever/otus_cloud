#!/bin/bash bash
docker-compose -f docker-compose-test.yaml up \
    --abort-on-container-exit \
    --exit-code-from test
#docker-compose -f docker-compose-test.yaml down