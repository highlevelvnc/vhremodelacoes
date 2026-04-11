"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* --- Animation variants --- */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* ═══════════════════════ HEADER ═══════════════════════ */}
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
              <span className="text-secondary">Contacto</span>
            </nav>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[var(--font-manrope)] font-black text-5xl md:text-7xl text-on-surface max-w-4xl leading-[1.05] tracking-tighter"
          >
            Estamos prontos para ajudar no seu projeto
          </motion.h1>
          <motion.div variants={fadeUp} className="flex items-center gap-4 mt-8">
            <div className="h-1 w-24 bg-secondary rounded-full" />
            {/* Trust badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/60 ghost-border text-xs font-[var(--font-label)] font-bold uppercase tracking-widest text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
              Resposta em 24h
            </span>
          </motion.div>
        </motion.header>

        {/* ═══════════════════════ CONTACT CARDS ═══════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          {/* Remodelações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glow-card bg-surface-container-low p-12 rounded-xl flex flex-col justify-between group hover:bg-surface-container transition-colors duration-500 ghost-border"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    construction
                  </span>
                </div>
                <h2 className="font-[var(--font-manrope)] font-bold text-3xl tracking-tighter">
                  Remodelações &amp; Obras
                </h2>
              </div>
              <p className="text-on-surface-variant text-lg mb-12 max-w-md leading-[1.7]">
                Transformamos espaços com precisão arquitetónica. Desde
                renovações totais a detalhes estruturais.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">
                      phone_iphone
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1">
                      WhatsApp / Tel
                    </p>
                    <a
                      href="https://wa.me/351936569642"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-on-surface hover:text-secondary transition-colors duration-200 flex items-center gap-2"
                    >
                      936 569 642
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">
                      mail
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1">
                      Email
                    </p>
                    <p className="text-xl font-medium text-on-surface">
                      obras@vinculos-harmoniosos.pt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <a
                href="https://wa.me/351936569642"
                target="_blank"
                rel="noopener noreferrer"
                className="riveted-btn px-8 py-4 rounded-lg text-on-secondary font-[var(--font-label)] font-bold uppercase tracking-widest text-sm inline-flex items-center gap-3 hover:shadow-[0_8px_30px_rgba(138,1,16,0.3)] transition-all"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Falar com um Especialista
              </a>
            </div>
          </motion.div>

          {/* Drogaria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glow-card bg-surface-container p-12 rounded-xl flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-500 ghost-border"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    storefront
                  </span>
                </div>
                <h2 className="font-[var(--font-manrope)] font-bold text-3xl tracking-tighter">
                  Drogaria VH
                </h2>
              </div>
              <p className="text-on-surface-variant text-lg mb-12 max-w-md leading-[1.7]">
                O seu parceiro em ferragens, tintas e ferramentas profissionais
                com o aconselhamento técnico que precisa.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">
                      call
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1">
                      WhatsApp / Tel
                    </p>
                    <a
                      href="https://wa.me/351926010809"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-on-surface hover:text-secondary transition-colors duration-200 flex items-center gap-2"
                    >
                      926 010 809
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1">
                      Localização
                    </p>
                    <p className="text-xl font-medium text-on-surface">
                      Av. Dr. Álvaro de Vasconcelos 8, 2710-420 Sintra
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <a
                href="https://wa.me/351926010809"
                target="_blank"
                rel="noopener noreferrer"
                className="riveted-btn px-8 py-4 rounded-lg text-on-secondary font-[var(--font-label)] font-bold uppercase tracking-widest text-sm inline-flex items-center gap-3 hover:shadow-[0_8px_30px_rgba(138,1,16,0.3)] transition-all"
              >
                <span className="material-symbols-outlined text-lg">map</span>
                Visite a nossa loja
              </a>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════ FORM + MAP ═══════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-12"
          >
            <section>
              <h3 className="font-[var(--font-manrope)] font-bold text-2xl mb-2 tracking-tighter">
                Envie-nos uma mensagem
              </h3>
              <p className="text-on-surface-variant text-sm mb-8 leading-[1.65]">
                Preencha o formulário e entraremos em contacto em breve.
              </p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Nome */}
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors duration-200">
                    Nome Completo
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/10 text-on-surface p-4 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-secondary/40 focus:border-secondary/30 focus:outline-none focus:bg-surface-container hover:border-outline-variant/20 placeholder:text-on-surface-variant/40"
                    placeholder="Seu nome"
                    type="text"
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors duration-200">
                    Email
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/10 text-on-surface p-4 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-secondary/40 focus:border-secondary/30 focus:outline-none focus:bg-surface-container hover:border-outline-variant/20 placeholder:text-on-surface-variant/40"
                    placeholder="email@exemplo.pt"
                    type="email"
                  />
                </div>

                {/* Assunto */}
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors duration-200">
                    Assunto
                  </label>
                  <select className="w-full bg-surface-container-low border border-outline-variant/10 text-on-surface p-4 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-secondary/40 focus:border-secondary/30 focus:outline-none focus:bg-surface-container hover:border-outline-variant/20 appearance-none cursor-pointer">
                    <option>Orçamento de Obra</option>
                    <option>Pedido de Material (Drogaria)</option>
                    <option>Outros Assuntos</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div className="relative group">
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors duration-200">
                    Mensagem
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border border-outline-variant/10 text-on-surface p-4 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-secondary/40 focus:border-secondary/30 focus:outline-none focus:bg-surface-container hover:border-outline-variant/20 resize-none placeholder:text-on-surface-variant/40"
                    placeholder="Como podemos ajudar?"
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full riveted-btn py-4 text-on-secondary font-[var(--font-manrope)] font-bold uppercase tracking-widest text-sm rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                  Enviar Pedido
                </button>
              </form>
            </section>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 h-full min-h-[500px] relative rounded-xl overflow-hidden bg-surface-container-high ghost-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12440.36!2d-9.38!3d38.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec5c4b4b3b3b3%3A0x0!2sSintra!5e0!3m2!1spt-PT!2spt!4v1"
              width="100%"
              height="100%"
              className="rounded-xl"
              style={{ border: 0, minHeight: 500 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização VH em Sintra"
            />
            {/* Map overlay card */}
            <div className="absolute bottom-6 left-6 right-6 bg-surface-container-highest/95 backdrop-blur-md p-6 rounded-xl ghost-border shadow-[0_8px_30px_rgba(1,14,36,0.4)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    share_location
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-on-surface mb-1 font-[var(--font-manrope)]">
                    Nossa Sede em Sintra
                  </p>
                  <p className="text-on-surface-variant text-xs leading-[1.65]">
                    Visite a nossa drogaria técnica e showroom de remodelações.
                    Estacionamento gratuito para clientes.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Sintra+Portugal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                >
                  <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
