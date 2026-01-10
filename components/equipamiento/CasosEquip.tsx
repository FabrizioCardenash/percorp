'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Users, Laptop, RefreshCw } from 'lucide-react'

const cases = [
  {
    icon: Users,
    title: 'Sala híbrida ejecutiva',
    description: 'Habilitación de sala lista para directorio con integración Teams/Zoom, audio premium y cámara PTZ.',
    tags: ['AV/UC', 'Directorio', 'Híbrido'],
  },
  {
    icon: Laptop,
    title: 'Estandarización de laptops',
    description: 'Perfiles por rol (operación/analítica/gestión) con imaging, configuración y despliegue coordinado.',
    tags: ['Procurement', 'Imaging', 'Perfiles'],
  },
  {
    icon: RefreshCw,
    title: 'Renovación tecnológica',
    description: 'Refresh por olas con mínima interrupción operativa, retiro de equipos y documentación completa.',
    tags: ['Refresh', 'Ciclo de vida', 'PMO'],
  },
]

export default function CasosEquip() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="casos" ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#FF6B00] font-body text-sm tracking-widest uppercase mb-4"
          >
            Casos de uso
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            Ejemplos de{' '}
            <span className="text-[#FF6B00]">implementación</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FF6B00]/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B00]/20 transition-colors">
                  <caseItem.icon className="w-7 h-7 text-[#FF6B00]" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
                  {caseItem.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-body rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

