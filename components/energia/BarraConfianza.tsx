'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Target, ShieldCheck, ClipboardList, Settings, TrendingUp } from 'lucide-react'

const credenciales = [
  { icon: Target, text: 'Enfoque ROI y medición de resultados (M&V)' },
  { icon: ShieldCheck, text: 'Seguridad y cumplimiento en campo' },
  { icon: ClipboardList, text: 'PMO y control de alcance, costo y plazo' },
  { icon: Settings, text: 'Integración con operación existente' },
  { icon: TrendingUp, text: 'Escalable: de quick wins a plataforma energética' },
]

export default function BarraConfianza() {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="relative py-16 bg-gradient-to-r from-amber-400 to-amber-500 overflow-hidden">
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        {/* Credenciales en línea */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8"
        >
          {credenciales.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2 text-black/80"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-body font-medium whitespace-nowrap">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Texto central */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-lg md:text-xl font-body font-semibold text-black/90 max-w-2xl mx-auto"
        >
          "De proyectos puntuales a una operación energética gobernada por datos."
        </motion.p>
      </div>
    </section>
  )
}


