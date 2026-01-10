'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LayoutDashboard, Database, BookOpen, Bell, Map, ArrowRight } from 'lucide-react'

const deliverables = [
  {
    icon: LayoutDashboard,
    title: 'Dashboards ejecutivos y operativos',
    description: 'Power BI/Fabric con métricas accionables para cada nivel de la organización.',
  },
  {
    icon: Database,
    title: 'Modelo de datos / Lakehouse',
    description: 'Arquitectura lista para escalar con gobierno y calidad incorporados.',
  },
  {
    icon: BookOpen,
    title: 'Diccionario de KPIs',
    description: 'Métricas y definiciones claras con reglas de negocio documentadas.',
  },
  {
    icon: Bell,
    title: 'Alertas y monitoreo',
    description: 'Detección temprana de anomalías y notificaciones según caso.',
  },
  {
    icon: Map,
    title: 'Backlog de analítica',
    description: 'Roadmap priorizado a 90 días con siguientes casos de uso.',
  },
]

export default function QueEntregamos() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="entregables" ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-b from-black to-gray-950 text-white overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#1E5BBF] font-body text-sm tracking-widest uppercase mb-4"
            >
              Qué entregamos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Outputs{' '}
              <span className="text-[#1E5BBF]">concretos</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 font-body mb-8"
            >
              No entregamos proyectos abiertos. Cada engagement tiene entregables 
              definidos, medibles y listos para operar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <p className="text-sm text-white/60 font-body leading-relaxed">
                <strong className="text-white">Microsoft posiciona Azure Data Factory</strong> como 
                servicio de integración de datos administrado con conectores, útil para 
                consolidación/ETL/ELT en arquitecturas modernas; y <strong className="text-white">Fabric 
                integra capacidades</strong> de data/analytics en una experiencia unificada.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#103D96]/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#103D96]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#103D96]/20 transition-colors">
                  <item.icon className="w-5 h-5 text-[#1E5BBF]" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 font-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#103D96] text-white font-body font-medium rounded-lg hover:bg-[#1E5BBF] transition-colors group"
          >
            Quiero una propuesta
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
