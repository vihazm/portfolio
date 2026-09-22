import Link from "next/link";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import HeroPortrait from "@/components/HeroPortrait";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { projects, homeFeaturedSlugs } from "@/data/projects";

const featured = homeFeaturedSlugs.map((slug) => projects.find((p) => p.slug === slug));

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-[1120px] px-6 sm:px-16 pt-20 sm:pt-24 pb-20 sm:pb-24 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <Reveal delay={0.05}>
            <div className="flex items-center gap-2.5 text-[12px] text-foreground/80 mb-5">
              <span className="w-[22px] h-px bg-border" />
              who i am
            </div>
          </Reveal>
          <AnimatedHeadline
            lines={["Software that feels", "obvious to use."]}
            accentWord="obvious"
            className="text-[36px] sm:text-[46px] leading-[1.28] font-semibold max-w-[600px]"
          />
          <Reveal delay={0.78}>
            <p className="text-[15.5px] leading-relaxed text-muted max-w-[460px] mt-5">
              {profile.positioning}
            </p>
          </Reveal>
          <Reveal delay={0.88}>
            <div className="flex gap-3.5 mt-8">
              <Link href="/projects" className="btn-primary">
                View projects
              </Link>
              <Link href="/about" className="btn-ghost">
                About me
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="flex justify-center">
          <Reveal delay={0.15} y={0}>
            <HeroPortrait src="/resources/profile-cutout.webp" alt={profile.displayName} />
          </Reveal>
        </div>
      </section>

      <div className="border-t border-border" />

      <section className="mx-auto max-w-[1120px] px-6 sm:px-16 py-20 sm:py-24">
        <Reveal>
          <h2 className="text-[22px] sm:text-[26px] font-semibold leading-snug max-w-[640px]">
            From coursework to shipped product. I build things that hold up,
            stay <span className="text-accent">simple</span> to use, and are
            built around real people, not just requirements.
          </h2>
        </Reveal>
      </section>

      <div className="border-t border-border" />

      <section className="mx-auto max-w-[1120px] px-6 sm:px-16 pt-16 sm:pt-20 pb-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-0 mb-11">
          <h2 className="text-[20px] sm:text-[22px] font-semibold">$ ls ./selected-work</h2>
          <Link href="/projects" className="text-[12.5px] text-muted hover:text-accent transition-colors">
            all projects
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
