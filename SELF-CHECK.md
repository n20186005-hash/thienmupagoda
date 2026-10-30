# Local verification and release scope

Use Node24.21 / pnpm12.4.2, normal `pnpm install --frozen-lockfile`, `pnpm check`, and the historical `pnpm run build`. Deployment is a separate authorised step. Default `pnpm exec wrangler deploy --dry-run` must follow the generated native Cloudflare configuration and preserve SESSION/IMAGES/ASSETS. Exact dependency and lock versions remain unchanged.

Check both normal SSR languages, their sitemap/canonical/hreflang, full known-host redirect targets including path/query, assets and unknown/explicit404 aliases. Error pages must be HTTP404/noindex without canonical metadata. Browser layout, actual interactions and exact production release remain separate acceptance gates.
