# GitHub Deployment Instructions

## 1. Create a Repository

Create a new GitHub repository named:

```text
classpulse-ai-website
```

## 2. Push from Windows Development Machine

From the project folder:

```bash
git init
git add .
git commit -m "Launch ClassPulse AI website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/classpulse-ai-website.git
git push -u origin main
```

## 3. Pull on the Android Production Server

```bash
git clone https://github.com/YOUR_USERNAME/classpulse-ai-website.git
cd classpulse-ai-website
bash scripts/deploy-termux.sh
```

## 4. Update Flow

On Windows:

```bash
git add .
git commit -m "Update ClassPulse AI website"
git push
```

On Termux:

```bash
cd classpulse-ai-website
bash scripts/update-from-github.sh
```

## 5. Suggested Architecture

```text
Claude AI or local development
  -> source code
  -> GitHub repository
  -> Windows development pull/test
  -> Redmi 9i Termux production pull
  -> Express server on localhost:8080
  -> Cloudflare Tunnel
  -> classpulseai.com
```
