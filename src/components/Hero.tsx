import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, CheckCircle2, Star } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const WHATSAPP_URL = 'https://wa.me/5575988429599?text=Ol%C3%A1%21+Gostaria+de+solicitar+atendimento+sobre+documenta%C3%A7%C3%A3o+veicular.'

const proofItems = [
  'Atendimento ágil',
  '+5.000 clientes',
  'Sem complicação',
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
}

export default function Hero() {
  const reduced = useReducedMotion()

  const handleScrollToServices = () => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FB 60%, #EEF1F5 100%)' }}
      aria-label="Início"
    >
      {/* Elemento decorativo amarelo — canto superior direito */}
      {!reduced && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-12 right-8 lg:top-20 lg:right-20 opacity-20 pointer-events-none"
          aria-hidden="true"
        >
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" stroke="#F5B81C" strokeWidth="3" fill="none"/>
            <polygon points="100,35 165,67 165,133 100,165 35,133 35,67" stroke="#F5B81C" strokeWidth="2" fill="none" opacity="0.5"/>
          </svg>
        </motion.div>
      )}

      {/* Elemento decorativo menor — canto inferior esquerdo */}
      <div className="absolute bottom-20 left-4 lg:left-16 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="#1B3A6B" strokeWidth="2" strokeDasharray="8 4"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <motion.div
            variants={reduced ? undefined : container}
            initial={reduced ? false : 'hidden'}
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={reduced ? undefined : item}>
              <span className="inline-flex items-center gap-2 bg-accent-DEFAULT/10 text-primary font-semibold text-sm px-4 py-2 rounded-full border border-accent-DEFAULT/20 mb-6">
                <Star size={14} fill="#F5B81C" className="text-accent-DEFAULT" />
                +20 anos de experiência na Bahia
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              variants={reduced ? undefined : item}
              className="font-display font-extrabold text-primary leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              Resolvemos a documentação do seu{' '}
              <span className="relative inline-block">
                veículo
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-accent-DEFAULT rounded-full"
                  aria-hidden="true"
                />
              </span>{' '}
              com agilidade e segurança
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={reduced ? undefined : item}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Há mais de 20 anos cuidando da burocracia para você ficar tranquilo. Emplacamento,
              transferência, licenciamento e muito mais — tudo em um só lugar.
            </motion.p>

            {/* Botões */}
            <motion.div
              variants={reduced ? undefined : item}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                <MessageCircle size={20} />
                Solicitar atendimento
              </a>
              <button
                onClick={handleScrollToServices}
                className="btn-outline text-base"
              >
                Ver serviços
                <ChevronDown size={18} />
              </button>
            </motion.div>

            {/* Prova social */}
            <motion.div
              variants={reduced ? undefined : item}
              className="flex flex-wrap gap-4"
            >
              {proofItems.map((proof) => (
                <span key={proof} className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                  <CheckCircle2 size={16} className="text-accent-DEFAULT flex-shrink-0" />
                  {proof}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            variants={reduced ? undefined : imageVariant}
            initial={reduced ? false : 'hidden'}
            animate="visible"
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Sombra decorativa */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg opacity-20"
                style={{ background: 'linear-gradient(135deg, #1B3A6B, #F5B81C)', borderRadius: '24px' }}
                aria-hidden="true"
              />
              <div
                className="relative overflow-hidden aspect-[4/3] lg:aspect-[5/4]"
                style={{ borderRadius: '24px' }}
              >
                <img
                  src="/images/hero_atendimento.png"
                  alt="Equipe EMBAVE realizando atendimento de documentação veicular"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={640}
                  height={512}
                />
                {/* Overlay com placeholder se a imagem não carregar */}
                <div className="absolute inset-0 img-placeholder" aria-hidden="true" style={{ display: 'none' }} />
              </div>

              {/* Badge flutuante */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-md p-4 shadow-medium flex items-center gap-3"
                style={{ borderRadius: '16px' }}
              >
                <div className="w-10 h-10 bg-accent-DEFAULT/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star size={20} fill="#F5B81C" className="text-accent-DEFAULT" />
                </div>
                <div>
                  <p className="font-display font-bold text-primary text-sm">+5.000 clientes</p>
                  <p className="text-gray-500 text-xs">satisfeitos na Bahia</p>
                </div>
              </div>

              {/* Badge de anos */}
              <div
                className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-medium"
              >
                <span className="font-display font-extrabold text-xl leading-none text-accent-DEFAULT">20+</span>
                <span className="text-[10px] font-medium leading-tight text-center">anos de<br/>experiência</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
