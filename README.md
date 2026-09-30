# Chùa Thiên Mụ — Astro + Tailwind + Cloudflare

Trang thông tin độc lập về Chùa Thiên Mụ (Thiên Mụ Pagoda), thiết kế theo không khí
cổ tự Huế. Hỗ trợ hai ngôn ngữ: **Tiếng Việt** (`/`) và **English** (`/en/`), với
thẻ `hreflang` đầy đủ để Google phân phối đúng phiên bản theo vùng/ngôn ngữ.

## Miền chuẩn (canonical) và chuyển hướng

Miền chuẩn đã thống nhất là **`https://www.thienmupagoda.com`** (đặt cố định trong
`astro.config.ts`, có thể ghi đè bằng biến `SITE_URL`). Mọi `canonical`, `og:url`,
`hreflang` và sitemap đều dùng miền này.

Vì site chạy trên Cloudflare Workers (Static Assets), **không thể** cấu hình chuyển
hướng cấp miền bằng `_redirects`. Cần thiết lập tại **Cloudflare dashboard**:

1. **Always Use HTTPS** (bật) — ép `http://` → `https://`.
2. **Redirect Rules** — chuyển `https://thienmupagoda.com/*` → `https://www.thienmupagoda.com/$1`
   (non-www → www) để gộp quyền SEO về một miền duy nhất (tránh trùng lặp như trong
   báo cáo Google Search Console: http / https://www / https://).

Đồng bộ luôn URL trên **Google Business Profile** về `https://www.thienmupagoda.com/`.

## Cấu trúc nội dung

- `src/data/site.ts` — sự thật trung lập ngôn ngữ (tên, tọa độ, địa chỉ, đánh giá, bản đồ).
- `src/i18n.ts` — cấu hình locale, `hreflangAlternates`, `og:locale`.
- `src/content/guide.ts` — toàn bộ văn bản theo `vi` / `en`.
- `src/components/GuidePage.astro` — trình bày chung, phát ra `canonical` + `hreflang` + JSON-LD.
- `src/pages/index.astro` (vi) và `src/pages/en/index.astro` (en).

## Lệnh

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Worker

`@astrojs/cloudflare` đã được cấu hình. Sau build, triển khai bằng Wrangler/Cloudflare
dashboard theo workflow của bạn.

## Ảnh

Ba ảnh thật đang trỏ tới Wikimedia Commons để bảo đảm đúng nguồn và quyền sử dụng. Nếu
muốn 100% local, tải đúng các URL ghi trong `src/styles/global.css` vào `public/images/`,
sau đó thay các `url(...)` thành `/images/...`.

## GA4

Measurement ID: `G-HXM22WWPKP`.
