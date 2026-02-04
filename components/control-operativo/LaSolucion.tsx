'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { BarChart3, RefreshCcw, Zap, Users } from 'lucide-react'

const pilares = [
  {
    icon: BarChart3,
    numero: '01',
    titulo: 'Tablero de Control',
    subtitulo: 'Lo esencial',
    descripcion: '10–15 indicadores que gobiernan el negocio. Definiciones claras. Un número confiable.',
    color: '#00F5D4',
  },
  {
    icon: RefreshCcw,
    numero: '02',
    titulo: 'Rutina de Gestión',
    subtitulo: 'Lo que sostiene',
    descripcion: 'Responsables, prioridades, acciones y seguimiento semanal. Sin burocracia.',
    color: '#A78BFA',
  },
  {
    icon: Zap,
    numero: '03',
    titulo: 'Automatización',
    subtitulo: 'Lo que acelera',
    descripcion: 'Alertas y flujos simples para reducir errores, retrabajo y tiempos muertos.',
    color: '#FBBF24',
  },
]

export default function LaSolucion() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="solucion" className="relative py-24 md:py-32 bg-[#080810] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00F5D4]/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#00F5D4] font-body text-sm uppercase tracking-widest mb-4"
            >
              La solución
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            >
              El sistema mínimo que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#00B4D8]">
                ordena la operación.
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60 font-body"
            >
              No vendemos reportes. Dejamos un sistema funcionando: claro, robusto y fácil de usar.
            </motion.p>
          </div>

          {/* Pilares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pilares.map((pilar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                {/* Number badge */}
                <div 
                  className="absolute -top-4 left-8 px-3 py-1 rounded-full text-xs font-heading font-bold"
                  style={{ backgroundColor: `${pilar.color}20`, color: pilar.color }}
                >
                  {pilar.numero}
                </div>

                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${pilar.color}15` }}
                >
                  <pilar.icon className="w-7 h-7" style={{ color: pilar.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {pilar.titulo}
                </h3>
                <p className="text-sm font-body text-white/50 mb-4">
                  {pilar.subtitulo}
                </p>
                <p className="text-white/60 font-body leading-relaxed">
                  {pilar.descripcion}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Microcopy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center mt-12"
          >
            <p className="text-white/40 font-body flex items-center justify-center gap-2">
              <Users className="w-4 h-4" />
              Diseñado para líderes: entendible, accionable y escalable.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
