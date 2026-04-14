"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Remodelações" },
  { href: "/sobre", label: "Sobre Nós" },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 glass-nav transition-all duration-500 ${
        scrolled ? "glass-nav-scrolled" : ""
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black text-on-surface tracking-tighter font-[var(--font-manrope)] transition-transform duration-300 hover:scale-[1.03] origin-left"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-secondary inline-block" />
            VH Remodelações
          </span>
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
                  className={
                    active
                      ? "relative border-b-2 border-secondary-container pb-[2px]"
                      : ""
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
            className="hidden lg:flex riveted-btn text-on-secondary px-6 py-2 rounded-xl font-[var(--font-label)] font-bold uppercase tracking-wider text-sm"
          >
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Orçamento
            </span>
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

      {/* Mobile - Framer Motion staggered animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-surface-container-low overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="px-8 pb-6 pt-2 flex flex-col gap-1 font-[var(--font-manrope)] font-bold"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.06 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
            >
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -12 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-on-surface/80 hover:text-on-surface transition-colors duration-300 py-3 border-b border-white/5 last:border-b-0 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 8 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <a
                  href="https://wa.me/351936569642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="riveted-btn text-on-secondary px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm text-center mt-4 block"
                >
                  Orçamento via WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
