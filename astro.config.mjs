import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://xlzhanglab.github.io',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: { defaultLocale: 'en', locales: ['en', 'zh'], routing: { prefixDefaultLocale: true } },
  vite: { server: { fs: { strict: true } } },
});
