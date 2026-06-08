# Termux Deployment Guide

This guide targets a small Android phone server such as a Redmi 9i with 4GB RAM and 64GB storage.

## 1. Install Termux Packages

Install Termux from F-Droid when possible, then run:

```bash
pkg update && pkg upgrade
pkg install nodejs-lts git nano
```

Check versions:

```bash
node -v
npm -v
git --version
```

## 2. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/classpulse-ai-website.git
cd classpulse-ai-website
```

## 3. Configure Environment

```bash
cp .env.example .env
nano .env
```

Recommended values:

```env
NODE_ENV=production
PORT=8080
SITE_URL=https://classpulseai.com
CONTACT_RECEIVER=classpulseai@gmail.com
CONTACT_LOGGING=true
```

## 4. Deploy with One Command

```bash
bash scripts/deploy-termux.sh
```

Useful checks:

```bash
tail -f logs/classpulse.log
curl http://127.0.0.1:8080/api/health
```

## 5. Cloudflare Tunnel

Install and authenticate Cloudflare Tunnel using the current Cloudflare instructions for Termux/Linux. Point the tunnel service to:

```text
http://127.0.0.1:8080
```

Recommended public hostname:

```text
classpulseai.com
```

## 6. Updating Production

```bash
cd classpulse-ai-website
bash scripts/update-from-github.sh
```

## 7. Keep the Phone Stable

- Keep the phone plugged in.
- Disable aggressive battery optimization for Termux.
- Keep storage above 2GB free.
- Restart the app with `bash scripts/deploy-termux.sh` after phone reboot.
- Monitor logs with `tail -f logs/classpulse.log`.
