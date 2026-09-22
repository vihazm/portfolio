import Link from "next/link";

export default function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, "0");

  if (project.placeholder) {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 flex flex-col justify-between min-h-[220px]">
        <div className="opacity-60">
          <div className="text-accent text-xs font-semibold">{num}</div>
          <div className="text-lg font-semibold mt-2.5">{project.title.toLowerCase()}</div>
          <p className="text-[13px] leading-relaxed text-muted mt-2.5">{project.summary}</p>
        </div>
        <span className="tag-muted w-fit">in_progress</span>
      </div>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group rounded-xl border border-border bg-surface p-8 flex flex-col justify-between min-h-[220px] transition-all hover:border-accent hover:shadow-[0_0_0_1px_rgba(111,155,196,0.28)] hover:-translate-y-0.5"
    >
      <div>
        <div className="text-accent text-xs font-semibold">{num}</div>
        <div className="text-lg font-semibold mt-2.5">{project.title.toLowerCase()}</div>
        <p className="text-[13px] leading-relaxed text-muted mt-2.5">{project.summary}</p>
      </div>
      <div className="flex gap-2 flex-wrap mt-4">
        {project.tags.slice(0, 2).map((t) => (
          <span key={t} className="tag">
            {t.toLowerCase()}
          </span>
        ))}
      </div>
    </Link>
  );
}
