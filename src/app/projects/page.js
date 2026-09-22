import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Vihas Sanchith",
};

const featured = projects.find((p) => p.slug === "homehero");
const rest = projects.filter((p) => p.slug !== "homehero");

export default function Projects() {
  return (
    <>
      <header className="mx-auto max-w-[1120px] px-6 sm:px-16 pt-20 sm:pt-24 pb-14">
        <Reveal>
          <div className="flex items-center gap-2.5 text-[12px] text-foreground/80 mb-4">
            <span className="w-[22px] h-px bg-border" />
            selected work
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-[28px] sm:text-[32px] font-semibold">Projects</h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="text-[14px] text-muted max-w-[460px] mt-3.5 leading-relaxed">
            A working selection of what I&apos;ve built, with the reasoning behind the decisions, not just the tech list.
          </p>
        </Reveal>
      </header>

      <section className="mx-auto max-w-[1120px] px-6 sm:px-16 pb-10">
        <Reveal>
          <div className="rounded-xl border border-border bg-surface p-8 sm:p-10 grid md:grid-cols-[1.4fr_1fr] gap-10 transition-colors hover:border-accent">
            <div>
              <div className="flex gap-2 flex-wrap mb-4">
                {featured.tags.map((t) => (
                  <span key={t} className="tag">
                    {t.toLowerCase()}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${featured.slug}`}
                className="text-[24px] sm:text-[26px] font-semibold hover:text-accent transition-colors"
              >
                {featured.title}
              </Link>
              <p className="text-[15px] text-muted mt-3 leading-relaxed">{featured.summary}</p>
              <div className="mt-6">
                <Link href={`/projects/${featured.slug}`} className="btn-primary">
                  See more
                </Link>
              </div>
            </div>
            <div className="md:border-l border-border md:pl-10">
              <div className="text-[11px] uppercase tracking-wider font-bold text-foreground mb-2">Role</div>
              <p className="text-[14px] text-muted leading-relaxed mb-5">{featured.role}</p>
              <div className="text-[11px] uppercase tracking-wider font-bold text-foreground mb-2">Status</div>
              <p className="text-[14px] text-muted">{featured.status}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1120px] px-6 sm:px-16 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProjectCard project={p} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
