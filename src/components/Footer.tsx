import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

const quickLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
  { label: 'FAQ', href: '#contato' },
]

const handleNavClick = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-label="Rodapé">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14 lg:py-20">
          {/* Coluna 1 — Logo e descrição */}
          <div>
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
              aria-label="EMBAVE - Início"
              className="inline-block mb-5"
            >
              <img
                src="/images/logo_embave.png"
                alt="EMBAVE — Emplacadora Baiana de Veículos"
                className="h-12 w-auto object-contain brightness-0 invert"
                width={120}
                height={48}
                loading="lazy"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Há mais de 20 anos simplificando a documentação veicular na Bahia. Emplacamento,
              transferência, licenciamento e muito mais.
            </p>
            {/* Redes sociais */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/embave"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da EMBAVE"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-DEFAULT hover:text-primary transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/embave"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da EMBAVE"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-DEFAULT hover:text-primary transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2 — Links rápidos */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Links rápidos
            </h3>
            <nav aria-label="Links do rodapé">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                      className="text-gray-400 text-sm hover:text-accent-DEFAULT transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-DEFAULT opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contato
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-accent-DEFAULT flex-shrink-0 mt-0.5" />
                <span>Salvador, Bahia — Atendemos em toda a Bahia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-accent-DEFAULT flex-shrink-0" />
                <a
                  href="tel:+5571999999999"
                  className="hover:text-accent-DEFAULT transition-colors duration-200"
                >
                  (71) 9 9999-9999
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-accent-DEFAULT flex-shrink-0" />
                <a
                  href="mailto:contato@embave.com.br"
                  className="hover:text-accent-DEFAULT transition-colors duration-200"
                >
                  contato@embave.com.br
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock size={16} className="text-accent-DEFAULT flex-shrink-0 mt-0.5" />
                <span>Segunda a sexta: 8h às 18h<br />Sábado: 8h às 13h</span>
              </div>
            </address>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2025 EMBAVE — Emplacadora Baiana de Veículos. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            CNPJ: XX.XXX.XXX/0001-XX
          </p>
        </div>
      </div>
    </footer>
  )
}
