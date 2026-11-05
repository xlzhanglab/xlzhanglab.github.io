import { site, languages } from '../data/profile';
export const GET = () => {
  const pages = ['', 'research/', 'publications/', 'experience/'];
  const urls = languages.flatMap(lang => pages.map(page => `<url><loc>${site.origin}/${lang}/${page}</loc><lastmod>${site.updated}</lastmod>${languages.map(other => `<xhtml:link rel="alternate" hreflang="${other === 'zh' ? 'zh-CN' : 'en'}" href="${site.origin}/${other}/${page}"/>`).join('')}</url>`));
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`, {headers: {'Content-Type':'application/xml'}});
};
