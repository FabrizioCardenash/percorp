'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Database, LayoutDashboard, Settings, Map } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    duration: '1 semana',
    description: 'Objetivos, KPIs, fuentes, owners, riesgos.',
  },
  {
    number: '02',
    icon: Database,
    title: 'Ingesta y modelo',
    duration: '2–3 semanas',
    description: 'Pipelines + modelo semántico estructurado.',
  },
  {
    number: '03',
    icon: LayoutDashboard,
    title: 'Dashboards v1',
    duration: '1–2 semanas',
    description: 'Tableros accionables + validación con usuarios.',
  },
  {
    number: '04',
    icon: Settings,
    title: 'Industrialización',
    duration: 'Ongoing',
    description: 'Gobierno, documentación, monitoreo y escalamiento.',
  },
  {
    number: '05',
    icon: Map,
    title: 'Roadmap analítico',
    duration: 'Continuo',
    description: 'Siguientes casos: automatización + predictivo.',
  },
]

export default function MetodologiaData() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="metodologia" ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#103D96]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#1E5BBF] font-body text-sm tracking-widest uppercase mb-4"
          >
            Metodología
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Data-to-Value{' '}
            <span className="text-[#1E5BBF]">Framework</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 font-body"
          >
            Un proceso probado para entregar valor en semanas, no meses.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#103D96]/30 to-transparent" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 bg-black border-2 border-[#103D96] rounded-full flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-[#1E5BBF]" />
                </div>

                <span className="inline-block px-3 py-1 bg-[#103D96]/10 text-[#1E5BBF] text-xs font-body rounded-full mb-3">
                  {step.duration}
                </span>

                <h3 className="font-heading font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 font-body">
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
