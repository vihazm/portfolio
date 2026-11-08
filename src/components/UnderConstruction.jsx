"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const NOTICE = [
  "this project is under construction",
  "repo & live demo coming soon",
  "in active development with a real client",
];

const LINES = [
  "Under construction. Case study in progress.",
  "The Admin module and shared login are being built.",
  "The full write-up lands when the system ships.",
];

function useTypewriter(messages) {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");

  useEffect(() => {
    if (reduce) {
      setText(messages[0]);
      return;
    }
    let i = 0;
    let n = 0;
    let typing = true;
    let timer;
    function tick() {
      const msg = messages[i];
      if (typing) {
        n += 1;
        setText(msg.slice(0, n));
        if (n === msg.length) {
          typing = false;
          timer = setTimeout(tick, 2200);
          return;
        }
        timer = setTimeout(tick, 45);
      } else {
        n -= 1;
        setText(msg.slice(0, n));
        if (n === 0) {
          typing = true;
          i = (i + 1) % messages.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, 22);
      }
    }
    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, [messages, reduce]);

  return text;
}

export function ConstructionNotice() {
  const text = useTypewriter(NOTICE);
  return (
    <div role="status" className="pill-warn gap-2.5 w-fit max-w-full">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-warn opacity-60 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-warn" />
      </span>
      <span className="sr-only">{NOTICE[0]}</span>
      <span aria-hidden="true" className="truncate">
        {text}
        <span className="caret ml-px">▍</span>
      </span>
    </div>
  );
}

function Scene() {
  return (
    <svg
      viewBox="0 0 520 220"
      role="img"
      aria-label="Illustration of a crane lowering a block into an unfinished web page"
      className="w-full max-w-[520px] h-auto"
    >
      <line x1="20" y1="196" x2="500" y2="196" stroke="var(--border)" strokeWidth="2" />

      <rect x="150" y="84" width="230" height="112" rx="8" fill="var(--surface-alt)" stroke="var(--border)" />
      <line x1="150" y1="102" x2="380" y2="102" stroke="var(--border)" />
      <circle cx="164" cy="93" r="3" fill="var(--muted)" opacity="0.6" />
      <circle cx="176" cy="93" r="3" fill="var(--muted)" opacity="0.6" />
      <circle cx="188" cy="93" r="3" fill="var(--muted)" opacity="0.6" />
      <rect x="164" y="116" width="96" height="34" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" />
      <rect x="270" y="116" width="96" height="34" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" />
      <rect x="164" y="160" width="96" height="24" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" />
      <rect x="270" y="160" width="96" height="24" rx="4" fill="none" stroke="var(--warn)" strokeWidth="1.5" strokeDasharray="5 4" className="uc-dash" />

      <g stroke="var(--warn)" strokeWidth="1.5" fill="none">
        <line x1="424" y1="40" x2="424" y2="196" />
        <line x1="436" y1="40" x2="436" y2="196" />
        <polyline points="424,196 436,176 424,156 436,136 424,116 436,96 424,76 436,56 424,40" />
        <polyline points="424,40 430,22 436,40" />
        <line x1="300" y1="44" x2="478" y2="44" strokeWidth="3" />
        <line x1="430" y1="22" x2="304" y2="44" />
        <line x1="430" y1="22" x2="470" y2="44" />
        <rect x="454" y="44" width="24" height="12" fill="var(--warn)" stroke="none" opacity="0.85" />
      </g>

      <g className="uc-swing">
        <line x1="318" y1="44" x2="318" y2="118" stroke="var(--muted)" strokeWidth="1.5" />
        <rect x="300" y="118" width="36" height="22" rx="3" fill="var(--warn)" opacity="0.9" />
      </g>

      <g fill="var(--warn)">
        <rect x="48" y="193" width="24" height="4" rx="1" />
        <polygon points="52,193 60,158 68,193" />
        <rect x="94" y="193" width="24" height="4" rx="1" />
        <polygon points="98,193 106,158 114,193" />
      </g>
      <g stroke="var(--background)" strokeWidth="3">
        <line x1="55" y1="178" x2="65" y2="178" />
        <line x1="101" y1="178" x2="111" y2="178" />
      </g>
    </svg>
  );
}

export default function UnderConstruction() {
  const text = useTypewriter(LINES);
  return (
    <section className="py-8 border-t border-border">
      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        <div className="uc-tape" />
        <div className="px-6 pt-8 pb-8 flex flex-col items-center text-center">
          <Scene />
          <h2 className="mt-6 text-[13px] uppercase tracking-wider text-warn font-semibold">
            Under construction
          </h2>
          <p className="sr-only">{LINES.join(" ")}</p>
          <p aria-hidden="true" className="mt-3 min-h-[24px] text-[15px] text-muted">
            {text}
            <span className="caret ml-px text-warn">▍</span>
          </p>
        </div>
        <div className="uc-tape uc-tape-reverse" />
      </div>
    </section>
  );
}
