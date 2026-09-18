# Chùa Thiên Mụ — Astro + Tailwind + Cloudflare

Trang đơn bằng tiếng Việt, thiết kế riêng theo không khí cổ tự Huế.

## Cấu hình domain (một nơi duy nhất)
Đặt biến môi trường `SITE_URL`, ví dụ `SITE_URL=https://chuathienmu.vn`. `astro.config.ts` là nơi duy nhất nhận URL gốc. Khi bỏ trống, site vẫn build; canonical/OG URL tuyệt đối được bỏ qua và sitemap không bật.

## Lệnh
```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Worker
`@astrojs/cloudflare` đã được cấu hình. Sau build, triển khai bằng Wrangler/Cloudflare dashboard theo workflow của bạn.

## Ảnh
Ba ảnh thật đang trỏ tới Wikimedia Commons để bảo đảm đúng nguồn và quyền sử dụng. Nếu muốn 100% local, tải đúng các URL ghi trong `src/styles/global.css` vào `public/images/`, sau đó thay các `url(...)` thành `/images/...`.

## GA4
Measurement ID: `G-HXM22WWPKP`.
