"use client";

import { motion, useReducedMotion } from "motion/react";

const LINES = [
  { indent: 0, text: "function ship(idea) {" },
  { indent: 1, text: "const build = make(idea);" },
  { indent: 1, text: "test(build);" },
  { indent: 1, text: "return build;" },
  { indent: 0, text: "}" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const lineVariant = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
};

/**
 * Matches HeroPortrait's language (soft glow halo + thin dashed accent
 * ring) but recolored for the blue section background: a dark terminal
 * window "typing" out a short snippet, in place of a photo.
 */
export default function TerminalGraphic() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full max-w-[320px]">
      <div className="absolute -inset-10 rounded-[32px] blur-[54px] bg-black/25" />

      <svg
        viewBox="0 0 100 100"
        className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none"
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="black" strokeOpacity="0.14" strokeWidth="1" />
        <circle cx="50" cy="50" r="37" fill="none" stroke="black" strokeOpacity="0.08" strokeWidth="1" />
      </svg>

      <div className="relative rounded-2xl border border-black/15 bg-black/85 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[11px] text-white/40">portfolio.js</span>
        </div>

        <motion.div
          className="px-5 py-5 text-[13px] leading-relaxed"
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.5 }}
        >
          {LINES.map((line, i) => (
            <motion.div
              key={i}
              variants={reduce ? undefined : lineVariant}
              style={{ paddingLeft: line.indent * 16 }}
              className="text-white/85 whitespace-pre"
            >
              {line.text}
            </motion.div>
          ))}
          <div className="flex items-center gap-1.5 mt-1" style={{ paddingLeft: 16 }}>
            <span className="text-white/40">$</span>
            <span className="caret inline-block w-[7px] h-[15px] bg-white/80" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
