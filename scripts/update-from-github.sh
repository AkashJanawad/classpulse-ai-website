#!/usr/bin/env bash
set -euo pipefail

git pull --ff-only
bash scripts/deploy-termux.sh
