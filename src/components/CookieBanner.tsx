"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "vh-cookies-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner only if no consent stored yet (and only on client)
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Slight delay so it doesn't compete with LoadingScreen
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage may be unavailable (privacy mode) — show banner anyway
      setVisible(true);
    }
  }, []);

  function persist(value: "accepted" | "essential") {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, at: new Date().toISOString() })
      );
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[80]"
        >
          <div className="bg-white rounded-2xl shadow-[0_20px_48px_rgba(20,33,61,0.18)] border border-[rgba(20,33,61,0.08)] p-5 md:p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">
                cookie
              </span>
              <div>
                <h3 className="font-[var(--font-manrope)] font-bold text-on-surface text-base mb-1.5">
                  Cookies neste site
                </h3>
                <p className="text-on-surface-variant text-sm leading-[1.55]">
                  Usamos cookies essenciais ao funcionamento do site. Pode optar
                  por aceitar todos para melhorarmos a sua experiência. Veja a{" "}
                  <Link
                    href="/privacidade"
                    className="text-secondary hover:text-secondary-container underline underline-offset-2"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => persist("accepted")}
                className="riveted-btn flex-1 px-5 py-2.5 rounded-xl text-white font-bold uppercase tracking-wider text-xs"
              >
                Aceitar todos
              </button>
              <button
                type="button"
                onClick={() => persist("essential")}
                className="ghost-btn flex-1 px-5 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs"
              >
                Só essenciais
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
