import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { useReducedMotion } from '../hooks/useReducedMotion'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#F5B81C" className="text-accent-DEFAULT" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const reduced = useReducedMotion()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: 'start',
    dragFree: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  useEffect(() => {
    if (reduced || isPaused || !emblaApi) return
    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [emblaApi, reduced, isPaused])

  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-28 bg-offwhite"
      aria-label="Depoimentos dos clientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="section-tag">O que dizem nossos clientes</span>
          <h2
            className="font-display font-bold text-primary"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Quem confia, recomenda
          </h2>
        </motion.div>

        {/* Carrossel */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {testimonials.map((t) => (
                <article
                  key={t.id}
                  className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 p-7 flex flex-col"
                  style={{ borderRadius: '16px' }}
                >
                  <StarRating count={t.stars} />

                  <blockquote className="mt-4 flex-1">
                    <p className="text-gray-600 italic leading-relaxed text-sm">
                      "{t.text}"
                    </p>
                  </blockquote>

                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <img
                        src={t.image}
                        alt={`Foto de ${t.name}`}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                        width={48}
                        height={48}
                      />
                      <div className="absolute inset-0 rounded-full img-placeholder" aria-hidden="true" style={{ display: 'none' }} />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-primary text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Navegar por depoimentos">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === selectedIndex}
                  aria-label={`Depoimento ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? 'w-6 bg-primary'
                      : 'w-2 bg-gray-300 hover:bg-primary/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
