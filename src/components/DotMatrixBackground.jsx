export default function DotMatrixBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="dm-layer dm-dots" />
      <div className="dm-layer dm-bandglow" />
      <div className="dm-layer dm-dots-lit" />

      <div className="dm-orbit" style={{ right: -250, top: -210, width: 780, height: 780 }}>
        <div className="dm-ring" style={{ inset: 0 }} />
        <div className="dm-ring dash" style={{ inset: 90 }} />
        <div className="dm-ring" style={{ inset: 180 }} />
        <div className="dm-ring dash" style={{ inset: 270 }} />
        <div className="dm-spin" style={{ inset: 0, animationDuration: "46s" }}>
          <div className="dm-sat" />
        </div>
        <div className="dm-spin" style={{ inset: 180, animationDuration: "28s", animationDirection: "reverse" }}>
          <div className="dm-sat" />
        </div>
        <div className="dm-pulse" />
        <div className="dm-pulse p2" />
        <div className="dm-core" />
      </div>

      <div className="dm-orbit hidden sm:block" style={{ left: -190, bottom: -230, width: 560, height: 560 }}>
        <div className="dm-ring" style={{ inset: 0 }} />
        <div className="dm-ring dash" style={{ inset: 80 }} />
        <div className="dm-ring" style={{ inset: 160 }} />
        <div className="dm-spin" style={{ inset: 80, animationDuration: "34s" }}>
          <div className="dm-sat" />
        </div>
        <div className="dm-core" />
      </div>

      <div className="dm-layer" style={{ background: "linear-gradient(to bottom, transparent 70%, rgba(10,11,14,0.85) 100%)" }} />
    </div>
  );
}
