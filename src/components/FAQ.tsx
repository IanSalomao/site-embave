import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import { faqItems } from '../data/faq'
import { useReducedMotion } from '../hooks/useReducedMotion'

const WHATSAPP_URL = 'https://wa.me/5571999999999?text=Ol%C3%A1%21+Tenho+uma+d%C3%BAvida+que+n%C3%A3o+encontrei+no+site+e+gostaria+de+esclarecimentos.'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
  const reduced = useReducedMotion()

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section
      id="contato"
      className="py-20 lg:py-28 bg-white"
      aria-label="Perguntas frequentes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Texto introdutório */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2"
          >
            <span className="section-tag">Dúvidas frequentes</span>
            <h2
              className="font-display font-bold text-primary mb-5"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Tirando suas dúvidas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Não encontrou sua dúvida aqui? Nossa equipe está pronta para te ajudar de forma rápida
              e personalizada via WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} />
              Perguntar no WhatsApp
            </a>

            {/* Stats */}
            <div className="mt-10 pt-10 border-t border-gray-100 grid grid-cols-2 gap-6">
              <div>
                <p className="font-display font-extrabold text-3xl text-primary">98%</p>
                <p className="text-gray-500 text-sm mt-1">satisfação dos clientes</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-3xl text-primary">&lt; 24h</p>
                <p className="text-gray-500 text-sm mt-1">tempo de resposta médio</p>
              </div>
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-3 space-y-3"
          >
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-100 rounded-md overflow-hidden shadow-soft"
                style={{ borderRadius: '12px' }}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-offwhite transition-colors duration-200"
                  aria-expanded={openId === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className="font-display font-semibold text-primary text-sm lg:text-base pr-2">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/8 flex items-center justify-center" style={{ background: 'rgba(27,58,107,0.08)' }}>
                    {openId === item.id ? (
                      <Minus size={14} className="text-primary" />
                    ) : (
                      <Plus size={14} className="text-primary" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openId === item.id && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
