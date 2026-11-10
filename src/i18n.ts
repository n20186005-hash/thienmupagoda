// Cấu hình đa ngôn ngữ: vi (mặc định, ở gốc /) và en (ở /en/).
// Dùng chung cho canonical, hreflang, og:locale và chuyển ngữ.

export type Locale = 'vi' | 'en';

export const locales: Locale[] = ['vi', 'en'];
export const defaultLocale: Locale = 'vi';

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string }> = {
  vi: { htmlLang: 'vi', ogLocale: 'vi_VN' },
  en: { htmlLang: 'en', ogLocale: 'en_US' }
};

// Đường dẫn trang theo ngôn ngữ (dùng cho chuyển ngữ và hreflang).
// Không truyền path → trả về trang chủ. Truyền path (vd "entrance-fee"
// hoặc "nearby/hue-imperial-city") → trả về đường dẫn tuyệt đối trong ngôn ngữ đó.
export function pagePath(locale: Locale, path?: string): string {
  const base = locale === 'vi' ? '/' : '/en/';
  if (!path) return base;
  return `${base}${path}/`;
}

// hreflang cho một trang nội dung phụ (không phải trang chủ).
// Chuẩn hóa: vi ở gốc, en ở /en/. x-default trỏ về bản tiếng Việt.
export function pageHreflang(site: string, path: string): { hreflang: string; href: string }[] {
  const base = site.replace(/\/$/, '');
  const vi = `${base}/${path}/`;
  const en = `${base}/en/${path}/`;
  return [
    { hreflang: 'vi', href: vi },
    { hreflang: 'en', href: en },
    { hreflang: 'x-default', href: vi }
  ];
}

// Trả về map { mã-hreflang: url-tuyệt-đối } cho một site gốc đã chuẩn hóa.
export function alternateUrls(site: string): Record<Locale, string> {
  const base = site.replace(/\/$/, '');
  return { vi: `${base}/`, en: `${base}/en/` };
}

// hreflang cho <head>: luôn có x-default trỏ về bản tiếng Việt (ngôn ngữ chính).
export function hreflangAlternates(site: string): { hreflang: string; href: string }[] {
  const a = alternateUrls(site);
  return [
    { hreflang: 'vi', href: a.vi },
    { hreflang: 'en', href: a.en },
    { hreflang: 'x-default', href: a.vi }
  ];
}
