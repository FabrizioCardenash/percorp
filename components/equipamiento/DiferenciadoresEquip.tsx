'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Key, Lightbulb, Workflow } from 'lucide-react'

const differentiators = [
  {
    icon: Key,
    title: 'Llave en mano + hiper-personalización',
    description: 'Adaptamos a tu operación real (no "caja negra"). Cada implementación es única.',
  },
  {
    icon: Lightbulb,
    title: 'Ingeniería + diseño + PMO',
    description: 'Implementación con control, hitos y entregables claros. No improvisamos.',
  },
  {
    icon: Workflow,
    title: 'Conectividad y eficiencia operacional',
    description: 'Equipamiento como parte del flujo de trabajo, no como "compra" aislada.',
  },
]

export default function DiferenciadoresEquip() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#FF6B00] font-body text-sm tracking-widest uppercase mb-4"
            >
              Diferenciadores
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Alineados a{' '}
              <span className="text-[#FF6B00]">"empresa inteligente"</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 font-body"
            >
              No solo vendemos equipos. Integramos tecnología que potencia 
              la productividad y eficiencia de tu organización.
            </motion.p>
          </div>

          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FF6B00]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#FF6B00]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#FF6B00]" />
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
      </div>
    </section>
  )
}

