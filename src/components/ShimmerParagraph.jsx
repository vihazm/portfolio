function renderWithAccent(text, accentWord) {
  const parts = text.split(accentWord);
  return parts.flatMap((part, i) => {
    if (i === parts.length - 1) return [part];
    return [
      part,
      <span key={i} className="text-white">
        {accentWord}
      </span>,
    ];
  });
}

/**
 * Two identical copies of the paragraph stacked in the same grid cell: the
 * base layer sets the real (static) colors, the top layer is clipped to a
 * moving gradient band so a soft light sweeps across the text on a loop,
 * like a scan-line passing over terminal output. Pure CSS, no JS timers.
 */
export default function ShimmerParagraph({ text, accentWord, className }) {
  return (
    <div className="relative grid">
      <p className={`${className} text-black [grid-area:1/1]`}>
        {renderWithAccent(text, accentWord)}
      </p>
      <p
        aria-hidden="true"
        className={`${className} shimmer-sweep [grid-area:1/1] pointer-events-none select-none`}
      >
        {text}
      </p>
    </div>
  );
}
