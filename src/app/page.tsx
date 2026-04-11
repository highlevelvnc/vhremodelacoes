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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fachadas/fachada-03.jpg"
            alt="Obra de remodelação VH"
            fill
            className="object-cover opacity-40 grayscale-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 text-center md:text-left"
        >
          <h1 className="font-[var(--font-manrope)] font-black text-5xl md:text-8xl leading-tight mb-8 max-w-5xl tracking-tighter text-on-surface">
            Construímos o Seu{" "}
            <span className="text-secondary">Futuro</span>, Remodelamos o Seu
            Presente
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
            Especialistas em remodelações completas, pinturas e construção civil
            em toda Portugal. Elevamos espaços a obras de arte arquitetónicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
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
              className="ghost-border px-8 py-4 rounded-lg text-lg font-bold font-[var(--font-label)] uppercase tracking-widest text-primary flex items-center justify-center gap-3 bg-surface-container-high/30 backdrop-blur-sm hover:bg-surface-container-high transition-all"
            >
              Nossos Projetos
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-surface-container-low py-20 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { num: "10+", label: "Anos de Experiência" },
            { num: "500+", label: "Obras Concluídas" },
            { num: "100%", label: "Clientes Satisfeitos" },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 border-l-4 border-secondary pl-8"
            >
              <span className="text-5xl md:text-6xl font-[var(--font-manrope)] font-black text-primary">
                {s.num}
              </span>
              <span className="font-[var(--font-label)] text-sm uppercase tracking-widest text-on-surface-variant">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-[var(--font-manrope)] text-sm uppercase tracking-[0.3em] text-secondary font-bold mb-4">
                Especialidades
              </h2>
              <p className="font-[var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter">
                Soluções Integradas de Engenharia e Design
              </p>
            </div>
            <div className="text-on-surface-variant">
              Do rascunho à entrega da chave, cuidamos de cada detalhe com rigor técnico.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-high p-10 rounded-lg group hover:bg-surface-container-highest transition-all duration-300 flex flex-col gap-6"
              >
                <span className="material-symbols-outlined text-secondary text-4xl">
                  {svc.icon}
                </span>
                <h3 className="font-[var(--font-manrope)] text-2xl font-bold">
                  {svc.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {svc.desc}
                </p>
                <Link
                  href="/servicos"
                  className="mt-auto flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all"
                >
                  Saber Mais{" "}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-surface-container-lowest py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-16 flex justify-between items-end">
          <h2 className="font-[var(--font-manrope)] text-4xl md:text-5xl font-extrabold tracking-tighter">
            Obras Recentes
          </h2>
          <Link
            href="/galeria"
            className="text-secondary font-bold hover:underline hidden md:block"
          >
            Ver Todas &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`aspect-[3/4] bg-surface-container overflow-hidden ${i === 2 ? "lg:mt-12" : i === 4 ? "lg:mt-8" : ""}`}
            >
              <img
                src={src}
                alt={`Obra VH ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Drogaria Banner */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative bg-surface-container-high rounded-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center gap-8">
              <h2 className="font-[var(--font-manrope)] text-sm uppercase tracking-widest text-secondary font-bold">
                Drogaria VH Sintra
              </h2>
              <h3 className="font-[var(--font-manrope)] text-4xl md:text-5xl font-black text-on-surface leading-tight tracking-tighter">
                Precisa de materiais? Visite a Drogaria VH em Sintra.
              </h3>
              <p className="text-xl text-on-surface-variant">
                Ferramentas profissionais, tintas de alta gama e tudo para a sua
                obra num só lugar.
              </p>
              <div>
                <a
                  href="https://wa.me/351926010809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="riveted-btn px-10 py-5 rounded-lg text-lg font-bold font-[var(--font-label)] uppercase tracking-widest text-on-secondary inline-flex items-center gap-4"
                >
                  Ver Loja
                  <span className="material-symbols-outlined">storefront</span>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <Image
                src="/drogaria/drogaria-loja.jpg"
                alt="Drogaria VH Sintra"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
