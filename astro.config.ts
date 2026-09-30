import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Điểm cấu hình URL DUY NHẤT của toàn site.
// Miền chuẩn đã thống nhất là https://www.thienmupagoda.com (xem README:
// cần cấu hình Cloudflare Always Use HTTPS + quy tắc chuyển hướng non-www → www).
// Có thể ghi đè bằng biến môi trường SITE_URL khi build.
const site = (process.env.SITE_URL?.trim()) || 'https://www.thienmupagoda.com';

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'vi',
        locales: { vi: 'vi', en: 'en' }
      }
    })
  ],
  vite: { plugins: [tailwindcss()] }
});
