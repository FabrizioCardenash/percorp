'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '¿Venden equipos y también implementan?',
    answer: 'Sí, bajo modelo end-to-end. Suministramos, configuramos, instalamos y damos soporte. No hay "vacío" de responsabilidad entre proveedor e implementador.',
  },
  {
    question: '¿Pueden trabajar con mi estándar/marcas?',
    answer: 'Sí. Operamos por compatibilidad y disponibilidad. Si ya tienes un estándar corporativo, nos adaptamos. Si no, te ayudamos a definirlo.',
  },
  {
    question: '¿Incluyen inventario?',
    answer: 'Sí, como parte del cierre y/o servicio recurrente. Entregamos documentación as-built con todo el inventario registrado, seriales y garantías.',
  },
  {
    question: '¿Trabajan proyectos chicos?',
    answer: 'Sí. Desde una sala de reuniones hasta despliegues de cientos de equipos. El alcance define el modelo de trabajo.',
  },
  {
    question: '¿Qué marcas manejan?',
    answer: 'Trabajamos con las principales marcas: HP, Lenovo, Dell, Logitech, Poly, Jabra, entre otras. Seleccionamos según requerimiento y disponibilidad.',
  },
]

export default function FAQEquip() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#FF6B00] font-body text-sm tracking-widest uppercase mb-4"
            >
              FAQs
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold"
            >
              Preguntas{' '}
              <span className="text-[#FF6B00]">frecuentes</span>
            </motion.h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-heading font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#FF6B00] shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-white/70 font-body">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

