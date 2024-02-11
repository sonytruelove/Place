#!/bin/sh

npx prisma db push

# Run the main container command
exec "$@"
