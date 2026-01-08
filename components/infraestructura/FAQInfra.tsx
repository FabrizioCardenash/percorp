'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    pregunta: '¿PERCORP diseña y construye?',
    respuesta: 'Sí: arquitectura & diseño, construcción & ejecución y gestión de proyectos, según alcance. Ofrecemos servicios integrales o modulares según las necesidades de cada cliente.',
  },
  {
    pregunta: '¿Cómo controlan costos y plazos?',
    respuesta: 'Con planificación detallada, presupuestos estructurados, cronogramas y control durante construcción y cierre. Utilizamos herramientas de gestión de proyectos y reportes periódicos para mantener visibilidad total.',
  },
  {
    pregunta: '¿Pueden entrar como consultoría?',
    respuesta: 'Sí: ofrecemos consultoría técnica (optimización de costos y evaluación de riesgos) y consultoría estratégica para decisiones técnicas de inversionistas y desarrolladores.',
  },
]

function FAQItem({ pregunta, respuesta, isOpen, onClick }: {
  pregunta: string
  respuesta: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-heading font-semibold text-black group-hover:text-[#7800FF] transition-colors pr-4">
          {pregunta}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-[#7800FF] flex-shrink-0 transition-transform duration-300 ${
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
            <p className="pb-6 text-gray-600 font-body leading-relaxed">
              {respuesta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQInfra() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white text-black overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#7800FF] font-body text-sm tracking-widest uppercase mb-4"
            >
              Preguntas Frecuentes
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold"
            >
              FAQ
            </motion.h2>
          </div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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

