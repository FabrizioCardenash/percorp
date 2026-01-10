'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { 
  AlertCircle, 
  Radio, 
  Target, 
  Package, 
  Fingerprint, 
  TrendingUp, 
  CheckCircle2, 
  Timer,
  Brain,
  Users
} from 'lucide-react'

const categories = [
  {
    title: 'Operación & continuidad',
    color: 'pink',
    cases: [
      { icon: AlertCircle, name: 'Gestión de incidentes', detail: 'MTTR, recurrencia, causalidad' },
      { icon: Radio, name: 'Telemetría y disponibilidad', detail: 'Servicios, equipos, sedes' },
      { icon: Target, name: 'Control tower operativo', detail: 'Visibilidad end-to-end' },
    ],
  },
  {
    title: 'Inventarios & activos',
    color: 'blue',
    cases: [
      { icon: Package, name: 'Inventario valorizado', detail: 'Rotación y valorización' },
      { icon: Fingerprint, name: 'Trazabilidad de activos', detail: 'Asignación, garantías, ciclo de vida' },
      { icon: TrendingUp, name: 'Predicción de reposición', detail: 'Obsolescencia anticipada' },
    ],
  },
  {
    title: 'Calidad & productividad',
    color: 'green',
    cases: [
      { icon: CheckCircle2, name: 'Calidad de datos', detail: 'Completitud, duplicados, consistencia' },
      { icon: Timer, name: 'KPI de procesos', detail: 'SLA, lead time, retrabajo' },
      { icon: Users, name: 'Adopción de plataformas', detail: 'Usabilidad y engagement' },
    ],
  },
  {
    title: 'Predictivo',
    color: 'purple',
    cases: [
      { icon: Brain, name: 'Modelos de forecast', detail: 'Demanda, carga operativa, fallas' },
      { icon: Users, name: 'Segmentación', detail: 'Patrones de comportamiento' },
    ],
  },
]

const colorClasses = {
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', icon: 'text-pink-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', icon: 'text-blue-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', icon: 'text-green-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', icon: 'text-purple-400' },
}

export default function CasosDeUso() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="casos" ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-pink-400 font-body text-sm tracking-widest uppercase mb-4"
          >
            Casos de uso
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Analítica aplicada a{' '}
            <span className="text-pink-400">casos reales</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 font-body"
          >
            No hacemos dashboards genéricos. Cada caso responde a un problema 
            operativo real con impacto medible.
          </motion.p>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses]
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + catIndex * 0.1 }}
                className={`p-6 border ${colors.border} rounded-2xl ${colors.bg}`}
              >
                <h3 className={`text-xl font-heading font-semibold ${colors.text} mb-6`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.cases.map((useCase, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-black/30 rounded-lg"
                    >
                      <useCase.icon className={`w-5 h-5 ${colors.icon} shrink-0 mt-0.5`} />
                      <div>
                        <p className="font-body font-medium text-white">{useCase.name}</p>
                        <p className="text-sm text-white/50 font-body">{useCase.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

