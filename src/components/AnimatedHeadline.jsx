"use client";

import { motion, useReducedMotion } from "motion/react";

function buildLineWords(line, accentWord) {
  return line.split(" ").map((word) => ({
    chars: Array.from(word),
    accent: word === accentWord,
  }));
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.022 } },
};

const charVariant = {
  hidden: { opacity: 0, y: 9, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] },
  },
};

/**
 * Renders `lines` as fixed, explicit rows (not relying on the browser to
 * reflow at a convenient point) so the break position is guaranteed
 * regardless of viewport width. Each word is kept in its own inline-block
 * wrapper so per-letter animation can never split a word across lines
 * (atomic inline boxes get automatic break opportunities on either side,
 * so ungrouped letters could otherwise break mid-word).
 */
export default function AnimatedHeadline({ lines, accentWord, className }) {
  const reduce = useReducedMotion();
  const fullText = lines.join(" ");

  if (reduce) {
    return (
      <h1 className={className}>
        {lines.map((line, li) => (
          <div key={li}>
            {line.split(accentWord).reduce((acc, part, pi, arr) => {
              acc.push(part);
              if (pi < arr.length - 1) {
                acc.push(
                  <span key={pi} className="text-accent">
                    {accentWord}
                  </span>
                );
              }
              return acc;
            }, [])}
          </div>
        ))}
      </h1>
    );
  }

  return (
    <h1 className={className}>
      <span className="sr-only">{fullText}</span>
      <motion.span aria-hidden="true" variants={container} initial="hidden" animate="show">
        {lines.map((line, li) => {
          const words = buildLineWords(line, accentWord);
          const isLastLine = li === lines.length - 1;
          return (
            <span key={li} className="block">
              {words.flatMap((w, wi) => [
                <span key={`w-${wi}`} className="inline-block whitespace-nowrap">
                  {w.chars.map((ch, ci) => (
                    <motion.span
                      key={ci}
                      variants={charVariant}
                      className={`inline-block ${w.accent ? "text-accent" : ""}`}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </span>,
                wi < words.length - 1 ? " " : null,
              ])}
              {isLastLine && (
                <span className="caret inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-[-2px]" />
              )}
            </span>
          );
        })}
      </motion.span>
    </h1>
  );
}
