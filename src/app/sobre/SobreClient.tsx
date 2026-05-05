"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

const values = [
  {
    icon: "verified",
    title: "Qualidade",
    desc: "Materiais de primeira linha e mão de obra especializada em cada projeto que realizamos.",
  },
  {
    icon: "handshake",
    title: "Compromisso",
    desc: "Cumprimos prazos e orçamentos com total transparência e dedicação ao cliente.",
  },
  {
    icon: "visibility",
    title: "Transparência",
    desc: "Comunicação clara em cada etapa da obra — sem surpresas, sem custos ocultos.",
  },
  {
    icon: "lightbulb",
    title: "Inovação",
    desc: "Técnicas modernas e soluções criativas para resultados que superam expectativas.",
  },
];

export default function SobreClient() {
  return (
    <div className="noise-overlay">
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="pt-32 pb-24 relative">
        <div className="max-w-screen-2xl mx-auto px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="mb-6">
              <nav className="inline-flex items-center gap-2 text-sm text-on-surface-variant/60 font-[var(--font-label)]">
                <Link href="/" className="hover:text-on-surface-variant transition-colors duration-200">
                  Início
                </Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-secondary">Sobre Nós</span>
              </nav>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-[var(--font-manrope)] font-black text-5xl md:text-7xl text-on-surface max-w-4xl leading-[1.05] tracking-tighter"
            >
              Sobre a VH Remodelações
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-on-surface-variant max-w-2xl mt-8 leading-[1.65]"
            >
              Mais de três décadas a construir confiança, qualidade e excelência em cada obra que realizamos em Portugal.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-4 mt-8">
              <div className="h-1 w-24 bg-secondary rounded-full" />
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/60 ghost-border text-xs font-[var(--font-label)] font-bold uppercase tracking-widest text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-sm">history</span>
                Desde 1995
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ COMPANY STORY ═══════════════════════ */}
      <section className="py-24 bg-surface-container-low relative border-t border-white/5 section-divider">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="font-[var(--font-manrope)] text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-4">
                A Nossa História
              </h2>
              <h3 className="font-[var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter leading-[1.15] mb-8">
                Uma Tradição de Excelência em Construção
              </h3>
              <p className="text-on-surface-variant text-lg leading-[1.75] mb-6">
                Fundada há mais de 30 anos em Sintra, a VH Remodelações é uma referência em construção civil e remodelações em Portugal. Começámos como uma pequena empresa familiar e crescemos até nos tornarmos parceiros de confiança de centenas de clientes, desde particulares a grandes condomínios.
              </p>
              <p className="text-on-surface-variant text-lg leading-[1.75]">
                A nossa dedicação à qualidade e ao rigor técnico permitiu-nos construir uma reputação sólida ao longo das décadas. Cada projeto é tratado com o mesmo cuidado e atenção ao detalhe que nos distingue desde o primeiro dia.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="bento-card p-12 flex flex-col gap-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-2xl">apartment</span>
                </div>
                <h4 className="font-[var(--font-manrope)] font-bold text-2xl tracking-tighter">
                  A Nossa Missão
                </h4>
              </div>
              <p className="text-on-surface-variant leading-[1.7]">
                Transformar cada espaço numa obra de referência, combinando técnicas tradicionais com inovação contemporânea. Trabalhamos para superar expectativas e criar ambientes que melhoram a vida dos nossos clientes.
              </p>
              <div className="h-px bg-white/5" />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-2xl">groups</span>
                </div>
                <h4 className="font-[var(--font-manrope)] font-bold text-2xl tracking-tighter">
                  A Nossa Equipa
                </h4>
              </div>
              <p className="text-on-surface-variant leading-[1.7]">
                Profissionais certificados e experientes em todas as áreas da construção civil — desde engenheiros e arquitectos a mestres de obra especializados.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ VALUES ═══════════════════════ */}
      <section className="py-32 bg-surface">
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
              Os Nossos Valores
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-[var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter leading-[1.15]"
            >
              O Que Nos Define
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                className="bento-card p-10 flex flex-col gap-6 group hover:bg-surface-container-highest transition-all duration-400"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary-container/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-2xl">{v.icon}</span>
                </div>
                <h3 className="font-[var(--font-manrope)] text-2xl font-bold tracking-tight">{v.title}</h3>
                <p className="text-on-surface-variant leading-[1.65]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
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

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bento-card p-12 md:p-20 text-center flex flex-col items-center gap-8"
          >
            <motion.h2
              variants={fadeUp}
              className="font-[var(--font-manrope)] text-sm uppercase tracking-[0.3em] text-secondary font-bold"
            >
              Vamos Trabalhar Juntos
            </motion.h2>
            <motion.h3
              variants={fadeUp}
              className="font-[var(--font-manrope)] text-4xl md:text-5xl font-black text-on-surface leading-[1.15] tracking-tighter max-w-3xl"
            >
              Pronto para transformar o seu espaço?
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="text-xl text-on-surface-variant leading-[1.65] max-w-xl"
            >
              Entre em contacto connosco e receba um orçamento gratuito e sem compromisso para o seu projeto.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://wa.me/351936569642"
                target="_blank"
                rel="noopener noreferrer"
                className="riveted-btn px-10 py-5 rounded-lg text-lg font-bold font-[var(--font-label)] uppercase tracking-widest text-on-secondary inline-flex items-center gap-4"
              >
                <span className="material-symbols-outlined">chat</span>
                Orçamento via WhatsApp
              </a>
              <Link
                href="/contacto"
                className="ghost-border px-10 py-5 rounded-lg text-lg font-bold font-[var(--font-label)] uppercase tracking-widest text-primary inline-flex items-center gap-4 bg-surface-container-high/30 backdrop-blur-sm hover:bg-surface-container-high/60 hover:scale-[1.02] transition-all duration-300"
              >
                Formulário de Contacto
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export { SobreClient };
