'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Search, PenTool, Hammer, Settings } from 'lucide-react'

const pasos = [
  {
    numero: '01',
    icon: Search,
    titulo: 'Discover',
    subtitulo: 'Diagnóstico',
    descripcion: 'Medimos, mapeamos criticidad y construimos el business case.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    numero: '02',
    icon: PenTool,
    titulo: 'Design',
    subtitulo: 'Ingeniería',
    descripcion: 'Diseñamos solución, presupuesto, cronograma, riesgos y plan de seguridad.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    numero: '03',
    icon: Hammer,
    titulo: 'Build',
    subtitulo: 'Implementación',
    descripcion: 'Ejecución controlada: calidad, seguridad, pruebas, documentación "as-built".',
    color: 'from-[#FFC700] to-orange-500',
  },
  {
    numero: '04',
    icon: Settings,
    titulo: 'Operate',
    subtitulo: 'Operación & Performance',
    descripcion: 'Monitoreo, O&M, optimización continua y reportes de desempeño.',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Metodologia() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="metodologia" ref={ref} className="relative py-24 md:py-32 bg-white text-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-amber-600 font-body text-sm tracking-widest uppercase mb-4"
          >
            Cómo Trabajamos
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Nuestra metodología:<br />
            <span className="text-amber-600">Design–Build–Operate</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, index) => (
            <motion.div
              key={paso.titulo}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Connector line (hidden on last item) */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300" />
              )}

              <div className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                {/* Número */}
                <span className="absolute -top-4 -right-2 text-6xl font-heading font-bold text-gray-100">
                  {paso.numero}
                </span>

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${paso.color} mb-4`}>
                  <paso.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-black mb-1">
                  {paso.titulo}
                </h3>
                <p className="text-amber-600 font-body text-sm mb-3">{paso.subtitulo}</p>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cierre con promesa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 max-w-2xl">
            <p className="text-lg md:text-xl font-body text-gray-800 italic">
              "Sin data no hay mejora. Sin operación no hay sostenibilidad del resultado."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


