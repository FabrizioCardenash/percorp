'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { 
  Search, 
  BarChart3, 
  RefreshCcw, 
  Zap,
  TrendingUp,
  Eye
} from 'lucide-react'

const pasos = [
  {
    numero: '01',
    icon: Search,
    titulo: 'Diagnóstico',
    descripcion: 'Identificamos fugas, fricciones y prioridades. Definimos qué medir y para qué.',
  },
  {
    numero: '02',
    icon: BarChart3,
    titulo: 'Control inicial',
    descripcion: 'Tablero v1 + definiciones + responsables. Un número confiable.',
  },
  {
    numero: '03',
    icon: RefreshCcw,
    titulo: 'Rutina de gestión',
    descripcion: 'Cadencia semanal: acciones, seguimiento, mejora continua.',
  },
  {
    numero: '04',
    icon: Zap,
    titulo: 'Automatización',
    descripcion: 'Alertas y flujos sobre procesos críticos para reducir errores y tiempos.',
  },
  {
    numero: '05',
    icon: TrendingUp,
    titulo: 'Escala (opcional)',
    descripcion: 'Backlog mensual de mejoras: nuevos KPIs, automatizaciones y optimización.',
  },
]

export default function ComoTrabajamos() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="como-trabajamos" className="relative py-24 md:py-32 bg-[#080810] overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00F5D4]/5 rounded-full blur-[150px] -translate-y-1/2" />
      
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
              Cómo trabajamos
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white"
            >
              Simple. Rápido.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#00B4D8]">
                Controlado.
              </span>
            </motion.h2>
          </div>

          {/* Steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00F5D4]/50 via-[#00F5D4]/20 to-transparent hidden md:block" />
            
            <div className="space-y-8">
              {pasos.map((paso, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all ${
                      index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
                    } md:max-w-sm`}>
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className="w-10 h-10 rounded-lg bg-[#00F5D4]/10 flex items-center justify-center md:hidden">
                          <paso.icon className="w-5 h-5 text-[#00F5D4]" />
                        </div>
                        <span className="text-[#00F5D4] text-sm font-heading font-bold">
                          Paso {paso.numero}
                        </span>
                      </div>
                      <h3 className="text-lg font-heading font-bold text-white mb-2">
                        {paso.titulo}
                      </h3>
                      <p className="text-white/50 font-body text-sm leading-relaxed">
                        {paso.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* Center icon (desktop) */}
                  <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-[#0A0A0F] border-2 border-[#00F5D4]/30 z-10 flex-shrink-0">
                    <paso.icon className="w-6 h-6 text-[#00F5D4]" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Microcopy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center mt-12"
          >
            <p className="text-white/40 font-body flex items-center justify-center gap-2">
              <Eye className="w-4 h-4" />
              Transparencia total: avances, decisiones y próximos pasos siempre visibles.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

