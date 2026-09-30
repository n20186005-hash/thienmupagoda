# Self-check

Required clean-room sequence:
1. `rm -rf node_modules dist`
2. `CI=1 corepack pnpm install --frozen-lockfile`
3. `pnpm check`
4. `pnpm build`
5. `grep -R -nE 'example\.com|localhost|chrome-extension://' dist || true`
6. The canonical domain is fixed in `astro.config.ts` (`https://www.thienmupagoda.com`, overridable via `SITE_URL`), so the sitemap is always generated. Inspect the generated `sitemap-index.xml` and confirm all URLs use that real domain and carry `hreflang` alternates.

This package was assembled in a runtime where direct npm registry downloads were blocked, so dependency installation/build verification could not be completed in that runtime. The source-level checks and version pinning were completed; run the sequence above in a network-enabled clean environment before production deploy.
