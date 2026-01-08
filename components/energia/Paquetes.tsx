'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Clock, BarChart3, Shield, Check, ArrowRight } from 'lucide-react'

const paquetes = [
  {
    icon: Clock,
    nombre: 'Diagnóstico Energético Express',
    tiempo: '2–10 días',
    descripcion: 'Levantamiento técnico + análisis de recibos y perfil de carga.',
    features: [
      'Identificación de oportunidades y riesgos críticos',
      'Roadmap priorizado con ROI estimado',
    ],
    entregable: 'Reporte ejecutivo + plan de acción',
    destacado: false,
  },
  {
    icon: BarChart3,
    nombre: 'Submetering + Dashboard',
    tiempo: '3–6 semanas',
    descripcion: 'Diseño e instalación de medición por zonas/activos.',
    features: [
      'Panel ejecutivo (consumo, demanda, alarmas, tendencias)',
      'Gobierno de datos y rutinas de revisión mensual',
    ],
    entregable: 'Dashboard + manual operacional',
    destacado: true,
  },
  {
    icon: Shield,
    nombre: 'Resiliencia Crítica',
    tiempo: '4–10 semanas',
    descripcion: 'Diagnóstico de cargas críticas y puntos de falla.',
    features: [
      'Diseño/implementación de respaldo y automatismos',
      'Plan de mantenimiento y SLA',
    ],
    entregable: 'Ingeniería + implementación + plan O&M',
    destacado: false,
  },
]

export default function Paquetes() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="paquetes" ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-amber-400 font-body text-sm tracking-widest uppercase mb-4"
          >
            Paquetes Comerciales
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Tres formas de empezar
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {paquetes.map((paquete, index) => (
            <motion.div
              key={paquete.nombre}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                paquete.destacado 
                  ? 'bg-gradient-to-b from-amber-400/20 to-amber-400/5 border-2 border-amber-400/50' 
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {/* Badge para destacado */}
              {paquete.destacado && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-amber-400 text-black text-xs font-body font-semibold rounded-full">
                    Más popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl ${paquete.destacado ? 'bg-amber-400' : 'bg-white/10'} mb-6`}>
                <paquete.icon className={`w-6 h-6 ${paquete.destacado ? 'text-black' : 'text-amber-400'}`} />
              </div>

              {/* Header */}
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                {paquete.nombre}
              </h3>
              <p className="text-amber-400 font-body text-sm mb-4">{paquete.tiempo}</p>

              {/* Descripción */}
              <p className="text-white/60 font-body mb-6">
                {paquete.descripcion}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {paquete.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 font-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Entregable */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-white/40 font-body uppercase tracking-wider mb-1">Entregable</p>
                <p className="text-white font-body font-medium">{paquete.entregable}</p>
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium font-body rounded-lg transition-all duration-300 ${
                  paquete.destacado
                    ? 'bg-amber-400 text-black hover:bg-amber-300'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Solicitar cotización
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-white/50 font-body text-sm mt-12 max-w-2xl mx-auto"
        >
          * Los tiempos dependen del tamaño y complejidad del sitio. Trabajamos por alcance 
          definido y con gestión de cambios.
        </motion.p>
      </div>
    </section>
  )
}


