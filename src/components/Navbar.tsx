"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
