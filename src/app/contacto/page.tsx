"use client";

import { motion } from "framer-motion";

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="font-[var(--font-manrope)] font-black text-5xl md:text-7xl text-on-surface max-w-4xl leading-tight tracking-tighter">
            Estamos prontos para ajudar no seu projeto
          </h1>
          <div className="h-1 w-24 bg-secondary mt-8" />
        </motion.header>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant/10 rounded-xl overflow-hidden mb-24">
          {/* Remodelações */}
          <div className="bg-surface-container-low p-12 flex flex-col justify-between group hover:bg-surface-container transition-colors duration-500">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  construction
                </span>
                <h2 className="font-[var(--font-manrope)] font-bold text-3xl tracking-tight">
                  Remodelações &amp; Obras
                </h2>
              </div>
              <p className="text-on-surface-variant text-lg mb-12 max-w-md">
                Transformamos espaços com precisão arquitetónica. Desde
                renovações totais a detalhes estruturais.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    phone_iphone
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      WhatsApp / Tel
                    </p>
                    <p className="text-xl font-medium">936 569 642</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Email
                    </p>
                    <p className="text-xl font-medium">
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
                className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all"
              >
                Falar com um Especialista{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Drogaria */}
          <div className="bg-surface-container p-12 flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-500">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  storefront
                </span>
                <h2 className="font-[var(--font-manrope)] font-bold text-3xl tracking-tight">
                  Drogaria VH
                </h2>
              </div>
              <p className="text-on-surface-variant text-lg mb-12 max-w-md">
                O seu parceiro em ferragens, tintas e ferramentas profissionais
                com o aconselhamento técnico que precisa.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    call
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      WhatsApp / Tel
                    </p>
                    <p className="text-xl font-medium">926 010 809</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Localização
                    </p>
                    <p className="text-xl font-medium">
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
                className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all"
              >
                Visite a nossa loja{" "}
                <span className="material-symbols-outlined">map</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="font-[var(--font-manrope)] font-bold text-2xl mb-8 tracking-tight">
                Envie-nos uma mensagem
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Nome Completo
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none text-on-surface p-4 rounded transition-all focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Seu nome"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Email
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none text-on-surface p-4 rounded transition-all focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="email@exemplo.pt"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Assunto
                  </label>
                  <select className="w-full bg-surface-container-low border-none text-on-surface p-4 rounded transition-all focus:ring-2 focus:ring-primary focus:outline-none">
                    <option>Orçamento de Obra</option>
                    <option>Pedido de Material (Drogaria)</option>
                    <option>Outros Assuntos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Mensagem
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none text-on-surface p-4 rounded transition-all focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Como podemos ajudar?"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full riveted-btn py-4 text-on-secondary font-[var(--font-manrope)] font-bold uppercase tracking-widest text-sm rounded-lg hover:scale-[1.02] transition-transform"
                >
                  Enviar Pedido
                </button>
              </form>
            </section>
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-3 h-full min-h-[500px] relative rounded-xl overflow-hidden bg-surface-container-high ghost-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12440.36!2d-9.38!3d38.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec5c4b4b3b3b3%3A0x0!2sSintra!5e0!3m2!1spt-PT!2spt!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 500 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização VH em Sintra"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-surface-container-highest/90 backdrop-blur-md p-6 rounded-lg ghost-border">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">
                  share_location
                </span>
                <div>
                  <p className="text-sm font-bold text-on-surface mb-1">
                    Nossa Sede em Sintra
                  </p>
                  <p className="text-on-surface-variant text-xs leading-relaxed">
                    Visite a nossa drogaria técnica e showroom de remodelações.
                    Estacionamento gratuito para clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
