'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Building, PenTool, Hammer, ClipboardList, Calculator, Lightbulb, ArrowRight } from 'lucide-react'

const servicios = [
  {
    icon: Building,
    titulo: 'Desarrollo inmobiliario',
    descripcion: 'Evaluación de terrenos y estudios de mercado.',
  },
  {
    icon: PenTool,
    titulo: 'Arquitectura & diseño',
    descripcion: 'Proyectos integrales orientados a la eficiencia.',
  },
  {
    icon: Hammer,
    titulo: 'Construcción & ejecución',
    descripcion: 'Control de calidad y gestión de contratos.',
  },
  {
    icon: ClipboardList,
    titulo: 'Gestión de proyectos',
    descripcion: 'Planificación y control eficiente de proyectos.',
  },
  {
    icon: Calculator,
    titulo: 'Consultoría técnica',
    descripcion: 'Optimización de costos y evaluación de riesgos.',
  },
  {
    icon: Lightbulb,
    titulo: 'Consultoría estratégica',
    descripcion: 'Asesoría a inversionistas en decisiones técnicas.',
  },
]

export default function Servicios() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="servicios" ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#7800FF]/10 via-black to-black" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#7800FF] font-body text-sm tracking-widest uppercase mb-4"
          >
            Nuestros Servicios
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Nuestros servicios
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.titulo}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#7800FF]/40 transition-all duration-300"
            >
              <div className="p-3 bg-[#7800FF]/10 rounded-xl w-fit mb-4 group-hover:bg-[#7800FF]/20 transition-colors">
                <servicio.icon className="w-6 h-6 text-[#7800FF]" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2 group-hover:text-[#7800FF] transition-colors">
                {servicio.titulo}
              </h3>
              <p className="text-white/60 font-body text-sm">
                {servicio.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-white/50 font-body text-sm mb-8 text-center"
        >
          Desarrollamos proyectos a partir de las necesidades tecnológicas de cada cliente.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#7800FF] font-body font-medium hover:text-[#9933FF] transition-colors group"
          >
            Cuéntanos tu proyecto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

