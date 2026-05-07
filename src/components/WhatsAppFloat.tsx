import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const WHATSAPP_URL = 'https://wa.me/5575988429599?text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os.'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)
  const reduced = useReducedMotion()

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      role="complementary"
      aria-label="Botão flutuante de WhatsApp"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-md shadow-medium whitespace-nowrap pointer-events-none"
            style={{ borderRadius: '8px' }}
          >
            Fale conosco
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="relative w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-strong hover:scale-110 transition-transform duration-200 focus-visible:ring-4 focus-visible:ring-whatsapp/50"
      >
        {/* Pulso */}
        {!reduced && (
          <>
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-whatsapp"
            />
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
              className="absolute inset-0 rounded-full bg-whatsapp"
            />
          </>
        )}
        <MessageCircle size={26} className="text-white relative z-10" fill="currentColor" strokeWidth={0} />
      </a>
    </div>
  )
}
