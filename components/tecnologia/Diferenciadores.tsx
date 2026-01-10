'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Award, Target, ClipboardCheck } from 'lucide-react'

const differentiators = [
  {
    icon: Zap,
    title: 'Dashboards bajo demanda, con estándar enterprise',
    description: 'Rápido, pero gobernado. No sacrificamos calidad por velocidad.',
  },
  {
    icon: Award,
    title: 'Socio especialista en Fabric/Azure',
    description: 'Profundidad técnica para entornos complejos y arquitecturas modernas.',
  },
  {
    icon: Target,
    title: 'Orientación a operación',
    description: 'Analítica aplicada a eficiencia, costos y control. No "reportes bonitos".',
  },
  {
    icon: ClipboardCheck,
    title: 'Implementación con disciplina (PMO-lite)',
    description: 'Hitos claros, entregables definidos, adopción asegurada.',
  },
]

export default function Diferenciadores() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-b from-black to-gray-950 text-white overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#1E5BBF] font-body text-sm tracking-widest uppercase mb-4"
          >
            Por qué PERCORP
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            Diferenciadores{' '}
            <span className="text-[#1E5BBF]">clave</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group flex items-start gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#103D96]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#103D96]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#103D96]/20 transition-colors">
                <item.icon className="w-6 h-6 text-[#1E5BBF]" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 font-body text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
