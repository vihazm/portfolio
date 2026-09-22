import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — Vihas Sanchith` : "Project" };
}

const detailSections = [
  { key: "problem", heading: "The problem" },
  { key: "role", heading: "My role & scope" },
  { key: "outcome", heading: "Outcome" },
];

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const BackLink = (
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-accent transition-colors mb-10"
    >
      <ArrowLeft size={14} strokeWidth={1.5} />
      back to projects
    </Link>
  );

  if (project.placeholder) {
    return (
      <section className="mx-auto max-w-[760px] px-6 sm:px-16 pt-24 sm:pt-28 pb-28 text-center">
        <Reveal>{BackLink}</Reveal>
        <Reveal delay={0.08}>
          <span className="tag-muted mb-5">in_progress</span>
        </Reveal>
        <Reveal delay={0.14}>
          <h1 className="text-[28px] sm:text-[32px] font-semibold mb-4">{project.title}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[15px] text-muted leading-relaxed">{project.summary}</p>
        </Reveal>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-[820px] px-6 sm:px-16 pt-24 sm:pt-28 pb-28">
      <Reveal>{BackLink}</Reveal>

      <Reveal delay={0.06}>
        <div className="flex gap-2 flex-wrap mb-5">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t.toLowerCase()}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="text-[32px] sm:text-[36px] font-semibold mb-3">{project.title}</h1>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="text-[15px] text-muted mb-8">{project.status}</p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="flex gap-4 flex-wrap mb-12">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Live demo <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            GitHub repo <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </Reveal>

      {project.images && project.images.length > 0 && (
        <Reveal delay={0.22}>
          <ProjectGallery images={project.images} />
        </Reveal>
      )}

      {detailSections.map((sec, i) => (
        <Reveal key={sec.key} delay={i * 0.05}>
          <section className="py-8 border-t border-border">
            <h2 className="text-[13px] uppercase tracking-wider text-accent font-semibold mb-3">
              {sec.heading}
            </h2>
            <p className="text-[15px] leading-relaxed text-muted max-w-[65ch]">
              {project[sec.key]}
            </p>
          </section>
        </Reveal>
      ))}

      <Reveal delay={0.15}>
        <section className="py-8 border-t border-border">
          <h2 className="text-[13px] uppercase tracking-wider text-accent font-semibold mb-4">
            Key decisions
          </h2>
          <ul className="space-y-4">
            {project.decisions.map((d, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-accent text-[13px] font-semibold mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-relaxed text-muted max-w-[60ch]">{d}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="py-8 border-t border-border">
          <h2 className="text-[13px] uppercase tracking-wider text-accent font-semibold mb-3">
            Challenges &amp; what I&apos;d do differently
          </h2>
          <p className="text-[15px] leading-relaxed text-muted max-w-[65ch]">{project.challenges}</p>
        </section>
      </Reveal>
    </article>
  );
}
