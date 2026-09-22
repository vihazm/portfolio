"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Mail, Phone, UserCircle } from "lucide-react";
import { profile } from "@/data/profile";

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}`;

const options = [
  { key: "gmail", label: "gmail", href: gmailComposeUrl, Icon: Mail, external: true },
  { key: "linkedin", label: "linkedin", href: profile.linkedin, Icon: UserCircle, external: true },
  { key: "phone", label: "phone", href: `tel:${profile.phone}`, Icon: Phone, external: false },
];

export default function ContactMenu({ className = "", align = "right" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    function handlePointer(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="btn-contact"
      >
        get in touch
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            role="menu"
            className={`absolute top-[calc(100%+10px)] z-50 w-[208px] rounded-xl border border-border bg-surface p-1.5 shadow-[0_18px_44px_rgba(0,0,0,0.5)] ${
              align === "left" ? "left-0 origin-top-left" : "right-0 origin-top-right"
            }`}
          >
            {options.map(({ key, label, href, Icon, external }) => (
              <a
                key={key}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 h-11 rounded-lg px-3.5 text-[13.5px] text-foreground transition-colors hover:bg-surface-alt hover:text-accent"
              >
                <Icon size={16} strokeWidth={1.75} />
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
