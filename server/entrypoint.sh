#!/bin/sh
wait_for_db() {
  until nc -z crdb 26257; do
    echo "Wait_for_db"
    sleep 2
  done
}

wait_for_db

echo "db push..."
npx prisma db push || { echo "Error db push"; exit 1; }
npm run start:dev
su -c 'node'
exec "$@"