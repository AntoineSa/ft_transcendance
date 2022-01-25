#!/bin/sh
# wait-for-postgres.sh

until curl http://backend/ > log.txt
do
  >&2 echo "backend is unavailable - sleeping"
  sleep 5
done
  
>&2 echo "backend is up - executing command"
exec "$@"

