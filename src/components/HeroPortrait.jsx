import Image from "next/image";

/**
 * Chest-up portrait cropped tight (like the original headshot framing),
 * dissolving into the background at the bottom instead of a hard edge,
 * with a soft halo and a thin accent ring for depth behind it.
 */
export default function HeroPortrait({ src, alt }) {
  return (
    <div className="relative w-[280px] h-[340px] sm:w-[300px] sm:h-[360px]">
      <div
        className="absolute -inset-10 rounded-full blur-[46px]"
        style={{
          background:
            "radial-gradient(circle, rgba(111,155,196,0.42) 0%, rgba(111,155,196,0.14) 45%, transparent 72%)",
        }}
      />

      <svg viewBox="0 0 100 100" className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)]">
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="66 224"
          strokeLinecap="round"
          transform="rotate(-52 50 50)"
        />
      </svg>

      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 97%)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="300px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
