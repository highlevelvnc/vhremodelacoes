"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "Todos" | "Fachadas" | "Construção" | "Interiores" | "Serviços";

const categories: Category[] = ["Todos", "Fachadas", "Construção", "Interiores", "Serviços"];

function generateImages() {
  const items: { src: string; cat: Category; aspect: string }[] = [];
  const aspects = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[16/9]", "aspect-[4/5]", "aspect-square"];

  for (let i = 1; i <= 22; i++) {
    items.push({
      src: `/fachadas/fachada-${String(i).padStart(2, "0")}.jpg`,
      cat: "Fachadas",
      aspect: aspects[i % aspects.length],
    });
  }
  for (let i = 1; i <= 9; i++) {
    items.push({
      src: `/construcao/construcao-${String(i).padStart(2, "0")}.jpg`,
      cat: "Construção",
      aspect: aspects[(i + 2) % aspects.length],
    });
  }
  for (let i = 1; i <= 13; i++) {
    items.push({
      src: `/interiores/interior-${String(i).padStart(2, "0")}.jpg`,
      cat: "Interiores",
      aspect: aspects[(i + 1) % aspects.length],
    });
  }
  for (let i = 1; i <= 20; i++) {
    items.push({
      src: `/servicos/servico-${String(i).padStart(2, "0")}.jpg`,
      cat: "Serviços",
      aspect: aspects[(i + 3) % aspects.length],
    });
  }
  return items;
}

const allImages = generateImages();

export default function GaleriaPage() {
  const [active, setActive] = useState<Category>("Todos");
  const [visibleCount, setVisibleCount] = useState(24);

  const filtered = active === "Todos" ? allImages : allImages.filter((img) => img.cat === active);
  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Header */}
      <header className="mb-16 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-[var(--font-manrope)] text-5xl md:text-7xl font-extrabold text-on-surface mb-6 tracking-tighter max-w-4xl"
        >
          Nosso Portfólio de Obra
        </motion.h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Explore a materialização da nossa visão arquitetónica. Da precisão
          estrutural ao detalhe decorativo, cada projeto é um testemunho de
          excelência técnica.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-12 overflow-x-auto pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setVisibleCount(24);
            }}
            className={`px-6 py-2.5 rounded-full font-[var(--font-label)] font-medium text-sm transition-all whitespace-nowrap ${
              active === cat
                ? "bg-secondary text-on-secondary font-bold"
                : "bg-surface-container-high text-on-surface-variant hover:text-on-surface ghost-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="masonry-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((img) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="masonry-item group cursor-pointer"
            >
              <div
                className={`relative overflow-hidden rounded-xl bg-surface-container-high ${img.aspect}`}
              >
                <img
                  src={img.src}
                  alt={`${img.cat} - Obra VH`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">
                    {img.cat}
                  </span>
                  <h3 className="text-lg font-[var(--font-manrope)] font-bold text-on-surface">
                    Projeto VH
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More */}
      {visibleCount < filtered.length && (
        <div className="mt-20 flex flex-col items-center">
          <button
            onClick={() => setVisibleCount((c) => c + 24)}
            className="flex items-center gap-3 group text-on-surface-variant hover:text-secondary transition-colors"
          >
            <span className="font-[var(--font-manrope)] font-bold text-lg">
              Ver mais projetos
            </span>
            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
              keyboard_double_arrow_down
            </span>
          </button>
          <p className="mt-4 text-sm text-on-surface-variant opacity-60">
            Exibindo {visible.length} de {filtered.length} obras
          </p>
        </div>
      )}
    </div>
  );
}
