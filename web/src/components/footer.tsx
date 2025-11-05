import Link from "next/link";

const socials = [
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];

export function Footer() {
  return (
    <footer className="relative z-30 border-t border-white/10 bg-white/5 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Lumin Agency</p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            AI / Web / Product
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-white/55">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="transition hover:text-white"
            >
              {social.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Lumin Agency. Privacy-first. Crafted on
          Earth.
        </p>
      </div>
    </footer>
  );
}
