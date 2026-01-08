'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Search, Compass, CalendarClock, HardHat, CheckCircle, ArrowRight } from 'lucide-react'

const pasos = [
  {
    numero: '01',
    icon: Search,
    titulo: 'Análisis & viabilidad',
    descripcion: 'Evaluación de terreno/regulaciones y viabilidad del proyecto.',
  },
  {
    numero: '02',
    icon: Compass,
    titulo: 'Diseño estratégico',
    descripcion: 'Diseño eficiente que maximiza el valor de inversión.',
  },
  {
    numero: '03',
    icon: CalendarClock,
    titulo: 'Planificación de construcción',
    descripcion: 'Presupuesto y cronograma detallado del proyecto.',
  },
  {
    numero: '04',
    icon: HardHat,
    titulo: 'Construcción & control',
    descripcion: 'Ejecución con calidad y seguridad garantizada.',
  },
  {
    numero: '05',
    icon: CheckCircle,
    titulo: 'Entrega & cierre',
    descripcion: 'Cumplimiento de requisitos y cierre formal.',
  },
]

export default function MetodologiaInfra() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="metodologia" ref={ref} className="relative py-24 md:py-32 bg-gray-50 text-black overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#7800FF] font-body text-sm tracking-widest uppercase mb-4"
          >
            Cómo trabajamos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold"
          >
            Metodología
          </motion.h2>
        </div>

        {/* Stepper */}
        <div className="relative">
          {/* Line connector (desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7800FF]/20 via-[#7800FF] to-[#7800FF]/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {pasos.map((paso, index) => (
              <motion.div
                key={paso.titulo}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative text-center"
              >
                {/* Número y círculo */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <span className="text-5xl font-heading font-bold text-gray-100 absolute -top-2 -left-4">
                    {paso.numero}
                  </span>
                  <div className="relative z-10 w-16 h-16 bg-white border-2 border-[#7800FF] rounded-full flex items-center justify-center shadow-lg">
                    <paso.icon className="w-7 h-7 text-[#7800FF]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-semibold text-black mb-2">
                  {paso.titulo}
                </h3>
                <p className="text-gray-600 font-body text-sm">
                  {paso.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#7800FF] text-white font-body font-medium rounded-lg hover:bg-[#6200cc] transition-colors group"
          >
            Solicitar diagnóstico
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

