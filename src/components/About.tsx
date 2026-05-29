import { FC } from "react";

const About: FC = () => {
  return (
    <section
      className="relative overflow-hidden border-b border-ink/10 bg-slate-50 pt-28 text-ink transition-colors duration-300 dark:border-white/10 dark:bg-slate-950 dark:text-slate-100 min-[751px]:pt-24"
      aria-labelledby="intro-heading"
    >
      <div className="section-shell grid min-h-[calc(100svh-5rem)] items-center gap-10 py-10 sm:py-14 md:grid-cols-[1.08fr_0.92fr] md:gap-12 lg:py-20">
        <div className="max-w-3xl animate-[fadeSlide_700ms_ease-out_both]">
          <p className="section-kicker">Brand communications / VC / Growth</p>
          <h1
            id="intro-heading"
            className="mt-5 text-fluid-hero max-w-[12ch] font-black tracking-normal"
          >
            Ideas, systems, and stories that move
          </h1>
          <div className="mt-7 max-w-2xl space-y-5 text-fluid-body font-light text-charcoal dark:text-slate-300 sm:mt-8">
            <p>
              Hello, I'm Stanley. I'm a brand communications professional with
              some skin in content marketing, growth strategy, and venture
              capital. I occasionally mumble about tech too.
            </p>
            <p>
              I'm a big fan of crazy ideas, hobbyist{" "}
              <a
                href="https://vsco.co/swxxshh/gallery"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink underline decoration-cyan decoration-2 underline-offset-4 transition hover:text-coral dark:text-white"
              >
                photographer
              </a>
              , seasonal poet, an erratic reader, and a rap aficionado who is
              deeply in love with electronic beats.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work-heading"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-coral dark:bg-white dark:text-ink dark:hover:bg-coral dark:hover:text-white"
            >
              View selected work
            </a>
            <a
              href="mailto:vocal4real@gmail.com"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 bg-white px-6 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:border-ink dark:border-white/15 dark:bg-slate-900 dark:text-white dark:hover:border-white"
            >
              Start a conversation
            </a>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-y border-ink/10 py-5 dark:border-white/10">
            <div>
              <dt className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-charcoal/60 dark:text-slate-400">
                Focus
              </dt>
              <dd className="mt-2 text-sm font-extrabold sm:text-base">
                Brand
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-charcoal/60 dark:text-slate-400">
                Space
              </dt>
              <dd className="mt-2 text-sm font-extrabold sm:text-base">Tech</dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-charcoal/60 dark:text-slate-400">
                Mode
              </dt>
              <dd className="mt-2 text-sm font-extrabold sm:text-base">
                Story
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-none">
          <img
            className="aspect-[3/4] min-h-[32rem] w-full rounded-lg object-cover shadow-soft ring-1 ring-ink/10 dark:ring-white/10 sm:min-h-[38rem] md:min-h-[44rem] lg:min-h-[48rem]"
            src="/images/stan3.jpg"
            alt="Portrait of Stanley Osi"
          />
          {/* <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/50 bg-white/85 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-coral">
              Currently
            </p>
            <p className="mt-1 text-sm font-extrabold text-ink dark:text-white sm:text-base">
              Engaging platforms and community at Oui Capital.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
