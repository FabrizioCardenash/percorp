'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Eye, Target, Shield } from 'lucide-react'

const principios = [
  {
    icon: Eye,
    titulo: 'Visión',
    descripcion: 'Ser líder en desarrollo inmobiliario eficiente y sostenible.',
  },
  {
    icon: Target,
    titulo: 'Misión',
    descripcion: 'Desarrollar proyectos maximizando la inversión y la calidad.',
  },
  {
    icon: Shield,
    titulo: 'Valores',
    descripcion: 'Rigor técnico y transparencia.',
  },
]

export default function Nosotros() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="nosotros" ref={ref} className="relative py-24 md:py-32 bg-white text-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-[#7800FF]/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#7800FF] font-body text-sm tracking-widest uppercase mb-4"
            >
              Quiénes Somos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Nosotros
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 font-body leading-relaxed mb-8"
            >
              Somos una firma orientada a ejecutar proyectos con rigor técnico y transparencia, 
              aplicando estándares en cada etapa para asegurar resultados de alto nivel.
            </motion.p>
          </div>

          {/* Principios rectores */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-heading font-semibold mb-6 text-gray-800">Principios rectores</h3>
            <div className="space-y-4">
              {principios.map((principio, index) => (
                <motion.div
                  key={principio.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-xl hover:border-[#7800FF]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 bg-[#7800FF] rounded-xl">
                    <principio.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-black mb-1">{principio.titulo}</h4>
                    <p className="text-gray-600 font-body text-sm">{principio.descripcion}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

