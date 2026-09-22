import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-ok shadow-[0_0_8px_rgba(127,191,143,0.6)] pulse-dot" />
          <span className="text-[12.5px] text-muted">open_to_internships: true</span>
        </div>
        <div className="flex gap-7">
          <a
            href={`mailto:${profile.email}`}
            className="text-[12.5px] text-muted hover:text-accent transition-colors"
          >
            email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[12.5px] text-muted hover:text-accent transition-colors"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
