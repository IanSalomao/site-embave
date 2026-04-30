import { motion } from 'framer-motion'
import { Trophy, Zap, Shield, Users } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const highlights = [
  {
    icon: Trophy,
    title: '20+ anos de experiência',
    description: 'Tradição e expertise comprovada no mercado baiano',
  },
  {
    icon: Zap,
    title: 'Atendimento ágil',
    description: 'Processos otimizados para agilidade máxima',
  },
  {
    icon: Shield,
    title: 'Total segurança',
    description: 'Documentação 100% conforme órgãos oficiais',
  },
  {
    icon: Users,
    title: 'Atendimento humano',
    description: 'Contato direto via WhatsApp com nossa equipe',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  const reduced = useReducedMotion()

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-offwhite" aria-label="Sobre a EMBAVE">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagem */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              <div
                className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-lg opacity-15 bg-accent-DEFAULT"
                style={{ borderRadius: '24px' }}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden aspect-[4/3]" style={{ borderRadius: '24px' }}>
                <img
                  src="/images/sobre_equipe.jpg"
                  alt="Equipe EMBAVE, especialistas em documentação veicular na Bahia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={450}
                />
                <div className="absolute inset-0 img-placeholder" aria-hidden="true" style={{ display: 'none' }} />
              </div>
              {/* Card de credibilidade sobreposto */}
              <div
                className="absolute -bottom-6 -right-4 lg:-right-8 bg-white p-5 shadow-medium"
                style={{ borderRadius: '16px', minWidth: '180px' }}
              >
                <div className="text-center">
                  <p className="font-display font-extrabold text-3xl text-primary leading-none">2000+</p>
                  <p className="text-gray-500 text-sm mt-1 font-medium">processos<br />concluídos/ano</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="section-tag">Sobre nós</span>
              <h2
                className="font-display font-bold text-primary mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                Mais de duas décadas cuidando da sua documentação
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10 text-base lg:text-lg">
                A EMBAVE — Emplacadora Baiana de Veículos — nasceu para descomplicar a vida de quem
                precisa lidar com documentação veicular. Atendemos pessoas físicas e jurídicas em toda
                a Bahia, com a experiência de quem já resolveu milhares de processos.
              </p>
            </motion.div>

            {/* Cards de destaques */}
            <motion.div
              variants={reduced ? undefined : container}
              initial={reduced ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={reduced ? undefined : cardAnim}
                    className="flex items-start gap-4 bg-white p-5 rounded-md shadow-soft hover:shadow-medium transition-shadow duration-300"
                    style={{ borderRadius: '16px' }}
                  >
                    <div className="w-11 h-11 bg-primary/8 rounded-md flex items-center justify-center flex-shrink-0" style={{ borderRadius: '10px', background: 'rgba(27,58,107,0.08)' }}>
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-primary text-sm mb-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
