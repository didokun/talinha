import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = { title: "Studaya terms and purchases | Talinha Studio", description: "Studaya terms and purchases for the Studaya study planner by Talinha Studio." };
export default function Page() {
  return <SiteFrame productScoped product="studaya" footerCurrent="Legal"><main id="main"><article className="copy"><h1>Studaya terms and purchases</h1><p>Last updated November 11, 2026</p>
<h2>Publisher and contact</h2><p>Studaya is developed and published by Talinha Studio. For app support, licensing or privacy questions, email <a href="mailto:support@talinha.com">support@talinha.com</a>.</p>
<h2>App license</h2><p>Apple’s Standard End User License Agreement applies to App Store copies unless a custom license is provided. See the <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple Standard EULA</a> for the applicable license and limitations. Nothing on this page removes consumer rights that cannot be excluded under applicable law.</p>
<h2>Free and Premium access</h2><p>Studaya offers free functionality and optional Premium features. Available features, plans, prices, billing periods and trial eligibility are displayed in the app and Apple’s purchase confirmation before payment.</p>
<h2>Subscriptions and trials</h2><p>Monthly and annual subscriptions renew automatically unless canceled. Where an eligible seven-day trial is offered, it converts to the selected paid subscription unless canceled before the trial ends. Cancel at least 24 hours before the end of the current period to avoid renewal. Manage subscriptions through your Apple Account. Deleting Studaya or erasing its data does not cancel a subscription.</p>
<h2>Lifetime purchases and restoration</h2><p>Where offered, Lifetime Premium is a one-time, non-consumable purchase rather than a renewing subscription. Restore eligible purchases in Studaya with the Apple Account used for the original purchase. Apple processes payments and refund requests through <a href="https://reportaproblem.apple.com/">Report a Problem</a>.</p>
<h2>Your study plan and files</h2><p>Studaya helps organize study time. Review generated schedules, photo import results and deadlines to make sure they match your requirements. Keep backups of information you need. Calendar copies and exported files are managed separately from the app. Studaya does not guarantee exam results or academic outcomes.</p>
<h2>Privacy</h2><p>Our Studaya privacy policy explains local storage, photo imports, reminders, calendar access, purchases, backups and support correspondence.</p>
<p><a href="/studaya/">Discover Studaya</a> · <a href="/studaya/contact/">Contact</a> · <a href="/studaya/privacy/">Privacy</a> · <a href="/studaya/legal/">Terms and purchases</a></p>
</article></main></SiteFrame>;
}
