# Talinha Studio website

This is a Next.js 16 app styled with Tailwind CSS and shadcn/ui, configured for static export. Run `pnpm install` and `pnpm dev` to work locally. Run `pnpm build` to generate the deployable static site in `out/`.


For Cloudflare Pages Direct Upload, upload the contents of `out/`. The studio homepage is at `/`, the product page is at `/tidiva/`, and the Tidiva-specific support, privacy, and terms pages are at `/tidiva/contact/`, `/tidiva/privacy/`, and `/tidiva/legal/`. Studio-level versions remain available at `/contact/`, `/privacy/`, and `/legal/`.

Before publishing, confirm that support@talinha.com receives mail, add the publisher’s actual legal identity and any locally required notices to the legal page, and verify the privacy policy against the production ad settings and hosting provider. For Tidiva, set the App Store Connect Support URL to `https://<your-domain>/tidiva/contact/` and Privacy Policy URL to `https://<your-domain>/tidiva/privacy/`. Link `https://<your-domain>/tidiva/legal/` from the app and listing. Apple’s Standard EULA applies unless you provide a custom agreement; configure a custom EULA in App Store Connect only if one is intended. Complete App Privacy declarations separately and make sure they match the production app. Add the real AdMob publisher record in `public/app-ads.txt` once available; it will be exported to `out/app-ads.txt`.
