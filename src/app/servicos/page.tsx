"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    tag: "Excelencia Estrutural",
    title: "Remodelacoes de Interiores",
    desc: "Transformamos espacos obsoletos em ambientes contemporaneos de alta performance. Nossa equipa de especialistas foca-se na otimizacao da funcionalidade sem nunca abdicar da estetica premium. Desde cozinhas gourmet a salas de estar minimalistas, cada detalhe e planeado com rigor arquitetonico.",
    image: "/servicos/servico-02.jpg",
  },
  {
    tag: "Protecao & Estetica",
    title: "Reabilitacao de Fachadas",
    desc: "A pele de um edificio e o seu primeiro contacto com o mundo. Especializamo-nos no sistema ETICS (Capoto), limpeza tecnica de pedra e revestimentos ceramicos de alta durabilidade. Garantimos isolamento termico superior e uma valorizacao imediata do seu patrimonio imobiliario.",
    image: "/fachadas/fachada-06.jpg",
  },
  {
    tag: "Integridade Superior",
    title: "Coberturas e Impermeabilizacao",
    desc: "Protegemos a sua estrutura contra as intemperies mais severas. Utilizamos membranas asfalticas de ultima geracao e sistemas de drenagem inteligente. Seja um telhado tradicional de ceramica ou uma cobertura plana moderna, a nossa execucao tecnica elimina qualquer risco de infiltracoes.",
    image: "/servicos/servico-10.jpg",
  },
  {
    tag: "Sistemas Hidraulicos",
    title: "Canalizacao e Redes de Agua",
    desc: "Engenharia invisivel mas vital. Projetamos e instalamos redes de aguas e esgotos com materiais de baixo ruido e alta resistencia a pressao. Desde a reparacao urgente a instalacao de sistemas solares termicos, a nossa equipa assegura fluxos eficientes e seguros.",
    image: "/servicos/servico-15.jpg",
  },
  {
    tag: "Energia Inteligente",
    title: "Instalacoes Eletricas e Domotica",
    desc: "Preparamos o seu imovel para o futuro. Implementamos redes eletricas certificadas e sistemas de automacao residencial que permitem controlar iluminacao, climatizacao e seguranca a partir do seu smartphone. Eficiencia energetica e o nosso pilar central.",
    image: "/servicos/servico-20.jpg",
  },
  {
    tag: "Acabamentos Nobres",
    title: "Pinturas Tecnicas e Decorativas",
    desc: "A perfeicao esta no detalhe final. Trabalhamos com tintas premium, estuques venezianos e revestimentos texturizados de luxo. A nossa tecnica de aplicacao garante superficies impecaveis, resistentes ao desgaste e com uma profundidade cromatica inigualavel.",
    image: "/servicos/servico-25.jpg",
  },
  {
    tag: "Base de Estilo",
    title: "Pavimentos e Revestimentos",
    desc: "Do soalho flutuante de madeira nobre aos ceramicos de grande formato, oferecemos solucoes que unem durabilidade e sofisticacao. Aplicamos tecnicas de nivelamento avancadas para garantir uma fundacao perfeita e uma continuidade visual absoluta entre divisoes.",
    image: "/servicos/servico-30.jpg",
  },
  {
    tag: "Materiais de Elite",
    title: "Drogaria VH e Suprimentos",
    desc: "Mais do que uma loja, somos o seu parceiro de confianca na selecao de materiais. A Drogaria VH disponibiliza ferramentas profissionais, produtos quimicos de construcao de topo e consultoria tecnica personalizada para garantir que o seu projeto utiliza apenas o melhor do mercado.",
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
            alt="Servicos VH"
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
            Nossos Servicos Especializados
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Elevamos a construcao civil a um novo patamar de excelencia,
            combinando precisao tecnica com uma visao arquitetonica moderna e
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
                  Pedir Orcamento
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
            { num: "15+", label: "Anos de Experiencia" },
            { num: "500+", label: "Projetos Concluidos" },
            { num: "100%", label: "Garantia de Qualidade" },
            { num: "24/7", label: "Suporte Tecnico" },
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
