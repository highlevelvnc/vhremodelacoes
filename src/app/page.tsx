"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { icon: "home_repair_service", title: "Remodelações de Interiores", desc: "Transformação completa de espaços residenciais e comerciais com foco em funcionalidade e conforto." },
  { icon: "format_paint", title: "Pintura de Fachadas", desc: "Proteção e estética para edifícios com materiais de alta durabilidade e acabamento premium." },
  { icon: "plumbing", title: "Canalização", desc: "Instalação e manutenção de redes de águas e esgotos com tecnologia de ponta." },
  { icon: "electrical_services", title: "Eletricidade", desc: "Sistemas elétricos seguros, certificados e eficientes para todos os tipos de projetos." },
  { icon: "roofing", title: "Telhados", desc: "Impermeabilização e reconstrução de coberturas para máxima proteção térmica e acústica." },
  { icon: "architecture", title: "Construção Civil", desc: "Execução técnica de obras de raiz com acompanhamento rigoroso de engenharia." },
];

const galleryImages = [
  "/fachadas/fachada-01.jpg",
  "/interiores/interior-01.jpg",
  "/construcao/construcao-01.jpg",
  "/fachadas/fachada-05.jpg",
  "/servicos/servico-01.jpg",
  "/interiores/interior-05.jpg",
];

/* --- Animation variants --- */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const statIcons = ["engineering", "task_alt", "sentiment_very_satisfied"];

export default function Home() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden noise-overlay">
        {/* Background image + dramatic gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/fachadas/fachada-03.jpg"
            alt="Obra de remodelação VH"
            fill
            className="object-cover opacity-40 grayscale-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-surface/10" />
          {/* Subtle radial accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,158,148,0.06)_0%,transparent_60%)]" />
          {/* Aurora ambient blobs */}
          <div className="aurora-blob aurora-blob-red w-[500px] h-[500px] -top-20 -right-40" />
          <div className="aurora-blob aurora-blob-blue w-[600px] h-[600px] -bottom-32 -left-20" />
        </div>

        {/* Hero content with staggered animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 text-center md:text-left"
        >
          {/* Animated badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-container-high/60 backdrop-blur-sm ghost-border text-sm font-[var(--font-label)] tracking-widest uppercase text-on-surface-variant">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
              </span>
              Excelência em Construção desde 1995
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-[var(--font-manrope)] font-black text-5xl md:text-8xl leading-[1.1] mb-8 max-w-5xl tracking-tighter text-on-surface"
          >
            Construímos o Seu{" "}
            <span className="text-gradient">Futuro</span>, Remodelamos o Seu
            Presente
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-[1.65]"
          >
            Especialistas em remodelações completas, pinturas e construção civil
            em toda Portugal. Elevamos espaços a obras de arte arquitetónicas.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://wa.me/351936569642"
              target="_blank"
              rel="noopener noreferrer"
              className="riveted-btn px-8 py-4 rounded-lg text-lg font-bold font-[var(--font-label)] uppercase tracking-widest text-on-secondary flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">chat</span>
              Orçamento via WhatsApp
            </a>
            <Link
              href="/galeria"
              className="ghost-border px-8 py-4 rounded-lg text-lg font-bold font-[var(--font-label)] uppercase tracking-widest text-primary flex items-center justify-center gap-3 bg-surface-container-high/30 backdrop-blur-sm hover:bg-surface-container-high/60 hover:scale-[1.02] transition-all duration-300"
            >
              Nossos Projetos
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-[var(--font-label)] uppercase tracking-[0.3em] text-on-surface-variant/60">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="material-symbols-outlined text-on-surface-variant/40 text-xl"
          >
            keyboard_arrow_down
          </motion.span>
        </motion.div>
      </section>

      {/* ═══════════════════════ STATS ═══════════════════════ */}
      <section className="bg-surface-container-low py-24 relative border-t border-white/5 section-divider">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { num: "30+", label: "Anos de Experiência", icon: "calendar_month" },
            { num: "500+", label: "Obras Concluídas", icon: "task_alt" },
            { num: "100%", label: "Clientes Satisfeitos", icon: "thumb_up" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="bento-card p-8"
            >
              <span className="material-symbols-outlined text-secondary/40 text-3xl mb-2">{s.icon}</span>
              <span className="text-5xl md:text-6xl font-[var(--font-manrope)] font-black text-primary leading-[1.1]">
                {s.num}
              </span>
              <span className="font-[var(--font-label)] text-sm uppercase tracking-widest text-on-surface-variant mt-1">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <motion.h2
                variants={fadeUp}
                className="font-[var(--font-manrope)] text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-4"
              >
                Os Nossos Serviços
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-[var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter leading-[1.15]"
              >
                Soluções Integradas de Engenharia e Design
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="text-on-surface-variant leading-[1.65] max-w-sm">
              Do rascunho à entrega da chave, cuidamos de cada detalhe com rigor técnico.
            </motion.div>
          </motion.div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                className="glow-card bento-card p-10 group hover:bg-surface-container-highest transition-all duration-400 flex flex-col gap-6 relative"
              >
                {/* Numbered badge */}
                <span className="absolute top-6 right-6 font-[var(--font-manrope)] text-[11px] font-bold tracking-widest text-on-surface-variant/30">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon with colored circle */}
                <div className="w-14 h-14 rounded-xl bg-secondary-container/15 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-secondary text-2xl">{svc.icon}</span>
                </div>

                <h3 className="font-[var(--font-manrope)] text-2xl font-bold tracking-tight leading-[1.2]">
                  {svc.title}
                </h3>
                <p className="text-on-surface-variant leading-[1.65]">
                  {svc.desc}
                </p>
                <Link
                  href="/servicos"
                  className="mt-auto flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all duration-300 animated-underline w-fit"
                >
                  Saber Mais{" "}
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
      <section className="py-32 bg-surface-container-low relative noise-overlay">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-[var(--font-manrope)] text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-4"
            >
              Testemunhos
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-[var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter leading-[1.15]"
            >
              O Que Dizem os Nossos Clientes
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendes",
                role: "Proprietário, Lisboa",
                text: "A VH Remodelações transformou completamente o nosso apartamento. Profissionalismo exemplar do início ao fim. Recomendo sem hesitar.",
                rating: 5,
              },
              {
                name: "Ana Sofia Ribeiro",
                role: "Arquitecta, Sintra",
                text: "Trabalho com a equipa da VH há mais de 5 anos. A qualidade de execução e o cumprimento de prazos são impecáveis.",
                rating: 5,
              },
              {
                name: "Miguel Ferreira",
                role: "Gestor de Condomínio, Cascais",
                text: "Contratámos a VH para a reabilitação da fachada do nosso edifício. O resultado superou todas as expectativas. Obra entregue no prazo e sem surpresas.",
                rating: 5,
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                className="bento-card p-10 flex flex-col gap-6"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="material-symbols-outlined text-secondary text-xl">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant italic leading-[1.7] flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-[var(--font-manrope)] font-bold text-on-surface">{t.name}</p>
                  <p className="text-sm text-secondary">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ GALLERY PREVIEW ═══════════════════════ */}
      <section className="bg-surface-container-lowest py-32 overflow-hidden noise-overlay">
        <div className="max-w-7xl mx-auto px-8 mb-16 flex justify-between items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="font-[var(--font-manrope)] text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.15]"
            >
              Portfólio de Obras
            </motion.h2>
          </motion.div>
          <Link
            href="/galeria"
            className="text-secondary font-bold hidden md:flex items-center gap-2 group animated-underline"
          >
            Ver Todas{" "}
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className={`aspect-[3/4] bg-surface-container overflow-hidden relative group cursor-pointer ${i === 2 ? "lg:mt-12" : i === 4 ? "lg:mt-8" : ""}`}
            >
              <img
                src={src}
                alt={`Obra VH ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface text-3xl scale-75 group-hover:scale-100 transition-transform duration-300">
                  zoom_in
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Mobile "Ver Todas" link */}
        <div className="md:hidden mt-8 px-8">
          <Link
            href="/galeria"
            className="text-secondary font-bold flex items-center gap-2 animated-underline w-fit"
          >
            Ver Todas{" "}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════ DROGARIA BANNER ═══════════════════════ */}
      <section className="py-32 bg-surface relative">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeScale}
            className="relative bento-card overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Decorative geometric pattern */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[1]">
              <div className="absolute -top-24 -left-24 w-48 h-48 border border-secondary/10 rounded-full" />
              <div className="absolute -top-12 -left-12 w-48 h-48 border border-secondary/5 rounded-full" />
              <div className="absolute bottom-12 left-1/3 w-2 h-2 rounded-full bg-secondary/20" />
              <div className="absolute bottom-24 left-[38%] w-1.5 h-1.5 rounded-full bg-secondary/15" />
              <div className="absolute top-16 left-[45%] w-1 h-1 rounded-full bg-primary/20" />
              {/* Subtle grid lines */}
              <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
              <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent hidden lg:block" />
            </div>

            {/* Text side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center gap-8 relative z-[2]"
            >
              <motion.h2
                variants={fadeUp}
                className="font-[var(--font-manrope)] text-sm uppercase tracking-widest text-secondary font-bold"
              >
                A Nossa Loja em Sintra
              </motion.h2>
              <motion.h3
                variants={fadeUp}
                className="font-[var(--font-manrope)] text-4xl md:text-5xl font-black text-on-surface leading-[1.15] tracking-tighter"
              >
                Precisa de materiais? Visite a Drogaria VH em Sintra.
              </motion.h3>
              <motion.p variants={fadeUp} className="text-xl text-on-surface-variant leading-[1.65]">
                Ferramentas profissionais, tintas de alta gama e tudo para a sua
                obra num só lugar.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a
                  href="https://wa.me/351926010809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="riveted-btn px-10 py-5 rounded-lg text-lg font-bold font-[var(--font-label)] uppercase tracking-widest text-on-secondary inline-flex items-center gap-4"
                >
                  Explorar Drogaria
                  <span className="material-symbols-outlined">storefront</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Image side with parallax-like offset */}
            <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
              <motion.div
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] as const }}
                className="absolute inset-0"
              >
                <Image
                  src="/drogaria/drogaria-loja.jpg"
                  alt="Drogaria VH Sintra"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high via-surface-container-high/40 to-transparent hidden lg:block" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
