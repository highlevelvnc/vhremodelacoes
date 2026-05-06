"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const sections = [
  {
    icon: "business",
    title: "Responsável pelo Tratamento",
    content:
      "A entidade responsável pelo tratamento dos seus dados pessoais é a VH Remodelações, com sede em Sintra, Portugal. Para qualquer questão relacionada com a proteção de dados, pode contactar-nos através do email obras@vinculos-harmoniosos.pt.",
  },
  {
    icon: "description",
    title: "Dados Recolhidos",
    content:
      "Recolhemos apenas os dados que nos fornece voluntariamente através do formulário de contacto do nosso website: nome, endereço de email e número de telefone. Não recolhemos dados de forma automática para além dos estritamente necessários ao funcionamento do site.",
  },
  {
    icon: "target",
    title: "Finalidade",
    content:
      "Os dados pessoais recolhidos destinam-se exclusivamente à resposta aos seus pedidos de orçamento e contacto. Não partilhamos os seus dados com terceiros nem os utilizamos para fins de marketing não solicitado.",
  },
  {
    icon: "schedule",
    title: "Conservação",
    content:
      "Os seus dados pessoais são conservados pelo período máximo de 12 meses após o último contacto, sendo eliminados de forma segura após este prazo. Pode solicitar a eliminação antecipada dos seus dados a qualquer momento.",
  },
  {
    icon: "shield",
    title: "Direitos",
    content:
      "Nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD), tem direito de acesso, retificação e eliminação dos seus dados pessoais. Para exercer qualquer um destes direitos, contacte-nos através do email obras@vinculos-harmoniosos.pt.",
  },
  {
    icon: "cookie",
    title: "Cookies",
    content:
      "O nosso website utiliza apenas cookies essenciais, necessários ao correto funcionamento da plataforma. Não utilizamos cookies de rastreamento, publicidade ou análise comportamental.",
  },
  {
    icon: "update",
    title: "Atualizações",
    content:
      "A presente política de privacidade pode ser atualizada periodicamente. Última atualização: abril 2025.",
  },
];

export default function PrivacidadeClient() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Header */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeUp} className="mb-6">
            <nav className="inline-flex items-center gap-2 text-sm text-on-surface-variant/60 font-[var(--font-label)]">
              <Link href="/" className="hover:text-on-surface-variant transition-colors duration-200">
                Início
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-secondary">Privacidade</span>
            </nav>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="display-headline text-5xl md:text-7xl max-w-4xl"
          >
            Política de Privacidade
          </motion.h1>
          <motion.div variants={fadeUp} className="flex items-center gap-4 mt-8">
            <div className="h-1 w-24 bg-secondary rounded-full" />
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fafafa] border border-[rgba(20,33,61,0.08)] text-xs font-[var(--font-label)] font-bold uppercase tracking-widest text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary text-sm">verified_user</span>
              RGPD
            </span>
          </motion.div>
        </motion.header>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-on-surface-variant text-lg max-w-3xl leading-[1.8] mb-16"
        >
          A VH Remodelações compromete-se a proteger a privacidade dos visitantes do seu website.
          Esta política descreve como recolhemos, utilizamos e protegemos os seus dados pessoais.
        </motion.p>

        {/* Sections */}
        <div className="grid grid-cols-1 gap-6 max-w-4xl">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glow-card bento-card p-8 md:p-10 rounded-xl group transition-colors duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#c8102e]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c8102e]/15 transition-colors duration-300">
                  <span className="material-symbols-outlined text-secondary text-xl">
                    {section.icon}
                  </span>
                </div>
                <div>
                  <h2 className="font-[var(--font-manrope)] font-bold text-xl md:text-2xl tracking-tight text-on-surface mb-3">
                    {section.title}
                  </h2>
                  <p className="text-on-surface-variant leading-[1.8] text-base">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link
            href="/"
            className="ghost-btn inline-flex items-center gap-3 px-8 py-4 rounded-lg font-[var(--font-label)] font-bold uppercase tracking-widest text-sm"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Voltar ao Início
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export { PrivacidadeClient };
