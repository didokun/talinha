import { Button } from "@/components/ui/button";
import { SiteFrame } from "@/components/SiteFrame";

type TidivaPageProps = {
  productScoped?: boolean;
};

export function TidivaSupportPage({ productScoped = false }: TidivaPageProps) {
  const privacyHref = productScoped ? "/tidiva/privacy/" : "/privacy/";
  const termsHref = productScoped ? "/tidiva/legal/" : "/legal/";

  return (
    <SiteFrame current="Contact" footerCurrent="Contact" productScoped={productScoped}>
      <main id="main">
        <article className="copy">
          <h1>Contact Talinha Studio</h1>
          <p className="intro">We make Tidiva, an iOS app for planning home-care routines. For help, include your iPhone model, iOS version, Tidiva version, and the steps that led to the issue. Please don’t send passwords or payment details.</p>
          <Button asChild className="cta">
            <a href="mailto:support@talinha.com">support@talinha.com</a>
          </Button>
          <h2>Tidiva support</h2>
          <details>
            <summary>How do I change or cancel Premium?</summary>
            <p>Open Settings → Subscription in Tidiva, or manage the plan from your Apple Account subscriptions. Apple handles billing and cancellation. To recover an eligible purchase, use Restore purchases in Tidiva with the Apple Account that made it. For a refund, contact Apple through <a href="https://reportaproblem.apple.com/">Report a Problem</a>.</p>
          </details>
          <details>
            <summary>How do I remove calendar events?</summary>
            <p>Open Calendar in Tidiva, choose Remove Tidiva events, and confirm. Your tasks stay in Tidiva. To change calendar permissions, use your iPhone settings.</p>
          </details>
          <details>
            <summary>How do I change reminders or erase my data?</summary>
            <p>In Settings → Daily reminders, change the times or turn reminders off. To start fresh, open Settings → Data and privacy → Reset Tidiva. Remove exported calendar events first if you also want them erased. Manage any paid subscription separately through Apple.</p>
          </details>
          <details>
            <summary>How do I make a privacy request?</summary>
            <p>Email <a href="mailto:support@talinha.com">support@talinha.com</a> and describe your request. Tidiva keeps most planning information on your device, so tell us what information you’re asking about without including passwords, payment information, or private task details.</p>
          </details>
          <p>Read the <a href={privacyHref}>Tidiva privacy policy</a> or <a href={termsHref}>purchase terms</a>.</p>
        </article>
      </main>
    </SiteFrame>
  );
}

export function TidivaPrivacyPage({ productScoped = false }: TidivaPageProps) {
  const contactHref = productScoped ? "/tidiva/contact/" : "/contact/";
  const termsHref = productScoped ? "/tidiva/legal/" : "/legal/";

  return (
    <SiteFrame footerCurrent="Privacy" productScoped={productScoped}>
      <main id="main">
        <article className="copy">
          <h1>Privacy policy</h1>
          <p>Last updated November 8, 2026</p>
          <h2>Who we are and what this covers</h2>
          <p>Talinha Studio develops and publishes Tidiva, our iOS app for planning home-care routines. This policy explains data handling in Tidiva and on this website. For privacy questions or requests, email <a href="mailto:support@talinha.com">support@talinha.com</a>.</p>
          <h2>Your home and profile</h2>
          <p>Tidiva stores your rooms, floors, tasks, routines, work schedule, reminder settings, and activity history locally on your device. Optional profile fields include your name and age. If you choose Sign in with Apple, Apple may share the name, email or private relay address, and account identifier you authorize; Tidiva saves shared profile details locally. We do not receive your planning data through the app unless you choose to send it to us, such as in a support message. Device backups are controlled by your Apple settings.</p>
          <h2>Calendar, reminders and exports</h2>
          <p>Reminders are scheduled on your device with your permission. When you request calendar sync, Tidiva asks for calendar access to create, update, or remove its events. Event titles, dates, rooms, durations, and task notes are written to the calendar account you choose and may sync through that provider. Remove Tidiva events in the app before resetting it. A CSV export is saved to the destination you select; exported files are handled under that destination’s terms.</p>
          <h2>Purchases and advertising</h2>
          <p>Apple processes App Store payments and manages subscriptions. Tidiva checks purchase information to unlock Premium; Talinha Studio does not receive your full payment-card details. In the free version, Google AdMob may process IP addresses, device identifiers, app interactions, and diagnostic information to deliver and measure ads and prevent fraud. The data used depends on consent, device settings, and the ad served. Tidiva does not include your task text or profile details in ad requests. Your entered age is used locally to determine ad eligibility. Where available, review advertising privacy choices in Tidiva’s settings.</p>
          <p><a href="https://policies.google.com/technologies/partner-sites">How Google uses partner data</a> · <a href="https://www.apple.com/legal/privacy/">Apple privacy policy</a></p>
          <h2>Website and support</h2>
          <p>This website has no analytics scripts or contact form. The hosting provider may process IP addresses and request metadata to deliver pages and protect the service, subject to its own terms and retention practices. If you email us, we receive your email address and message. We use that correspondence to answer your request and retain it only as needed for support, recordkeeping, and applicable obligations.</p>
          <h2>Retention and deletion</h2>
          <p>Use Settings → Data and privacy → Reset Tidiva to clear the app’s local data. This does not automatically remove events already written to your calendar, CSV files saved elsewhere, or purchase records held by Apple. Manage those separately with the calendar provider, file destination, or Apple Account. Contact us about support correspondence or other information held by Talinha Studio.</p>
          <h2>Your choices</h2>
          <p>Change app permissions in iPhone Settings, adjust advertising choices where available in Tidiva, and reset local data from the app. Exported files and calendar copies are controlled separately. Depending on where you live, you may have rights to access, correct, or delete personal information, object to processing, or contact your local data protection authority. Email us for help with information held by Talinha Studio.</p>
          <h2>Policy updates</h2>
          <p>We may update this policy when Tidiva, this website, or applicable requirements change. The latest version and its effective date will be posted on this page.</p>
          <p><a href={contactHref}>Contact Tidiva support</a> · <a href={termsHref}>Terms and purchases</a></p>
        </article>
      </main>
    </SiteFrame>
  );
}

export function TidivaTermsPage({ productScoped = false }: TidivaPageProps) {
  const contactHref = productScoped ? "/tidiva/contact/" : "/contact/";
  const privacyHref = productScoped ? "/tidiva/privacy/" : "/privacy/";

  return (
    <SiteFrame footerCurrent="Legal" productScoped={productScoped}>
      <main id="main">
        <article className="copy">
          <h1>Tidiva terms</h1>
          <p>Last updated November 8, 2026. These terms describe the license and purchases for Tidiva, an iOS app developed and published by Talinha Studio.</p>
          <h2>Publisher and support</h2>
          <p>Talinha Studio makes mobile apps designed to make everyday life easier. Tidiva is our iOS app for planning home-care routines. For support, licensing, or privacy inquiries, email <a href="mailto:support@talinha.com">support@talinha.com</a>.</p>
          <h2>App license</h2>
          <p>Apple’s Standard End User License Agreement applies to App Store copies unless Talinha Studio provides a custom license agreement. The applicable agreement describes your permission to use Tidiva and its limitations. Nothing here removes consumer rights that cannot be excluded under the law where you live.</p>
          <p><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Read Apple’s Standard EULA</a></p>
          <h2>Subscriptions and free trials</h2>
          <p>Available plans, prices, billing periods, and trial offers are shown in Tidiva and in Apple’s purchase confirmation before you subscribe. Monthly and annual subscriptions renew automatically unless canceled. If an eligible seven-day trial is offered, it converts to the selected paid plan unless canceled before the trial ends. To avoid renewal, cancel at least 24 hours before the current period ends.</p>
          <p>Manage or cancel a plan in Tidiva’s Settings → Subscription or through your Apple Account subscriptions. Deleting Tidiva does not cancel a subscription. Apple processes subscription payments and refund requests; use <a href="https://reportaproblem.apple.com/">Report a Problem</a> for refund support.</p>
          <h2>Lifetime access</h2>
          <p>Where offered, Lifetime Premium is a one-time, non-consumable purchase rather than a renewing subscription. Use Restore purchases in Tidiva with the same Apple Account to recover an eligible purchase.</p>
          <h2>Privacy and data</h2>
          <p>How Tidiva and this website handle information, including local app data, calendar access, advertising, and support requests, is explained in our <a href={privacyHref}>privacy policy</a>. Calendar events and exported files are managed separately from Tidiva.</p>
          <p><a href={contactHref}>Contact Tidiva support</a></p>
        </article>
      </main>
    </SiteFrame>
  );
}