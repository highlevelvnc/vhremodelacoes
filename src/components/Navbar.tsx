"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Remodelacoes" },
  { href: "/servicos", label: "Servicos" },
  { href: "/galeria", label: "Projetos" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black text-on-surface tracking-tighter font-[var(--font-manrope)]"
        >
          Vinculos Harmoniosos
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-[var(--font-manrope)] font-bold tracking-tight">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-primary border-b-2 border-secondary-container pb-1"
                    : "text-on-surface/70 hover:text-on-surface transition-colors"
                }
              >
                {link.label}
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
            Orcamento
          </a>
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden bg-surface-container-low px-8 pb-6 flex flex-col gap-4 font-[var(--font-manrope)] font-bold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-on-surface/80 hover:text-on-surface transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/351936569642"
            target="_blank"
            rel="noopener noreferrer"
            className="riveted-btn text-on-secondary px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm text-center"
          >
            Orcamento via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
