const rings = [
  { s: 240 },
  { s: 480, dash: true },
  { s: 720 },
  { s: 960, dash: true },
];

const blips = [
  { dx: -140, dy: 60, delay: 8.2 },
  { dx: -80, dy: 190, delay: 6.8 },
  { dx: -240, dy: -20, delay: 9.2 },
  { dx: 100, dy: 120, delay: 4.7 },
];

export default function RadarBackground() {
  return (
    <div aria-hidden="true" className="rd-bg">
      <div className="rd-region">
        <div className="rd-dots" />
        {rings.map((r) => (
          <div key={r.s} className={`rd-ring${r.dash ? " dash" : ""}`} style={{ "--rd-s": `${r.s}px` }} />
        ))}
        <div className="rd-wedge" />
        <div className="rd-lit" />
        {blips.map((b) => (
          <div
            key={b.delay}
            className="rd-blip"
            style={{ "--rd-dx": `${b.dx}px`, "--rd-dy": `${b.dy}px`, animationDelay: `${b.delay}s` }}
          />
        ))}
        <div className="rd-hub" />
      </div>
    </div>
  );
}
