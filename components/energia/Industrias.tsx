'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Building2, ShoppingBag, Truck, Building, Stethoscope, Factory } from 'lucide-react'

const industrias = [
  {
    icon: Building2,
    nombre: 'Banca y servicios financieros',
    beneficios: 'Continuidad, criticidad, SLA',
  },
  {
    icon: ShoppingBag,
    nombre: 'Retail y centros comerciales',
    beneficios: 'Demanda, eficiencia, expansión',
  },
  {
    icon: Truck,
    nombre: 'Logística y almacenes',
    beneficios: 'Cargas variables, continuidad',
  },
  {
    icon: Building,
    nombre: 'Edificios corporativos',
    beneficios: 'Submetering, gobierno',
  },
  {
    icon: Stethoscope,
    nombre: 'Clínicas',
    beneficios: 'Respaldo, criticidad',
  },
  {
    icon: Factory,
    nombre: 'Industria ligera',
    beneficios: 'Calidad de energía, protecciones, eficiencia',
  },
]

export default function Industrias() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="industrias" ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-amber-400 font-body text-sm tracking-widest uppercase mb-4"
          >
            Sectores
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Diseñado para operaciones que{' '}
            <span className="text-amber-400">no se pueden detener</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industrias.map((industria, index) => (
            <motion.div
              key={industria.nombre}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-400/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-400/10 rounded-xl group-hover:bg-amber-400/20 transition-colors">
                  <industria.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {industria.nombre}
                  </h3>
                  <p className="text-sm text-white/50 font-body">
                    {industria.beneficios}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-amber-400/80 font-body text-sm mt-12 max-w-xl mx-auto"
        >
          "Si tienes operación 24/7 o penalidades por interrupción, esta página es para ti."
        </motion.p>
      </div>
    </section>
  )
}

