import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Legal and purchase terms | Talinha Studio",
  description: "Publisher contact, Tidiva app license, subscription renewal and lifetime purchase terms.",
};

export default function LegalPage() {
  return (
    <SiteFrame footerCurrent="Legal">
      <main id="main">
        <article className="copy">
          <h1>Legal &amp; terms</h1>
          <p>November 8, 2026 · Talinha Studio</p>
          <h2>Publisher contact</h2>
          <p>Talinha Studio publishes this site and develops Tidiva. For support, licensing or privacy inquiries, email <a href="mailto:support@talinha.com">support@talinha.com</a>.</p>
          <h2>App license</h2>
          <p>The standard Apple end user license agreement applies to Tidiva when obtained from the App Store. It covers the license to use the app, permitted use and applicable limitations. Your statutory consumer rights apply.</p>
          <p><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Read Apple’s Standard EULA</a></p>
          <h2>Premium subscriptions</h2>
          <p>Monthly and annual plans renew automatically unless canceled. Apple displays the localized price, billing period and any introductory offer before you confirm. For eligible subscribers, the seven-day trial converts to the selected paid subscription unless canceled. To avoid the next charge, cancel at least 24 hours before the trial or current period ends.</p>
          <p>Manage or cancel through Tidiva’s Settings → Subscription, or through your Apple Account subscriptions. Apple handles refund requests through <a href="https://reportaproblem.apple.com/">Report a Problem</a>.</p>
          <h2>Lifetime access</h2>
          <p>Lifetime Premium is a one-time, non-consumable purchase. Use Restore purchases with the same Apple Account to recover eligible purchases.</p>
          <h2>Privacy</h2>
          <p>Our <a href="/privacy/">privacy policy</a> describes local storage, calendar permissions, purchases, ads and support requests.</p>
        </article>
      </main>
    </SiteFrame>
  );
}