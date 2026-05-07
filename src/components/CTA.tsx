import { motion } from 'framer-motion'
import { MessageCircle, Clock } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const WHATSAPP_URL = 'https://wa.me/5575988429599?text=Ol%C3%A1%21+Estou+pronto+para+resolver+a+documenta%C3%A7%C3%A3o+do+meu+ve%C3%ADculo.+Pode+me+ajudar%3F'

function FloatingShape({
  className,
  size,
  delay,
  reduced,
}: {
  className: string
  size: number
  delay: number
  reduced: boolean
}) {
  return (
    <motion.div
      animate={
        reduced
          ? undefined
          : {
              y: [0, -16, 0],
              rotate: [0, 8, 0],
            }
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={`absolute rounded-full opacity-10 bg-accent-DEFAULT pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  )
}

export default function CTA() {
  const reduced = useReducedMotion()

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1B3A6B 0%, #122849 100%)',
      }}
      aria-label="Entre em contato"
    >
      {/* Formas geométricas decorativas */}
      <FloatingShape className="top-8 left-8" size={80} delay={0} reduced={reduced} />
      <FloatingShape className="top-16 right-12" size={120} delay={1.5} reduced={reduced} />
      <FloatingShape className="bottom-8 left-1/4" size={60} delay={0.8} reduced={reduced} />
      <FloatingShape className="bottom-12 right-8" size={100} delay={2.5} reduced={reduced} />
      <FloatingShape className="top-1/2 left-2" size={40} delay={1} reduced={reduced} />

      {/* Linhas decorativas */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute top-0 right-0 opacity-5" width="400" height="400" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="150" stroke="#F5B81C" strokeWidth="1" fill="none" strokeDasharray="8 4"/>
          <circle cx="200" cy="200" r="100" stroke="#F5B81C" strokeWidth="1" fill="none" strokeDasharray="4 8"/>
        </svg>
        <svg className="absolute bottom-0 left-0 opacity-5" width="300" height="300" viewBox="0 0 300 300">
          <polygon points="150,20 280,90 280,210 150,280 20,210 20,90" stroke="#F5B81C" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2
            className="font-display font-extrabold text-white mb-5 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)' }}
          >
            Pronto para resolver a documentação{' '}
            <span className="text-accent-DEFAULT">do seu veículo?</span>
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale com nossos especialistas agora mesmo. Atendimento rápido, seguro e sem
            compromisso.
          </p>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={22} />
              Falar no WhatsApp agora
            </a>
          </motion.div>

          <p className="text-white/50 text-sm flex items-center justify-center gap-2">
            <Clock size={14} />
            Atendimento de segunda a sábado
          </p>
        </motion.div>
      </div>
    </section>
  )
}
