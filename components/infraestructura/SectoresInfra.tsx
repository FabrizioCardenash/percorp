'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Home, ShoppingBag, Building2, HardHat, TrendingUp } from 'lucide-react'

const sectores = [
  {
    icon: Home,
    titulo: 'Residencial & multifamiliar',
    descripcion: 'Proyectos de vivienda con comunidad y confort.',
  },
  {
    icon: ShoppingBag,
    titulo: 'Comercial & retail',
    descripcion: 'Espacios comerciales que maximizan experiencia del cliente.',
  },
  {
    icon: Building2,
    titulo: 'Corporativa & oficinas',
    descripcion: 'Espacios de trabajo eficientes, funcionales y tecnológicos.',
  },
  {
    icon: HardHat,
    titulo: 'Arquitectura & construcción',
    descripcion: 'Diseño y construcción según necesidades del cliente.',
  },
  {
    icon: TrendingUp,
    titulo: 'Inversión inmobiliaria',
    descripcion: 'Asesoría para alto retorno sostenible.',
  },
]

export default function SectoresInfra() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="sectores" ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#7800FF]/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#7800FF] font-body text-sm tracking-widest uppercase mb-4"
          >
            Dónde operamos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold"
          >
            Sectores en los que operamos
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sectores.map((sector, index) => (
            <motion.div
              key={sector.titulo}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#7800FF]/40 hover:bg-white/10 transition-all duration-300 ${
                index === 4 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className="p-3 bg-[#7800FF]/10 rounded-xl w-fit mb-4 group-hover:bg-[#7800FF]/20 transition-colors">
                <sector.icon className="w-6 h-6 text-[#7800FF]" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2 group-hover:text-[#7800FF] transition-colors">
                {sector.titulo}
              </h3>
              <p className="text-white/60 font-body text-sm">
                {sector.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

