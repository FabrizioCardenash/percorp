'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    pregunta: '¿Trabajan solo proyectos grandes?',
    respuesta: 'No. Podemos empezar con un diagnóstico o submetering y escalar según ROI y criticidad. Nuestro modelo está diseñado para adaptarse a diferentes tamaños de operación.',
  },
  {
    pregunta: '¿Cuánto se puede ahorrar?',
    respuesta: 'Depende del perfil de carga, penalidades, demanda y oportunidades de eficiencia. Por eso iniciamos con diagnóstico y baseline. Típicamente identificamos oportunidades de ahorro entre 10-30% en el primer año.',
  },
  {
    pregunta: '¿Incluyen obra e implementación?',
    respuesta: 'Sí. Operamos llave en mano: ingeniería, ejecución, pruebas y documentación. Contamos con equipos propios y aliados certificados para garantizar calidad y seguridad.',
  },
  {
    pregunta: '¿También operan y dan mantenimiento?',
    respuesta: 'Sí. Ofrecemos O&M, monitoreo y seguimiento de performance con SLA. Nuestro modelo Design-Build-Operate incluye la operación continua como parte integral del servicio.',
  },
  {
    pregunta: '¿Qué necesitan para cotizar?',
    respuesta: 'Recibos de energía (3–12 meses), plano/diagrama si existe, acceso a tablero principal y una visita técnica. Con esta información podemos elaborar una propuesta inicial con ROI estimado.',
  },
]

function FAQItem({ pregunta, respuesta, isOpen, onClick }: {
  pregunta: string
  respuesta: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-heading font-semibold text-white group-hover:text-amber-400 transition-colors pr-4">
          {pregunta}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/70 font-body leading-relaxed">
              {respuesta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-400/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-amber-400 font-body text-sm tracking-widest uppercase mb-4"
            >
              Preguntas Frecuentes
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              ¿Tienes dudas?{' '}
              <span className="text-amber-400">Aquí respondemos</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 font-body leading-relaxed"
            >
              Las preguntas más comunes sobre nuestros servicios de energía. 
              Si tienes alguna otra consulta, no dudes en contactarnos.
            </motion.p>
          </div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                pregunta={faq.pregunta}
                respuesta={faq.respuesta}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

