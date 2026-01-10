'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { AlertTriangle, Clock, Flame, FileSpreadsheet } from 'lucide-react'

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Data dispersa',
    description: 'Exceso de data dispersa (ERP, Excel, apps, logs, IoT) sin una "versión única" de la verdad.',
  },
  {
    icon: Clock,
    title: 'KPIs lentos',
    description: 'KPIs que demoran días en generarse y nadie confía en ellos cuando llegan.',
  },
  {
    icon: Flame,
    title: 'Operación reactiva',
    description: 'Incidentes que se repiten, inventario que no cuadra, calidad que "apaga incendios".',
  },
  {
    icon: FileSpreadsheet,
    title: 'Reportería manual',
    description: 'Alto costo operativo, alto riesgo de errores y sin escalabilidad.',
  },
]

export default function PorQueOferta() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="porque" ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-pink-400 font-body text-sm tracking-widest uppercase mb-4"
          >
            El problema
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            ¿Por qué necesitas{' '}
            <span className="text-pink-400">analítica real</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 font-body"
          >
            Las organizaciones pierden tiempo y dinero operando a ciegas. 
            Estos son los problemas más comunes que resolvemos.
          </motion.p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-pink-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                <point.icon className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-white/60 font-body text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

