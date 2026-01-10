'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const packages = [
  {
    name: 'Starter',
    duration: '2–4 semanas',
    highlight: false,
    features: [
      '1–2 fuentes de datos',
      '1 dashboard ejecutivo',
      'KPI dictionary básico',
      'Documentación inicial',
    ],
  },
  {
    name: 'Core',
    duration: '4–8 semanas',
    highlight: true,
    features: [
      '3–6 fuentes de datos',
      '3–5 dashboards operativos',
      'Modelo semántico completo',
      'Calidad de datos',
      'Gobierno básico',
    ],
  },
  {
    name: 'Scale',
    duration: '8–12+ semanas',
    highlight: false,
    features: [
      'Múltiples dominios',
      'Gobierno avanzado',
      'Automatización completa',
      'Analítica predictiva',
      'Soporte continuo',
    ],
  },
]

export default function PaquetesTec() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="paquetes" ref={sectionRef} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#103D96]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#1E5BBF] font-body text-sm tracking-widest uppercase mb-4"
          >
            Paquetes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Tres formas de{' '}
            <span className="text-[#1E5BBF]">empezar</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                pkg.highlight 
                  ? 'bg-[#103D96]/10 border-[#103D96]/50' 
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#103D96] text-white text-xs font-body font-medium rounded-full">
                  Recomendado
                </div>
              )}

              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                {pkg.name}
              </h3>
              <p className="text-[#1E5BBF] font-body text-sm mb-6">
                {pkg.duration}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#1E5BBF] shrink-0 mt-0.5" />
                    <span className="text-white/70 font-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-body font-medium transition-colors ${
                  pkg.highlight
                    ? 'bg-[#103D96] text-white hover:bg-[#1E5BBF]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Solicitar propuesta
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
