import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tidiva cleaning planner for iPhone | Talinha Studio",
  description: "Pick rooms, plan chores around office days, and follow a cleaning routine one task at a time.",
};

export default function TidivaPage() {
  return (
    <SiteFrame current="Tidiva">
      <main id="main">
        <section className="hero">
          <div>
            <div className="product"><img src="/assets/tidiva.png" alt="" />Tidiva for iPhone</div>
            <h1>Your chores,<br /><em>at your pace.</em></h1>
            <p>Pick your rooms, set aside your office days, and give each task a place on your calendar.</p>
            <Button asChild className="cta">
              <a href="#tour">See how it works ↓</a>
            </Button>
          </div>
          <div className="art">
            <img className="phone" src="/assets/today.jpg" alt="Tidiva’s Today screen with weekly progress and three cleaning tasks" />
          </div>
        </section>
        <section id="tour">
          <h2>A week with Tidiva</h2>
          <div className="grid">
            <figure>
              <figcaption>Choose your rooms</figcaption>
              <p>Build your plan one floor at a time.</p>
              <img loading="lazy" src="/assets/home.jpg" alt="My Home screen listing the kitchen, living room, bedroom and entryway" />
            </figure>
            <figure>
              <figcaption>Start with a routine</figcaption>
              <p>Try an after-work reset or a break between calls.</p>
              <img loading="lazy" src="/assets/routines.jpg" alt="Routine library with four starting points" />
            </figure>
            <figure>
              <figcaption>Check your day</figcaption>
              <p>Review tasks by date or send them to Apple Calendar.</p>
              <img loading="lazy" src="/assets/calendar.jpg" alt="Monthly calendar and task list for the selected day" />
            </figure>
          </div>
        </section>
        <section className="strip">
          <h2>Free or Premium</h2>
          <div>
            <p>Plan your rooms and tasks for free with ads. Premium adds ad-free sessions, 30-day history, progress by room, and CSV export. Choose monthly, annual, or lifetime access. Eligible subscribers can try Premium free for seven days.</p>
            <a href="/legal/">Purchase terms</a>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}