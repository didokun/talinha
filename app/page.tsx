import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Independent app studio | Talinha Studio",
  description: "Talinha Studio makes helpful apps that make everyday life easier. Discover Tidiva for home care and Studaya for study planning.",
};

export default function HomePage() {
  return (
    <SiteFrame current="Studio">
      <main id="main">
        <section className="hero">
          <div>
            <h1>Small tools for <em>everyday life.</em></h1>
            <p>Talinha Studio is an app studio making useful mobile apps that make everyday life easier. Tidiva makes room for home care. Studaya helps you plan your studies and focus on what’s next.</p>
            <Button asChild className="cta">
              <a href="#apps">Discover our apps ↓</a>
            </Button>
          </div>
          <div className="art duo-art">
            <img className="phone" src="/assets/today.jpg" alt="Tidiva’s Today screen with weekly progress and three cleaning tasks" />
            <img className="phone second-phone" src="/assets/studaya/today.png" alt="Studaya study dashboard" />
          </div>
        </section>
        <section id="apps" className="app-cards">
          <article><div className="product"><img src="/assets/tidiva.png" alt="" />Tidiva</div><h2>A calmer home.</h2><p>Plan your rooms, chores and routines around the week you actually have.</p><Button asChild className="cta"><a href="/tidiva/">Explore Tidiva →</a></Button></article>
          <article><div className="product"><img src="/assets/studaya/icon.png" alt="" />Studaya</div><h2>A clearer study day.</h2><p>Organize subjects, prepare for deadlines and make space for focused revision.</p><Button asChild className="cta"><a href="/studaya/">Explore Studaya →</a></Button></article>
        </section>
        <section className="strip">
          <h2>Apps for everyday life.</h2>
          <p>We make practical apps around the routines people already have. From looking after your home with Tidiva to preparing your next exam with Studaya, our apps turn a busy week into manageable steps.</p>
        </section>
      </main>
    </SiteFrame>
  );
}