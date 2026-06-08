#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$APP_DIR"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is missing. In Termux run: pkg update && pkg install nodejs-lts git"
  exit 1
fi

if [ ! -f ".env" ]; then
  cp .env.example .env
  echo "Created .env from .env.example. Edit it if your port or site URL changes."
fi

npm install
npm run build

mkdir -p logs

if [ -f ".classpulse.pid" ]; then
  OLD_PID="$(cat .classpulse.pid || true)"
  if [ -n "$OLD_PID" ] && kill -0 "$OLD_PID" >/dev/null 2>&1; then
    kill "$OLD_PID" || true
    sleep 1
  fi
fi

nohup npm start > logs/classpulse.log 2>&1 &
echo $! > .classpulse.pid

echo "ClassPulse AI started on port ${PORT:-8080}."
echo "Logs: tail -f logs/classpulse.log"
