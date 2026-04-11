"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Category = "Todos" | "Fachadas" | "Construção" | "Interiores" | "Serviços";

const categories: Category[] = ["Todos", "Fachadas", "Construção", "Interiores", "Serviços"];

function generateImages() {
  const items: { src: string; cat: Category; aspect: string; title: string }[] = [];
  const aspects = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/6]", "aspect-[4/5]", "aspect-[3/4]"];

  for (let i = 1; i <= 22; i++) {
    items.push({
      src: `/fachadas/fachada-${String(i).padStart(2, "0")}.jpg`,
      cat: "Fachadas",
      aspect: aspects[i % aspects.length],
      title: `Fachada ${String(i).padStart(2, "0")}`,
    });
  }
  for (let i = 1; i <= 9; i++) {
    items.push({
      src: `/construcao/construcao-${String(i).padStart(2, "0")}.jpg`,
      cat: "Construção",
      aspect: aspects[(i + 2) % aspects.length],
      title: `Construção ${String(i).padStart(2, "0")}`,
    });
  }
  for (let i = 1; i <= 13; i++) {
    items.push({
      src: `/interiores/interior-${String(i).padStart(2, "0")}.jpg`,
      cat: "Interiores",
      aspect: aspects[(i + 1) % aspects.length],
      title: `Interior ${String(i).padStart(2, "0")}`,
    });
  }
  for (let i = 1; i <= 20; i++) {
    items.push({
      src: `/servicos/servico-${String(i).padStart(2, "0")}.jpg`,
      cat: "Serviços",
      aspect: aspects[(i + 3) % aspects.length],
      title: `Serviço ${String(i).padStart(2, "0")}`,
    });
  }
  return items;
}

const allImages = generateImages();

/* Count per category */
const categoryCounts: Record<Category, number> = {
  Todos: allImages.length,
  Fachadas: allImages.filter((i) => i.cat === "Fachadas").length,
  "Construção": allImages.filter((i) => i.cat === "Construção").length,
  Interiores: allImages.filter((i) => i.cat === "Interiores").length,
  "Serviços": allImages.filter((i) => i.cat === "Serviços").length,
};

/* --- Animation variants --- */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function GaleriaPage() {
  const [active, setActive] = useState<Category>("Todos");
  const [visibleCount, setVisibleCount] = useState(24);
  const [lightbox, setLightbox] = useState<{ src: string; cat: string; title: string } | null>(null);

  const filtered = active === "Todos" ? allImages : allImages.filter((img) => img.cat === active);
  const visible = filtered.slice(0, visibleCount);

  const openLightbox = useCallback((img: { src: string; cat: string; title: string }) => {
    setLightbox(img);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* ═══════════════════════ HEADER ═══════════════════════ */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mb-16 text-center md:text-left"
      >
        {/* Breadcrumb */}
        <motion.div variants={fadeUp} className="mb-6">
          <nav className="inline-flex items-center gap-2 text-sm text-on-surface-variant/60 font-[var(--font-label)]">
            <Link href="/" className="hover:text-on-surface-variant transition-colors duration-200">
              Início
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-secondary">Galeria</span>
          </nav>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-[var(--font-manrope)] text-5xl md:text-7xl font-extrabold text-on-surface mb-6 tracking-tighter max-w-4xl leading-[1.1]"
        >
          Nosso Portfólio de Obra
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg text-on-surface-variant max-w-2xl leading-[1.7]"
        >
          Explore a materialização da nossa visão arquitetónica. Da precisão
          estrutural ao detalhe decorativo, cada projeto é um testemunho de
          excelência técnica.
        </motion.p>
      </motion.header>

      {/* ═══════════════════════ FILTERS ═══════════════════════ */}
      <div className="flex flex-wrap items-center gap-3 mb-12 overflow-x-auto pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setVisibleCount(24);
            }}
            className={`px-6 py-2.5 rounded-full font-[var(--font-label)] font-medium text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2 hover:scale-[1.03] ${
              active === cat
                ? "bg-secondary text-on-secondary font-bold shadow-lg shadow-[0_4px_20px_rgba(138,1,16,0.25)]"
                : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest ghost-border"
            }`}
          >
            {cat}
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full leading-none ${
                active === cat
                  ? "bg-on-secondary/20 text-on-secondary"
                  : "bg-surface-container-highest text-on-surface-variant/70"
              }`}
            >
              {categoryCounts[cat]}
            </span>
          </button>
        ))}
      </div>

      {/* ═══════════════════════ MASONRY GRID ═══════════════════════ */}
      <div className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((img, i) => {
            const isFeatured = i < 3 && active === "Todos";
            return (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                className="masonry-item group cursor-pointer"
                onClick={() => openLightbox(img)}
              >
                <div
                  className={`relative overflow-hidden rounded-xl bg-surface-container-high ${img.aspect}`}
                >
                  {/* Featured ribbon */}
                  {isFeatured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/90 text-on-secondary text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                        <span className="material-symbols-outlined text-xs">star</span>
                        Destaque
                      </span>
                    </div>
                  )}

                  <img
                    src={img.src}
                    alt={`${img.cat} - Obra VH`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {img.cat}
                    </span>
                    <h3 className="text-lg font-[var(--font-manrope)] font-bold text-on-surface translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {img.title}
                    </h3>
                    {/* Zoom icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="material-symbols-outlined text-on-surface/70 text-3xl scale-75 group-hover:scale-100 transition-transform duration-300">
                        zoom_in
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ═══════════════════════ LOAD MORE ═══════════════════════ */}
      {visibleCount < filtered.length && (
        <div className="mt-20 flex flex-col items-center gap-6">
          <button
            onClick={() => setVisibleCount((c) => c + 24)}
            className="riveted-btn px-8 py-4 rounded-lg font-[var(--font-label)] font-bold text-on-secondary uppercase tracking-widest text-sm flex items-center gap-3 hover:shadow-[0_8px_30px_rgba(138,1,16,0.3)] transition-all"
          >
            <span>Ver mais projetos</span>
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
          <span className="material-symbols-outlined text-on-surface-variant/40 text-2xl animate-bounce">
            keyboard_arrow_down
          </span>
          <p className="text-sm text-on-surface-variant/60 font-[var(--font-label)]">
            Exibindo {visible.length} de {filtered.length} obras
          </p>
        </div>
      )}

      {/* ═══════════════════════ LIGHTBOX MODAL ═══════════════════════ */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-surface/90 backdrop-blur-xl" />

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative z-10 max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-2 -right-2 md:top-4 md:right-4 z-20 w-10 h-10 rounded-full bg-surface-container-highest/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all duration-200"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              {/* Image */}
              <img
                src={lightbox.src}
                alt={`${lightbox.cat} - ${lightbox.title}`}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
              />

              {/* Caption */}
              <div className="mt-4 text-center">
                <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] block mb-1">
                  {lightbox.cat}
                </span>
                <h3 className="font-[var(--font-manrope)] font-bold text-lg text-on-surface">
                  {lightbox.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
