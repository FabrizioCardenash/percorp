'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { TrendingDown, Shield, BarChart3, Sun, ArrowRight } from 'lucide-react'

const servicios = [
  {
    icon: TrendingDown,
    title: 'Optimización de costos energéticos',
    description: 'Auditoría, quick wins, reducción de demanda, corrección de factor de potencia, tarifación y eficiencia.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Shield,
    title: 'Resiliencia y continuidad (cargas críticas)',
    description: 'Diagnóstico de criticidad, redundancia, tableros críticos, ATS/UPS, planes de continuidad y mantenimiento.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: BarChart3,
    title: 'Medición avanzada y visibilidad (Submetering)',
    description: 'Medidores, sensórica, gateways, telemetría y dashboards para entender consumo por área/activo.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Sun,
    title: 'Energía distribuida y electrificación',
    description: 'Preparación y proyectos (según caso): solar, almacenamiento, control y expansión futura.',
    color: 'from-purple-500 to-violet-600',
  },
]

export default function QueHacemos() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="servicios" ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-amber-400/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-amber-400 font-body text-sm tracking-widest uppercase mb-4"
          >
            Propuesta de Valor
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Lo que entregamos
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-body leading-relaxed"
          >
            PERCORP Energía integra ingeniería eléctrica, ejecución y capa digital para mejorar 
            desempeño energético y continuidad. No solo instalamos: diseñamos, implementamos 
            y operamos con disciplina de proyectos y métricas.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${servicio.color} mb-6`}>
                  <servicio.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {servicio.title}
                </h3>
                
                <p className="text-white/60 font-body leading-relaxed">
                  {servicio.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-amber-400 font-body font-medium hover:text-amber-300 transition-colors group"
          >
            Quiero una evaluación inicial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}


