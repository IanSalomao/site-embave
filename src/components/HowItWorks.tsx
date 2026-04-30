import { motion } from 'framer-motion'
import { MessageCircle, FileSearch, CheckCircle } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Você nos chama no WhatsApp',
    description: 'Conte rapidamente qual serviço você precisa. Resposta rápida e atendimento personalizado.',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Nós orientamos e coletamos a documentação',
    description: 'Indicamos exatamente o que é necessário e cuidamos de todo o processo burocrático.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Entregamos tudo regularizado',
    description: 'Você recebe o resultado sem precisar sair de casa. Seguro, rápido e sem complicação.',
  },
]

export default function HowItWorks() {
  const reduced = useReducedMotion()

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#1B3A6B' }}
      aria-label="Como funciona"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full"
          style={{ background: '#F5B81C', transform: 'translate(30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 opacity-5 rounded-full"
          style={{ background: '#F5B81C', transform: 'translate(-30%, 30%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 opacity-3 rounded-full border border-white/10"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cabeçalho */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="section-tag-white">Como funciona</span>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Resolvemos em 3 passos simples
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Linha tracejada conectando os steps (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px" aria-hidden="true">
            <motion.div
              initial={reduced ? false : { scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              className="absolute inset-0 mx-24"
              style={{
                height: '2px',
                background: 'repeating-linear-gradient(90deg, #F5B81C 0, #F5B81C 10px, transparent 10px, transparent 20px)',
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={reduced ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Número e ícone */}
                  <motion.div
                    initial={reduced ? false : { scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.15 + 0.2,
                    }}
                    className="relative mb-6"
                  >
                    {/* Número grande atrás */}
                    <span
                      className="absolute -top-6 left-1/2 -translate-x-1/2 font-display font-extrabold text-6xl opacity-10 text-accent-DEFAULT select-none"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    {/* Círculo com ícone */}
                    <div
                      className="relative z-10 w-28 h-28 rounded-full border-2 border-accent-DEFAULT/30 flex items-center justify-center"
                      style={{ background: 'rgba(245,184,28,0.1)' }}
                    >
                      <div className="w-20 h-20 rounded-full bg-accent-DEFAULT flex items-center justify-center shadow-medium">
                        <Icon size={32} className="text-primary" strokeWidth={2} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Texto */}
                  <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/5571999999999?text=Ol%C3%A1%21+Quero+come%C3%A7ar+agora+e+resolver+a+documenta%C3%A7%C3%A3o+do+meu+ve%C3%ADculo."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4"
          >
            <MessageCircle size={20} />
            Começar agora no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
