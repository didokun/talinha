import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Studaya study planner for iPhone and iPad | Talinha Studio",
  description: "Plan your subjects, revision and deadlines with Studaya. A study planner with focus sessions for iPhone and iPad, by Talinha Studio.",
};

export default function StudayaPage() {
  return (
    <SiteFrame current="Studaya" productScoped product="studaya">
      <main id="main">
        <section className="hero">
          <div>
            <div className="product"><img src="/assets/studaya/icon.png" alt="" />Studaya · an iOS app by Talinha Studio</div>
            <h1>Your studies,<br /><em>one day at a time.</em></h1>
            <p>Bring your subjects, deadlines and revision into one plan. Studaya helps you find time to study, prepare for exams and stay focused on iPhone and iPad.</p>
            <Button asChild className="cta"><a href="#tour">See how it works ↓</a></Button>
          </div>
          <div className="art"><img className="phone" src="/assets/studaya/today.png" alt="Studaya home screen with a study overview and daily plan" /></div>
        </section>
        <section id="tour">
          <h2>Make room for your next chapter.</h2>
          <div className="grid">
            <figure><figcaption>Keep subjects together</figcaption><p>Organize courses and tutorials by subject.</p><img loading="lazy" src="/assets/studaya/subjects.png" alt="Studaya subjects screen" /></figure>
            <figure><figcaption>Plan around deadlines</figcaption><p>See your study calendar and prepare for upcoming exams.</p><img loading="lazy" src="/assets/studaya/planner.png" alt="Studaya calendar with a subject and revision schedule" /></figure>
            <figure><figcaption>Take time to focus</figcaption><p>Use a focus timer with breaks that fit your rhythm.</p><img loading="lazy" src="/assets/studaya/focus.png" alt="Studaya Focus timer" /></figure>
          </div>
        </section>
        <section className="strip"><h2>Your rhythm.<br />Your study plan.</h2><p>Set your availability and add your chapters and deadlines. Studaya schedules revision around them, keeps completed sessions, and recalculates missed work. Optional reminders and Apple Calendar export help you follow along.</p></section>
        <section className="strip"><h2>Free or Premium</h2><div><p>Start for free. Premium unlocks features including photo timetable import, a 30-day focus overview, study time by subject and CSV export. Monthly, annual and lifetime options are shown in the app, with any eligible trial before purchase.</p><a href="/studaya/legal/">Purchase terms</a> · <a href="/studaya/contact/">Get support</a></div></section>
      </main>
    </SiteFrame>
  );
}
