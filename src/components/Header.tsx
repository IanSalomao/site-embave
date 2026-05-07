import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const WHATSAPP_URL = 'https://wa.me/5575988429599?text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os.'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={reduced ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
              className="flex items-center gap-2 flex-shrink-0"
              aria-label="EMBAVE - Início"
            >
              <img
                src="/images/logo_embave.png"
                alt="EMBAVE — Emplacadora Baiana de Veículos"
                className="h-10 lg:h-12 w-auto object-contain"
                width={120}
                height={48}
              />
            </a>

            {/* Nav Desktop */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Menu principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-accent-DEFAULT relative group ${
                    scrolled ? 'text-gray-700' : 'text-primary'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-DEFAULT transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm"
              >
                <MessageCircle size={16} />
                Fale no WhatsApp
              </a>
            </div>

            {/* Hamburguer Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-primary hover:bg-primary/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={reduced ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 lg:hidden shadow-strong flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <img
                  src="/images/logo_embave.png"
                  alt="EMBAVE"
                  className="h-10 w-auto object-contain"
                  width={100}
                  height={40}
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Fechar menu"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1 flex-1" aria-label="Menu mobile">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    initial={reduced ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className="text-gray-700 font-medium py-3 px-4 rounded-md hover:bg-primary/5 hover:text-primary transition-colors text-base"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="p-6 border-t border-gray-100">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <MessageCircle size={18} />
                  Fale no WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
