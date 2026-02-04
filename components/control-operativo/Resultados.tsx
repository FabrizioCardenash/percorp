'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { 
  TrendingUp, 
  Flame, 
  Gauge, 
  Clock, 
  Users2,
  ArrowRight
} from 'lucide-react'

const resultados = [
  {
    icon: TrendingUp,
    text: 'Menos sorpresas en costos, margen y caja.',
  },
  {
    icon: Flame,
    text: 'Menos "incendios": los problemas dejan de repetirse.',
  },
  {
    icon: Gauge,
    text: 'Decisiones más rápidas con información confiable.',
  },
  {
    icon: Clock,
    text: 'Más productividad: menos tiempo en reportes manuales.',
  },
  {
    icon: Users2,
    text: 'Equipos alineados: responsables claros y seguimiento real.',
  },
]

export default function Resultados() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0F] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00F5D4]/5 to-purple-500/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            >
              ¿Qué cambia cuando{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#00B4D8]">
                hay control?
              </span>
            </motion.h2>
          </div>

          {/* Results list */}
          <div className="space-y-4 mb-12">
            {resultados.map((resultado, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="group flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] hover:border-[#00F5D4]/20 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00F5D4]/10 flex items-center justify-center group-hover:bg-[#00F5D4]/20 transition-colors">
                  <resultado.icon className="w-6 h-6 text-[#00F5D4]" />
                </div>
                <p className="text-lg text-white/80 font-body">
                  {resultado.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 text-[#00F5D4] font-body font-medium hover:underline underline-offset-4"
            >
              Quiero control en mi operación
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
