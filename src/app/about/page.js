import HeroPortrait from "@/components/HeroPortrait";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export const metadata = {
  title: "About — Vihas Sanchith",
};

const timeline = [
  {
    year: profile.education.graduation,
    now: false,
    label: `Expected graduation, ${profile.education.program}.`,
  },
  {
    year: "NOW",
    now: true,
    label: `Year 3 · ${profile.education.school} — deepening frontend, mobile, and UX-focused engineering with industry experience.`,
  },
  {
    year: "Y2",
    now: false,
    label: "Led HomeHero · developed Northstar Rentals · developed Global News.",
  },
  {
    year: "Y1",
    now: false,
    label: "Starting out — first steps into software engineering.",
  },
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-[1120px] px-6 sm:px-16 pt-20 sm:pt-24 pb-16 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <Reveal>
            <div className="flex items-center gap-2.5 text-[12px] text-foreground/80 mb-5">
              <span className="w-[22px] h-px bg-border" />
              about
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-[28px] sm:text-[34px] font-semibold leading-[1.35] max-w-[480px]">
              Technically sound, and <em className="not-italic text-accent">intuitive</em> to use.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10">
              <HeroPortrait src="/resources/profile-cutout.webp" alt={profile.displayName} />
            </div>
          </Reveal>
        </div>
        <div>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-[15.5px] leading-relaxed text-muted max-w-[52ch]">
              {profile.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex gap-10 mt-8">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[26px] sm:text-[28px] font-bold">{s.value}</div>
                  <div className="text-[12px] text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-6 sm:mx-16 border-t border-border" />

      <section className="mx-auto max-w-[1120px] px-6 sm:px-16 py-16">
        <Reveal>
          <h2 className="text-[22px] sm:text-[24px] font-semibold mb-9">How I work</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {profile.principles.map((pr, i) => (
            <Reveal key={pr} delay={i * 0.08}>
              <div>
                <div className="text-accent text-xs font-semibold">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-[16px] font-medium mt-2.5">{pr}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mx-6 sm:mx-16 border-t border-border" />

      <section className="mx-auto max-w-[1120px] px-6 sm:px-16 py-16">
        <Reveal>
          <h2 className="text-[22px] sm:text-[24px] font-semibold mb-10">Where I&apos;m headed</h2>
        </Reveal>
        <div className="relative pl-8">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-border" />
          {timeline.map((row, i) => (
            <Reveal key={row.year} delay={i * 0.1}>
              <div className={`relative ${i === timeline.length - 1 ? "pb-0" : "pb-10"}`}>
                <div
                  className={`absolute -left-8 top-1 w-[11px] h-[11px] rounded-full ${
                    row.now ? "bg-accent pulse-dot" : "bg-border"
                  }`}
                />
                <div className={`text-2xl font-bold leading-tight ${row.now ? "text-foreground" : "text-muted"}`}>
                  {row.year}
                </div>
                <div className="text-[13.5px] text-muted mt-1 leading-relaxed">{row.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 sm:px-16 pb-20 grid sm:grid-cols-2 gap-12 sm:gap-14">
        <Reveal>
          <div>
            <h3 className="text-[17px] font-semibold mb-4">
              Currently exploring <span className="text-[11px] font-normal text-warn">(in progress)</span>
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {profile.currentlyExploring.map((t) => (
                <span key={t} className="pill-warn">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <h3 className="text-[17px] font-semibold mb-4">
              Technologies I have worked with <span className="text-[11px] font-normal text-ok">(have experience)</span>
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[...new Set(Object.values(profile.stack).flat())].map((t) => (
                <span key={t} className="pill-ok">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
