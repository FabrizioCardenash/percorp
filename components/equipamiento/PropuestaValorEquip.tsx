'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Sparkles, Settings } from 'lucide-react'

const valueProps = [
  {
    icon: Shield,
    title: 'Un solo proveedor, responsabilidad total',
    description: 'Suministro + integración + puesta en marcha + soporte. Sin intermediarios, sin excusas.',
    highlight: 'End-to-end',
  },
  {
    icon: Sparkles,
    title: 'Experiencia de usuario impecable',
    description: 'Salas que "solo funcionan": híbrido, audio claro, video estable. Sin troubleshooting.',
    highlight: 'Plug & Play',
  },
  {
    icon: Settings,
    title: 'Control y gobierno',
    description: 'Inventario, estándares, reposición, garantías y ciclo de vida. Todo trazable.',
    highlight: 'Gobernanza',
  },
]

export default function PropuestaValorEquip() {
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
            className="inline-block text-[#FF6B00] font-body text-sm tracking-widest uppercase mb-4"
          >
            Propuesta de valor
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            ¿Por qué{' '}
            <span className="text-[#FF6B00]">PERCORP</span>?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B00]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FF6B00]/30 transition-all duration-300 h-full">
                <span className="inline-block px-3 py-1 bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-body rounded-full mb-4">
                  {prop.highlight}
                </span>
                
                <div className="w-14 h-14 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B00]/20 transition-colors">
                  <prop.icon className="w-7 h-7 text-[#FF6B00]" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {prop.title}
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

