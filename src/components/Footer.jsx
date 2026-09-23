export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-16 py-10 flex items-center justify-center">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-ok shadow-[0_0_8px_rgba(127,191,143,0.6)] pulse-dot" />
          <span className="text-[15px] text-muted">Currently looking for an internship opportunity</span>
        </div>
      </div>
    </footer>
  );
}
