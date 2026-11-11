import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Studaya support | Talinha Studio", description: "Studaya support for the Studaya study planner by Talinha Studio." };
export default function Page() {
  return <SiteFrame productScoped product="studaya" footerCurrent="Contact" current="Contact"><main id="main"><article className="copy"><h1>Studaya support</h1><p className="intro">Need help with Studaya? Email us with your device model, iOS version, app version and the steps that led to the issue. Please do not include passwords, payment details or private study documents.</p><Button asChild className="cta"><a href="mailto:support@talinha.com?subject=Studaya%20support">support@talinha.com</a></Button>
<h2>Planning and revision</h2><details><summary>How do I change my study plan?</summary><p>Add your subjects, courses and deadlines, then review your availability and revision rhythm in Settings. Changes recalculate upcoming sessions while preserving completed sessions. If work cannot fit before a deadline, review the unscheduled sessions and your availability.</p></details>
<details><summary>How do I manage Premium?</summary><p>Open Settings → Subscription to view offers or restore eligible purchases with the Apple Account used to buy them. Manage or cancel subscriptions in your Apple Account subscriptions. Deleting the app does not cancel a subscription. For refunds, use <a href="https://reportaproblem.apple.com/">Apple’s Report a Problem</a>.</p></details>
<details><summary>How do I remove Apple Calendar events?</summary><p>Open Settings → Apple Calendar and choose the option to delete exported events before erasing or uninstalling Studaya. Stopping synchronization alone keeps existing events. Studaya only removes events tracked as exported by this installation; personal events remain.</p></details>
<details><summary>How do I back up or erase my data?</summary><p>Use Settings → Backup and restore to save a backup to a location you choose. To reset the app, open Settings → Data and privacy → Erase Studaya data. Remove exported calendar events first. Backups, exported files and Apple purchase records are managed separately.</p></details>
<details><summary>How do I request privacy help?</summary><p>Email support@talinha.com and describe your request. Study data is stored locally, so avoid attaching private documents unless they are needed to investigate your issue.</p></details>
<p><a href="/studaya/">Discover Studaya</a> · <a href="/studaya/contact/">Contact</a> · <a href="/studaya/privacy/">Privacy</a> · <a href="/studaya/legal/">Terms and purchases</a></p>
</article></main></SiteFrame>;
}
