#!/bin/bash
cd /home/runner/workspace
while true; do
  node server/static.js
  echo "Server crashed, restarting in 1 second..."
  sleep 1
done
