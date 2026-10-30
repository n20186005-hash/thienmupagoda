# Thiên Mụ Pagoda independent visitor guide

Two native Astro SSR routes: Vietnamese `/`, English `/en/`. Canonical https://www.thienmupagoda.com/; existing exact dependencies and pnpm lock retained. Node24.21.0 / pnpm12.4.2, Astro7.3.3, Cloudflare adapter14.3.2, Wrangler4.133.0. Historical project name is `thienmupagoda`; SESSION/IMAGES/ASSETS are preserved without new bindings.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm run build
pnpm exec wrangler deploy --dry-run
```

The source Worker compiles through the existing adapter, normalizes established HTTP/non-www entrances to HTTPS www while retaining path/query, and then delegates to the native handler. The guide contains no verified fixed admission tariff or weekly operating schedule. Google Maps figures and closing time are dated manual snapshots, not automatic synchronization or locally collected reviews.

Automatic GA4 is retained and disclosed. Cloudflare edge processing and possible independent visit measurement are distinct. No consent or analytics disable switch is claimed. Maps is an outbound link. Legacy offline cache retirement takes effect only when the browser receives the updated service worker.

Current imagery is an original schematic, explicitly not a photograph or exact site survey; see CREDITS.md. Unverified remote photographs were removed. Local build success is not deployment/production acceptance; see SELF-CHECK.md.
