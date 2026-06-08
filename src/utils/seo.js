const defaultTitle = 'ClassPulse AI | Classroom Intelligence for Modern Schools';
const defaultDescription =
  'ClassPulse AI helps schools understand classroom engagement, attendance, and learning signals with privacy-aware AI insights.';

export function setSeo({ title = defaultTitle, description = defaultDescription, path = '/' }) {
  document.title = title;
  upsertMeta('name', 'description', description);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', `https://classpulseai.com${path}`);
  upsertCanonical(`https://classpulseai.com${path}`);
}

function upsertMeta(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}
