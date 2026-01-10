'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Workflow, BarChart3, Lock } from 'lucide-react'

const capabilities = [
  {
    icon: Workflow,
    title: 'Data Engineering',
    color: 'pink',
    items: [
      'Conexión a fuentes (DB, APIs, Excel/SharePoint, logs)',
      'ETL/ELT, calidad, versionado',
      'Lakehouse/warehouse según necesidad',
    ],
  },
  {
    icon: BarChart3,
    title: 'BI & Performance Management',
    color: 'blue',
    items: [
      'Power BI/Fabric dashboards',
      'KPI tree, drill-down, métricas por sede/área',
      'Automatización de reportes',
    ],
  },
  {
    icon: Lock,
    title: 'Data Governance & Control',
    color: 'green',
    items: [
      'Diccionario de datos y definiciones KPI',
      'Permisos, roles, trazabilidad',
      '"Single source of truth" por dominio',
    ],
  },
]

const colorClasses = {
  pink: { bg: 'bg-[#103D96]/10', border: 'border-[#103D96]/30', text: 'text-[#1E5BBF]', iconBg: 'bg-[#103D96]/20' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', iconBg: 'bg-blue-500/20' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', iconBg: 'bg-green-500/20' },
}

export default function Arquitectura() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="arquitectura" ref={sectionRef} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#1E5BBF] font-body text-sm tracking-widest uppercase mb-4"
          >
            Arquitectura
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Bloques de{' '}
            <span className="text-[#1E5BBF]">capacidades</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 font-body"
          >
            Tres pilares fundamentales para una plataforma de datos sólida y escalable.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => {
            const colors = colorClasses[cap.color as keyof typeof colorClasses]
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`p-8 border ${colors.border} rounded-2xl ${colors.bg}`}
              >
                <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <cap.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                
                <h3 className={`text-2xl font-heading font-bold ${colors.text} mb-6`}>
                  {cap.title}
                </h3>
                
                <ul className="space-y-3">
                  {cap.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`w-1.5 h-1.5 ${colors.text} rounded-full mt-2 shrink-0`} style={{ backgroundColor: 'currentColor' }} />
                      <span className="text-white/70 font-body text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
