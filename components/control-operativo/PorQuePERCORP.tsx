'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { 
  MessageSquare, 
  Settings, 
  Zap, 
  Minimize2,
  Rocket
} from 'lucide-react'

const diferenciadores = [
  {
    icon: MessageSquare,
    titulo: 'Hablamos tu idioma',
    subtitulo: 'Negocio primero',
    descripcion: 'Sin tecnicismos. Traducimos tu realidad a control y ejecución.',
  },
  {
    icon: Settings,
    titulo: 'Gerenciamos la solución',
    subtitulo: 'No solo implementamos',
    descripcion: 'Dejamos operando con reglas, responsables y cadencia.',
  },
  {
    icon: Zap,
    titulo: 'Agilidad con robustez',
    subtitulo: 'Método probado',
    descripcion: 'Avances semanales, prioridades claras, control de cambios y cierre formal.',
  },
  {
    icon: Minimize2,
    titulo: 'Minimalismo efectivo',
    subtitulo: 'Menos es más',
    descripcion: 'Menos "cosas". Más impacto. Priorizamos lo que mueve el negocio.',
  },
  {
    icon: Rocket,
    titulo: 'Preparado para el futuro',
    subtitulo: 'Base sólida',
    descripcion: 'Una base sólida para escalar indicadores, automatizaciones y mejoras sin rehacer todo.',
  },
]

export default function PorQuePERCORP() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section className="relative py-24 md:py-32 bg-[#080810] overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
      
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
              className="text-purple-400 font-body text-sm uppercase tracking-widest mb-4"
            >
              Por qué PERCORP
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white"
            >
              Diseñado para resultados.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Ejecutado con método.
              </span>
            </motion.h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciadores.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className={`group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-purple-500/20 transition-all ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 group-hover:bg-purple-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                
                <h3 className="text-lg font-heading font-bold text-white mb-1">
                  {item.titulo}
                </h3>
                <p className="text-sm text-purple-300/60 font-body mb-3">
                  {item.subtitulo}
                </p>
                <p className="text-white/50 font-body leading-relaxed">
                  {item.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
