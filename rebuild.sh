#!/bin/bash

set -e

echo "🧹 Cleaning previous build..."
rm -rf dist/ node_modules/

echo "📦 Installing dependencies..."
yarn install

echo "�� Building application..."
yarn build

echo "♻️  Restarting PM2..."
pm2 restart onedev-backend

echo "✅ Done!"
pm2 logs onedev-backend --lines 20
