"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const services = [
  {
    tag: "Excelência Estrutural",
    title: "Remodelações de Interiores",
    desc: "Transformamos espaços obsoletos em ambientes contemporâneos de alta performance. Nossa equipa de especialistas foca-se na otimização da funcionalidade sem nunca abdicar da estética premium. Desde cozinhas gourmet a salas de estar minimalistas, cada detalhe é planeado com rigor arquitetónico.",
    image: "/servicos/servico-02.jpg",
  },
  {
    tag: "Proteção & Estética",
    title: "Reabilitação de Fachadas",
    desc: "A pele de um edifício é o seu primeiro contacto com o mundo. Especializamo-nos no sistema ETICS (Capoto), limpeza técnica de pedra e revestimentos cerâmicos de alta durabilidade. Garantimos isolamento térmico superior e uma valorização imediata do seu património imobiliário.",
    image: "/fachadas/fachada-06.jpg",
  },
  {
    tag: "Integridade Superior",
    title: "Coberturas e Impermeabilização",
    desc: "Protegemos a sua estrutura contra as intempéries mais severas. Utilizamos membranas asfálticas de última geração e sistemas de drenagem inteligente. Seja um telhado tradicional de cerâmica ou uma cobertura plana moderna, a nossa execução técnica elimina qualquer risco de infiltrações.",
    image: "/servicos/servico-10.jpg",
  },
  {
    tag: "Sistemas Hidráulicos",
    title: "Canalização e Redes de Água",
    desc: "Engenharia invisível mas vital. Projetamos e instalamos redes de águas e esgotos com materiais de baixo ruído e alta resistência à pressão. Desde a reparação urgente à instalação de sistemas solares térmicos, a nossa equipa assegura fluxos eficientes e seguros.",
    image: "/servicos/servico-15.jpg",
  },
  {
    tag: "Energia Inteligente",
    title: "Instalações Elétricas e Domótica",
    desc: "Preparamos o seu imóvel para o futuro. Implementamos redes elétricas certificadas e sistemas de automação residencial que permitem controlar iluminação, climatização e segurança a partir do seu smartphone. Eficiência energética é o nosso pilar central.",
    image: "/servicos/servico-20.jpg",
  },
  {
    tag: "Acabamentos Nobres",
    title: "Pinturas Técnicas e Decorativas",
    desc: "A perfeição está no detalhe final. Trabalhamos com tintas premium, estuques venezianos e revestimentos texturizados de luxo. A nossa técnica de aplicação garante superfícies impecáveis, resistentes ao desgaste e com uma profundidade cromática inigualável.",
    image: "/servicos/servico-25.jpg",
  },
  {
    tag: "Base de Estilo",
    title: "Pavimentos e Revestimentos",
    desc: "Do soalho flutuante de madeira nobre aos cerâmicos de grande formato, oferecemos soluções que unem durabilidade e sofisticação. Aplicamos técnicas de nivelamento avançadas para garantir uma fundação perfeita e uma continuidade visual absoluta entre divisões.",
    image: "/servicos/servico-30.jpg",
  },
  {
    tag: "Materiais de Elite",
    title: "Drogaria VH e Suprimentos",
    desc: "Mais do que uma loja, somos o seu parceiro de confiança na seleção de materiais. A Drogaria VH disponibiliza ferramentas profissionais, produtos químicos de construção de topo e consultoria técnica personalizada para garantir que o seu projeto utiliza apenas o melhor do mercado.",
    image: "/drogaria/drogaria-loja.jpg",
  },
];

/* --- Animation variants --- */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ServicosPage() {
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden noise-overlay">
        <div className="absolute inset-0 z-0">
          <Image
            src="/servicos/servico-05.jpg"
            alt="Serviços VH"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-surface/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(255,158,148,0.06)_0%,transparent_60%)]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-8 max-w-5xl"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeUp} className="mb-8">
            <nav className="inline-flex items-center gap-2 text-sm text-on-surface-variant/60 font-[var(--font-label)]">
              <Link href="/" className="hover:text-on-surface-variant transition-colors duration-200">
                Início
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-secondary">Serviços</span>
            </nav>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[var(--font-manrope)] text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]"
          >
            Nossos Serviços Especializados
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-[1.7]"
          >
            Elevamos a construção civil a um novo patamar de excelência,
            combinando precisão técnica com uma visão arquitetónica moderna e
            duradoura.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeUp}
            className="mt-16 flex justify-center"
          >
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="material-symbols-outlined text-on-surface-variant/40 text-2xl"
            >
              keyboard_arrow_down
            </motion.span>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════ SERVICES ALTERNATING ═══════════════════════ */}
      {services.map((svc, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={svc.title}
            className={`py-24 md:py-32 ${isEven ? "bg-surface-container-low" : "bg-surface"} relative`}
          >
            {/* Decorative line connector */}
            {i > 0 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
                <div className="w-3 h-3 rounded-full border-2 border-secondary/30 bg-surface absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
              </div>
            )}

            <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                className={`relative group ${!isEven ? "order-1 md:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    width={800}
                    height={500}
                    className="w-full h-[500px] object-cover rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                </div>
                {/* Decorative corner accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-secondary/20 rounded-br-lg pointer-events-none" />
              </motion.div>

              {/* Text */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className={`flex flex-col gap-6 ${!isEven ? "order-2 md:order-1" : ""}`}
              >
                {/* Number + tag */}
                <motion.div variants={fadeUp} className="flex items-center gap-4">
                  <span className="font-[var(--font-manrope)] text-5xl font-black text-on-surface-variant/10 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-[var(--font-label)] text-secondary font-bold tracking-[0.2em] uppercase text-[11px]">
                    {svc.tag}
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="font-[var(--font-manrope)] text-4xl md:text-5xl font-bold tracking-tighter text-primary leading-[1.15]"
                >
                  {svc.title}
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-on-surface-variant text-lg leading-[1.7]"
                >
                  {svc.desc}
                </motion.p>
                <motion.a
                  variants={fadeUp}
                  href="https://wa.me/351936569642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit riveted-btn text-on-secondary px-8 py-4 rounded-lg font-[var(--font-label)] font-bold uppercase tracking-widest hover:shadow-[0_8px_30px_rgba(164,2,19,0.4)] transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Pedir Orçamento
                </motion.a>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* ═══════════════════════ TRUST STATS ═══════════════════════ */}
      <section className="bg-surface-container-low noise-overlay py-24 md:py-32 section-divider">
        <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 text-center">
          {[
            { num: "30+", label: "Anos de Experiência", icon: "calendar_month" },
            { num: "500+", label: "Projetos Concluídos", icon: "task_alt" },
            { num: "100%", label: "Garantia de Qualidade", icon: "verified" },
            { num: "24/7", label: "Suporte Técnico", icon: "headset_mic" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-secondary text-xl">
                  {s.icon}
                </span>
              </div>
              <span className="font-[var(--font-manrope)] text-5xl md:text-7xl font-black text-primary leading-[1.1]">
                {s.num}
              </span>
              <span className="font-[var(--font-label)] text-xs text-on-surface-variant uppercase tracking-widest">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ FLOATING CTA ═══════════════════════ */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={showFloatingCta ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
      >
        <a
          href="https://wa.me/351936569642"
          target="_blank"
          rel="noopener noreferrer"
          className="riveted-btn px-6 py-3.5 rounded-full text-sm font-bold font-[var(--font-label)] uppercase tracking-widest text-on-secondary flex items-center gap-3 shadow-2xl shadow-[0_8px_30px_rgba(138,1,16,0.5)]"
        >
          <span className="material-symbols-outlined text-lg">chat</span>
          Pedir Orçamento
        </a>
      </motion.div>
    </>
  );
}
