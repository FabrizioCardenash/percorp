'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Eye, Shield, TrendingDown, ArrowRight } from 'lucide-react'

const casos = [
  {
    icon: Eye,
    titulo: 'Visibilidad y control por zonas',
    problema: 'Consumo sin trazabilidad.',
    solucion: 'Submetering + dashboard + rutinas.',
    resultado: 'Gestión por datos + oportunidades priorizadas.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    titulo: 'Continuidad en cargas críticas',
    problema: 'Riesgo de interrupción.',
    solucion: 'Rediseño + respaldo + pruebas.',
    resultado: 'Reducción del riesgo operacional.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: TrendingDown,
    titulo: 'Optimización de demanda y penalidades',
    problema: 'Costos por picos/penalidades.',
    solucion: 'Quick wins + control + ajuste.',
    resultado: 'Mejor control del OPEX energético.',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Casos() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="casos" ref={ref} className="relative py-24 md:py-32 bg-white text-black overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-amber-600 font-body text-sm tracking-widest uppercase mb-4"
          >
            Casos de Éxito
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Resultados que se gestionan,{' '}
            <span className="text-amber-600">no que se prometen</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {casos.map((caso, index) => (
            <motion.div
              key={caso.titulo}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Header con gradiente */}
              <div className={`bg-gradient-to-r ${caso.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <caso.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {caso.titulo}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs text-gray-500 font-body uppercase tracking-wider mb-1">Problema</p>
                  <p className="text-gray-800 font-body">{caso.problema}</p>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 font-body uppercase tracking-wider mb-1">Solución</p>
                  <p className="text-gray-800 font-body">{caso.solucion}</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-body uppercase tracking-wider mb-1">Resultado</p>
                  <p className="text-amber-600 font-body font-semibold">{caso.resultado}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-body font-medium rounded-lg hover:bg-gray-800 transition-colors group"
          >
            Quiero resultados similares
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Nota para dev */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center text-gray-400 text-xs font-body mt-8"
        >
          * Métricas específicas disponibles bajo solicitud con casos reales documentados.
        </motion.p>
      </div>
    </section>
  )
}

