import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-16 pb-8 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 md:px-12 w-full max-w-7xl mx-auto mb-16">
        <div className="flex flex-col gap-6">
          <div className="text-xl font-bold text-primary uppercase tracking-widest font-[var(--font-manrope)]">
            Vínculos Harmoniosos
          </div>
          <p className="text-on-surface/50 text-sm leading-relaxed">
            Referência em construção civil e remodelações em Portugal. Qualidade
            e compromisso em cada tijolo.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-on-surface font-bold font-[var(--font-manrope)] uppercase text-xs tracking-widest">
            Navegação
          </h4>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-on-surface/50 hover:text-secondary transition-all text-sm"
            >
              Remodelações
            </Link>
            <Link
              href="/servicos"
              className="text-on-surface/50 hover:text-secondary transition-all text-sm"
            >
              Serviços
            </Link>
            <Link
              href="/galeria"
              className="text-on-surface/50 hover:text-secondary transition-all text-sm"
            >
              Projetos
            </Link>
            <Link
              href="/contacto"
              className="text-on-surface/50 hover:text-secondary transition-all text-sm"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-on-surface font-bold font-[var(--font-manrope)] uppercase text-xs tracking-widest">
            Informação
          </h4>
          <div className="flex flex-col gap-3">
            <span className="text-on-surface/50 text-sm">
              Sintra, Portugal
            </span>
            <span className="text-on-surface/50 text-sm">
              Tel: 936 569 642
            </span>
            <span className="text-on-surface/50 text-sm">
              Drogaria: 926 010 809
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-on-surface font-bold font-[var(--font-manrope)] uppercase text-xs tracking-widest">
            Orçamento
          </h4>
          <a
            href="https://wa.me/351936569642"
            target="_blank"
            rel="noopener noreferrer"
            className="riveted-btn text-on-secondary py-3 rounded-lg font-bold text-xs uppercase tracking-widest text-center"
          >
            WhatsApp Direto
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-on-surface/50 text-sm">
          &copy; 2025 Vínculos Harmoniosos - Construção &amp; Drogaria. Todos os
          direitos reservados.
        </span>
        <span className="text-secondary font-semibold text-sm">
          Sintra, Portugal
        </span>
      </div>
    </footer>
  );
}
