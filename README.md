# Talinha Studio website

This is a Next.js 16 app styled with Tailwind CSS and shadcn/ui, configured for static export. Run `pnpm install` and `pnpm dev` to work locally. Run `pnpm build` to generate the deployable static site in `out/`.

For Cloudflare Pages Direct Upload, upload the contents of `out/`. The studio homepage is at `/`, the product page at `/tidiva/`, support at `/contact/`, the privacy policy at `/privacy/`, and the license and subscription terms at `/legal/`.

Before publishing, confirm that support@talinha.com receives mail, add the publisher’s actual legal identity and any locally required notices to the legal page, and verify the privacy policy against the production ad settings and hosting provider. Confirm the standard Apple EULA is the one selected for the app. Add the real AdMob publisher record in dist/app-ads.txt once available. Enter the final HTTPS URLs in App Store Connect and link the privacy policy and terms from the iPhone app.
