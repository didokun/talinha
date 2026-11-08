import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Independent app studio | Talinha Studio",
  description: "Talinha Studio makes helpful apps that make everyday life easier. Meet Tidiva, our cleaning planner for iOS.",
};

export default function HomePage() {
  return (
    <SiteFrame current="Studio">
      <main id="main">
        <section className="hero">
          <div>
            <h1>Small tools for <em>everyday life.</em></h1>
            <p>Talinha Studio is an app studio making useful mobile apps that make everyday life easier. Our first iOS app, Tidiva, helps you fit home care into a week that’s already full.</p>
            <Button asChild className="cta">
              <a href="/tidiva/">Explore Tidiva →</a>
            </Button>
          </div>
          <div className="art">
            <img className="phone" src="/assets/today.jpg" alt="Tidiva’s Today screen with weekly progress and three cleaning tasks" />
          </div>
        </section>
        <section className="strip">
          <h2>Apps for everyday life.</h2>
          <p>We make practical apps around the routines people already have. Tidiva is our first iOS app: choose the rooms that need attention, leave busy days free, and find a manageable time for home care.</p>
        </section>
      </main>
    </SiteFrame>
  );
}