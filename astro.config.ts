import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Điểm cấu hình URL DUY NHẤT của toàn site.
// Khi có domain, đặt SITE_URL=https://tenmien.vn trong môi trường build.
const site = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] }
});
