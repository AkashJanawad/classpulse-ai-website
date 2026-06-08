# ClassPulse AI Website

Production-ready company website for **ClassPulse AI**, built with React, Vite, TailwindCSS, Node.js, and Express. It is designed to run on Linux, Windows development machines, and Android Termux without Docker.

## Tech Stack

- React + Vite frontend
- TailwindCSS responsive UI
- Dark and light mode
- Express.js production server
- SEO metadata, sitemap, robots.txt, and Open Graph image
- Contact API endpoint with validation and a spam honeypot
- Termux deployment script for small Android hosting

## Folder Structure

```text
classpulse-ai-website/
  public/
    brand/
    og/
    logo.png
    robots.txt
    sitemap.xml
  scripts/
    deploy-termux.sh
    update-from-github.sh
  server/
    index.js
  src/
    components/
    data/
    hooks/
    pages/
    styles/
    utils/
    App.jsx
    main.jsx
  .env.example
  .gitignore
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production Run

```bash
cp .env.example .env
npm install
npm run build
npm start
```

The Express server listens on `PORT` from `.env`, defaulting to `8080`.

## Environment Variables

```env
NODE_ENV=production
PORT=8080
SITE_URL=https://classpulseai.com
CONTACT_RECEIVER=hello@classpulseai.com
CONTACT_LOGGING=true
```

## Single Command Deployment

From the project folder on Linux or Termux:

```bash
bash scripts/deploy-termux.sh
```

This installs dependencies, builds the frontend, stops the previous app process if it was started by the script, and starts the Express server in the background.

## GitHub Flow

```bash
git init
git add .
git commit -m "Launch ClassPulse AI website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/classpulse-ai-website.git
git push -u origin main
```

On the Redmi 9i production server:

```bash
git clone https://github.com/YOUR_USERNAME/classpulse-ai-website.git
cd classpulse-ai-website
bash scripts/deploy-termux.sh
```

For later updates:

```bash
bash scripts/update-from-github.sh
```

See [docs/TERMUX_DEPLOYMENT.md](docs/TERMUX_DEPLOYMENT.md) and [docs/GITHUB_DEPLOYMENT.md](docs/GITHUB_DEPLOYMENT.md) for detailed instructions.
