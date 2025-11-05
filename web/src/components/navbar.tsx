"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#expertise", label: "Expertise" },
  { href: "#cases", label: "Case Studies" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Let's Talk" },
];

export function Navbar() {
  return (
    <header className="relative z-40 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/8 px-6 py-3 backdrop-blur-lg">
      <Link
        href="#top"
        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:text-white"
      >
        <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/20 bg-gradient-to-br from-white/45 to-white/10 text-base font-bold text-slate-900 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
          Λ
        </span>
        Lumin Agency
      </Link>

      <nav className="hidden items-center gap-6 text-sm font-medium text-white/75 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Button asChild variant="glow">
          <Link href="#contact">Start a Project</Link>
        </Button>
      </div>

      <Button asChild size="icon" className="md:hidden" variant="ghost">
        <a href="#contact">☰</a>
      </Button>
    </header>
  );
}
