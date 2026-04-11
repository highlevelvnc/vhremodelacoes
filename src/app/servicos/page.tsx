"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/servicos/servico-05.jpg"
            alt="Serviços VH"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="font-[var(--font-manrope)] text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6">
            Nossos Serviços Especializados
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Elevamos a construção civil a um novo patamar de excelência,
            combinando precisão técnica com uma visão arquitetónica moderna e
            duradoura.
          </p>
        </motion.div>
      </section>

      {/* Services alternating */}
      {services.map((svc, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={svc.title}
            className={`py-24 md:py-32 ${isEven ? "bg-surface-container-low" : "bg-surface"}`}
          >
            <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative group ${!isEven ? "order-1 md:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    width={800}
                    height={500}
                    className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-6 ${!isEven ? "order-2 md:order-1" : ""}`}
              >
                <span className="font-[var(--font-label)] text-secondary font-bold tracking-[0.3em] uppercase">
                  {svc.tag}
                </span>
                <h2 className="font-[var(--font-manrope)] text-4xl font-bold tracking-tight text-primary">
                  {svc.title}
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {svc.desc}
                </p>
                <a
                  href="https://wa.me/351936569642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit riveted-btn text-on-secondary px-8 py-4 rounded-lg font-[var(--font-label)] font-bold uppercase tracking-widest hover:shadow-[0_8px_30px_rgba(164,2,19,0.4)] transition-all"
                >
                  Pedir Orçamento
                </a>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Trust Stats */}
      <section className="bg-surface-container-highest py-20">
        <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { num: "15+", label: "Anos de Experiência" },
            { num: "500+", label: "Projetos Concluídos" },
            { num: "100%", label: "Garantia de Qualidade" },
            { num: "24/7", label: "Suporte Técnico" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <span className="font-[var(--font-manrope)] text-5xl font-bold text-primary">
                {s.num}
              </span>
              <span className="font-[var(--font-label)] text-xs text-on-surface-variant uppercase tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
