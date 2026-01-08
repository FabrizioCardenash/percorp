'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Layers, TrendingDown, Eye, Users } from 'lucide-react'

const propuestas = [
  {
    icon: Layers,
    titulo: 'Control integral',
    descripcion: 'Enfoque integral y coordinación entre diseño y construcción para cumplir calidad, presupuesto y plazos.',
  },
  {
    icon: TrendingDown,
    titulo: 'Reducción de costos',
    descripcion: 'Optimización de recursos para reducir costos indirectos y maximizar retorno.',
  },
  {
    icon: Users,
    titulo: 'Visión dual',
    descripcion: 'Perspectiva como desarrolladores y constructores para decisiones informadas y ejecución práctica.',
  },
  {
    icon: Eye,
    titulo: 'Transparencia',
    descripcion: 'Información clara de costos, avances y decisiones para fortalecer confianza y colaboración.',
  },
]

export default function PropuestaValor() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-br from-[#7800FF] to-[#5500bb] text-white overflow-hidden">
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-white/70 font-body text-sm tracking-widest uppercase mb-4"
          >
            Por qué elegirnos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold"
          >
            Propuesta de valor
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propuestas.map((propuesta, index) => (
            <motion.div
              key={propuesta.titulo}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="p-3 bg-white/20 rounded-xl w-fit mb-4">
                <propuesta.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3">
                {propuesta.titulo}
              </h3>
              <p className="text-white/70 font-body text-sm leading-relaxed">
                {propuesta.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

