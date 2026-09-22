"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ContactMenu from "./ContactMenu";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-border">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-16 h-[76px] flex items-center justify-between">
        <Link href="/" className="text-[16px] font-semibold">
          <span className="text-accent">~/</span>vihas.sanchith
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`group relative pb-1 text-[15px] transition-colors ${
                  active ? "text-accent" : "text-white hover:text-foreground"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 bottom-0 h-px bg-accent transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <ContactMenu />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-foreground"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-[15px] ${
                pathname === l.href ? "text-accent" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ContactMenu className="w-fit" align="left" />
        </div>
      )}
    </nav>
  );
}
