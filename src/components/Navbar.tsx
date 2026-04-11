"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Remodelações" },
  { href: "/servicos", label: "Serviços" },
  { href: "/galeria", label: "Projetos" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 glass-nav transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(4, 19, 41, 0.92)"
          : "rgba(4, 19, 41, 0.7)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(1, 14, 36, 0.4)"
          : "none",
      }}
    >
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black text-on-surface tracking-tighter font-[var(--font-manrope)] transition-transform duration-300 hover:scale-[1.03] origin-left"
        >
          Vínculos Harmoniosos
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-[var(--font-manrope)] font-bold tracking-tight">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`animated-underline pb-1 transition-colors duration-300 ${
                  active
                    ? "text-primary"
                    : "text-on-surface/70 hover:text-on-surface"
                }`}
                style={
                  active
                    ? { "--underline-active": "100%" } as React.CSSProperties
                    : undefined
                }
              >
                <span
                  className={active ? "relative" : ""}
                  style={
                    active
                      ? {
                          borderBottom: "2px solid #8a0110",
                          paddingBottom: "2px",
                        }
                      : undefined
                  }
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/351936569642"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex riveted-btn text-on-secondary px-6 py-2 rounded-lg font-[var(--font-label)] font-bold uppercase tracking-wider text-sm"
          >
            Orçamento
          </a>
          <button
            className="md:hidden text-primary p-2 transition-transform duration-200 active:scale-90"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile - staggered animation */}
      <div
        className={`md:hidden bg-surface-container-low overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pb-6 pt-2 flex flex-col gap-1 font-[var(--font-manrope)] font-bold">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-on-surface/80 hover:text-on-surface transition-all duration-300 py-3 border-b border-white/5 last:border-b-0"
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-12px)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/351936569642"
            target="_blank"
            rel="noopener noreferrer"
            className="riveted-btn text-on-secondary px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm text-center mt-4"
            style={{
              transitionDelay: open ? `${links.length * 60}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            Orçamento via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
