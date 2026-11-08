import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact and support | Talinha Studio",
  description: "Get help with Tidiva subscriptions, reminders, calendar events, or local data.",
};

export default function ContactPage() {
  return (
    <SiteFrame current="Contact" footerCurrent="Contact">
      <main id="main">
        <article className="copy">
          <h1>Contact the studio</h1>
          <p className="intro">Need a hand with Tidiva? Include your iPhone model, iOS version, and what you were doing when the issue appeared.</p>
          <Button asChild className="cta">
            <a href="mailto:support@talinha.com">support@talinha.com</a>
          </Button>
          <h2>Tidiva support</h2>
          <details>
            <summary>How do I change or cancel Premium?</summary>
            <p>Open Settings → Subscription in Tidiva and choose Change or cancel subscription. Apple handles billing. To recover an eligible purchase, use Restore purchases with the Apple Account that made it.</p>
          </details>
          <details>
            <summary>How do I remove calendar events?</summary>
            <p>Open Calendar in Tidiva, choose Remove Tidiva events, and confirm. Your tasks stay in Tidiva. To change calendar permissions, use your iPhone settings.</p>
          </details>
          <details>
            <summary>How do I change reminders or erase my data?</summary>
            <p>In Settings → Daily reminders, change the times or turn reminders off. To start fresh, open Settings → Data and privacy → Reset Tidiva. Remove exported calendar events first if you also want them erased. Manage any paid subscription separately through Apple.</p>
          </details>
        </article>
      </main>
    </SiteFrame>
  );
}