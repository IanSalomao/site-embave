import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { services } from '../data/services'
import { useReducedMotion } from '../hooks/useReducedMotion'

function encodeMessage(msg: string) {
  return encodeURIComponent(msg)
}

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/5575988429599?text=${encodeMessage(message)}`
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  const reduced = useReducedMotion()

  return (
    <section
      id="servicos"
      className="py-20 lg:py-28 relative overflow-hidden"
      aria-label="Nossos serviços"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(200,205,214,0.4) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="section-tag">Nossos serviços</span>
          <h2
            className="font-display font-bold text-primary mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Tudo o que seu veículo precisa em um só lugar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            Cuidamos de toda a burocracia para você economizar tempo e evitar dores de cabeça.
          </p>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          variants={reduced ? undefined : container}
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isLast = index === services.length - 1
            const isFourth = index === services.length - 2

            return (
              <motion.article
                key={service.id}
                variants={reduced ? undefined : cardAnim}
                whileHover={reduced ? undefined : { y: -8, transition: { duration: 0.3 } }}
                className={`group bg-white rounded-lg shadow-soft hover:shadow-strong transition-shadow duration-400 overflow-hidden flex flex-col ${
                  isLast || isFourth ? 'sm:col-span-1 lg:col-span-1' : ''
                } ${
                  services.length === 5 && index === 3
                    ? 'lg:col-start-1 lg:col-span-1'
                    : ''
                }`}
                style={{
                  borderRadius: '16px',
                  ...(services.length === 5 && index >= 3 ? { gridColumn: undefined } : {}),
                }}
              >
                {/* Imagem */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={service.image}
                    alt={`Serviço de ${service.title} — EMBAVE`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={225}
                  />
                  <div className="absolute inset-0 img-placeholder" aria-hidden="true" style={{ display: 'none' }} />
                  {/* Badge ícone */}
                  <div className="absolute top-4 left-4 w-11 h-11 bg-primary rounded-full flex items-center justify-center shadow-medium">
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-primary text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                  {/* Linha amarela animada no hover */}
                  <div className="relative mb-4 h-0.5 bg-gray-100 overflow-hidden rounded-full">
                    <div className="absolute inset-y-0 left-0 w-0 bg-accent-DEFAULT group-hover:w-full transition-all duration-500 rounded-full" />
                  </div>

                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent-DEFAULT transition-colors duration-200 group/link"
                    aria-label={`Saiba mais sobre ${service.title} via WhatsApp`}
                  >
                    <MessageCircle size={16} />
                    Saiba mais
                    <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* CTA da seção */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            Não encontrou o serviço que precisa?
          </p>
          <a
            href="https://wa.me/5575988429599?text=Ol%C3%A1%21+Vim+pelo+site+e+tenho+uma+d%C3%BAvida+sobre+um+servi%C3%A7o."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            Consulte nossos especialistas
          </a>
        </motion.div>
      </div>
    </section>
  )
}
