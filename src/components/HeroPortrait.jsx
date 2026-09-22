import Image from "next/image";

/**
 * Chest-up portrait cropped tight (like the original headshot framing),
 * dissolving into the background on every edge instead of a hard cutout,
 * with a soft halo behind it.
 */
export default function HeroPortrait({
  src,
  alt,
  containerClassName = "w-[280px] h-[340px] sm:w-[300px] sm:h-[360px]",
  imageClassName = "object-cover object-top",
  glowClassName = "-inset-20 sm:-inset-24",
  verticalMaskImage = "linear-gradient(to bottom, transparent 0%, black 10%, black 78%, transparent 99%)",
  horizontalMaskImage = "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
}) {
  return (
    <div className={`relative ${containerClassName}`}>
      <div
        className={`absolute ${glowClassName} rounded-full blur-[58px]`}
        style={{
          background:
            "radial-gradient(ellipse, rgba(111,155,196,0.6) 0%, rgba(111,155,196,0.3) 40%, rgba(111,155,196,0.1) 65%, transparent 85%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: verticalMaskImage,
          maskImage: verticalMaskImage,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: horizontalMaskImage,
            maskImage: horizontalMaskImage,
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="300px"
            className={imageClassName}
          />
        </div>
      </div>
    </div>
  );
}
