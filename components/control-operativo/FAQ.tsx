'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    pregunta: '¿Necesito tener todo ordenado para empezar?',
    respuesta: 'No. Empezamos con lo esencial y lo volvemos consistente. Ordenar es parte del proceso.'
  },
  {
    pregunta: '¿Esto es solo tecnología?',
    respuesta: 'No. Es control operacional: indicadores, responsables, rutina y automatización. La tecnología es un habilitador, no el fin.'
  },
  {
    pregunta: '¿Cuándo veo resultados?',
    respuesta: 'El enfoque es entregar valor en semanas, con avances visibles desde el inicio. No esperamos meses para mostrar progreso.'
  },
  {
    pregunta: '¿Se integra con lo que ya uso?',
    respuesta: 'Sí. Trabajamos sobre tu realidad actual y priorizamos continuidad y simplicidad. No te obligamos a cambiar tus herramientas.'
  },
  {
    pregunta: '¿Qué requiere de mi equipo?',
    respuesta: 'Un sponsor (decisor) y 1–2 referentes para validar indicadores y rutinas. Lo hacemos liviano para que no sea una carga adicional.'
  },
]

export default function FAQ() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#080810] overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#00F5D4] font-body text-sm uppercase tracking-widest mb-4"
            >
              FAQ
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-heading font-bold text-white"
            >
              Preguntas frecuentes
            </motion.h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-white font-body font-medium pr-4">
                    {faq.pregunta}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-200 ${
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
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-white/60 font-body leading-relaxed">
                          {faq.respuesta}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Bloque técnico colapsable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-8"
          >
            <div className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === 99 ? null : 99)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white/60 font-body text-sm">
                  Para equipos TI (opcional)
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === 99 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === 99 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-white/50 font-body leading-relaxed text-sm">
                        Nos integramos a tu ecosistema actual (data, herramientas y flujos). 
                        Diseñamos una base robusta para escalar analítica y automatización 
                        sin rehacer lo implementado. Trabajamos con cloud, IA, ofimática, 
                        analítica y automatización según las necesidades del proyecto.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

