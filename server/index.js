import compression from 'compression';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const app = express();
const port = Number(process.env.PORT || 8080);
const siteUrl = process.env.SITE_URL || 'https://classpulseai.com';

app.disable('x-powered-by');

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'"],
        imgSrc: ["'self'", 'data:'],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'", 'data:'],
        baseUri: ["'self'"],
        formAction: ["'self'"],
      },
    },
    crossOriginEmbedderPolicy: false,
  }),
);

app.use(compression());
app.use(express.json({ limit: '32kb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    ok: true,
    service: 'ClassPulse AI',
    time: new Date().toISOString(),
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, organization, message, website } = req.body || {};

  // The hidden website field is a low-cost honeypot for basic spam bots.
  if (website) {
    return res.status(202).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: 'Name, email, and message are required.',
    });
  }

  const normalized = {
    name: String(name).slice(0, 120),
    email: String(email).slice(0, 180),
    organization: String(organization || '').slice(0, 160),
    message: String(message).slice(0, 1200),
    receivedAt: new Date().toISOString(),
    receiver: process.env.CONTACT_RECEIVER || 'hello@classpulseai.com',
  };

  if (process.env.CONTACT_LOGGING !== 'false') {
    console.info('[ClassPulse AI contact]', normalized);
  }

  res.status(200).json({
    ok: true,
    message: 'Thanks. The ClassPulse AI team will get back to you soon.',
  });
});

app.get('/robots.txt', (_req, res) => {
  res.type('text/plain').send(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
});

app.use(
  express.static(distDir, {
    maxAge: '1y',
    immutable: true,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    },
  }),
);

// React Router owns page URLs, so send unknown non-API routes to the SPA shell.
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`ClassPulse AI is running on http://0.0.0.0:${port}`);
});
