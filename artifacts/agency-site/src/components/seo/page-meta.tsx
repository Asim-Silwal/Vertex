import { useEffect } from 'react';

type PageMetaProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  noIndex?: boolean;
  removeStructuredData?: boolean;
};

function setOrCreateMeta(selector: string, attr: string, value: string) {
  const element = document.head.querySelector(selector) as
    | HTMLMetaElement
    | HTMLLinkElement
    | null;

  if (element) {
    element.setAttribute(attr, value);
    return;
  }

  const tagName = selector.startsWith('link') ? 'link' : 'meta';
  const newElement = document.createElement(tagName);

  if (selector.includes('[name=')) {
    const name = selector.match(/\[name=['"]([^'"]+)['"]\]/)?.[1];
    if (name) {
      newElement.setAttribute('name', name);
    }
  }

  if (selector.includes('[property=')) {
    const property = selector.match(/\[property=['"]([^'"]+)['"]\]/)?.[1];
    if (property) {
      newElement.setAttribute('property', property);
    }
  }

  if (selector.includes('[rel=')) {
    const rel = selector.match(/\[rel=['"]([^'"]+)['"]\]/)?.[1];
    if (rel) {
      newElement.setAttribute('rel', rel);
    }
  }

  newElement.setAttribute(attr, value);
  document.head.appendChild(newElement);
}

export default function PageMeta({
  title,
  description,
  canonicalPath,
  noIndex = false,
  removeStructuredData = false,
}: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    setOrCreateMeta('meta[name="description"]', 'content', description);
    setOrCreateMeta(
      'meta[name="robots"]',
      'content',
      noIndex ? 'noindex, nofollow' : 'index, follow',
    );
    setOrCreateMeta('meta[property="og:title"]', 'content', title);
    setOrCreateMeta('meta[property="og:description"]', 'content', description);
    setOrCreateMeta('meta[property="og:type"]', 'content', 'website');
    setOrCreateMeta('meta[name="twitter:title"]', 'content', title);
    setOrCreateMeta('meta[name="twitter:description"]', 'content', description);

    const canonical =
      canonicalPath ?? `${window.location.pathname}${window.location.search}`;
    const canonicalUrl = `${window.location.origin}${canonical}`;

    setOrCreateMeta('link[rel="canonical"]', 'href', canonicalUrl);
    setOrCreateMeta('meta[property="og:url"]', 'content', canonicalUrl);

    if (removeStructuredData) {
      document.getElementById('vertex-digital-jsonld')?.remove();
    }
  }, [canonicalPath, description, noIndex, removeStructuredData, title]);

  return null;
}