import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Independent app studio | Talinha Studio",
  description: "Meet Talinha Studio and explore Tidiva, our room-by-room cleaning planner for iPhone.",
};

export default function HomePage() {
  return (
    <SiteFrame current="Studio">
      <main id="main">
        <section className="hero">
          <div>
            <h1>Small tools for <em>everyday life.</em></h1>
            <p>We’re Talinha Studio. Our first iPhone app, Tidiva, helps you find room for housework in a week that’s already full.</p>
            <Button asChild className="cta">
              <a href="/tidiva/">Explore Tidiva →</a>
            </Button>
          </div>
          <div className="art">
            <img className="phone" src="/assets/today.jpg" alt="Tidiva’s Today screen with weekly progress and three cleaning tasks" />
          </div>
        </section>
        <section className="strip">
          <h2>Built around your week.</h2>
          <p>In the office Monday through Wednesday? With Tidiva, you can leave those days free, pick the rooms that need attention, and see what fits on Thursday.</p>
        </section>
      </main>
    </SiteFrame>
  );
}