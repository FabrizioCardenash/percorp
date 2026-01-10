'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, FileText, Box, Wrench, Settings } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico rápido',
    duration: '48–72h',
    description: 'Requerimientos + estándar objetivo definido.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Diseño de solución',
    duration: '1 semana',
    description: 'BOM (lista de materiales) + arquitectura + cronograma.',
  },
  {
    number: '03',
    icon: Box,
    title: 'Abastecimiento & staging',
    duration: '1–2 semanas',
    description: 'Pruebas en laboratorio / preconfiguración.',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Implementación en sitio',
    duration: '1–2 semanas',
    description: 'Instalación + validación + capacitación corta.',
  },
  {
    number: '05',
    icon: Settings,
    title: 'Operación y soporte',
    duration: 'Continuo',
    description: 'Inventario, garantías, mejoras continuas.',
  },
]

export default function MetodologiaEquip() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="metodologia" ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#FF6B00] font-body text-sm tracking-widest uppercase mb-4"
          >
            Cómo trabajamos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Metodología{' '}
            <span className="text-[#FF6B00]">5 pasos</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connection line */}
          <div className="hidden xl:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative text-center px-2"
              >
                <div className="relative z-10 w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 bg-black border-2 border-[#FF6B00] rounded-full flex items-center justify-center">
                  <step.icon className="w-6 h-6 lg:w-7 lg:h-7 text-[#FF6B00]" />
                </div>

                <span className="inline-block px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-body rounded-full mb-3">
                  {step.duration}
                </span>

                <h3 className="font-heading font-semibold text-white mb-2 text-sm lg:text-base leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs lg:text-sm text-white/60 font-body leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

