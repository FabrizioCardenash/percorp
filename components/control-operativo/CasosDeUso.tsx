'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { 
  Package, 
  DollarSign, 
  AlertCircle, 
  Timer
} from 'lucide-react'

const casos = [
  {
    icon: Package,
    titulo: 'Inventarios & Compras',
    problemas: 'Rotación, quiebres, mermas, compras sin planificación, diferencias de cierre.',
    color: '#00F5D4',
  },
  {
    icon: DollarSign,
    titulo: 'Ventas & Margen',
    problemas: 'Ventas sin rentabilidad, mix poco claro, costos que suben sin explicación.',
    color: '#FBBF24',
  },
  {
    icon: AlertCircle,
    titulo: 'Incidentes, Servicio & Calidad',
    problemas: 'Reclamos, reprocesos, tiempos de atención, problemas repetidos.',
    color: '#FF6B6B',
  },
  {
    icon: Timer,
    titulo: 'Productividad & Tiempos',
    problemas: 'Cuellos de botella, baja visibilidad, baja disciplina de ejecución.',
    color: '#A78BFA',
  },
]

export default function CasosDeUso() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="casos-uso" className="relative py-24 md:py-32 bg-[#0A0A0F] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#00F5D4]/5 rounded-full blur-[150px]" />
      
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
              Casos de uso
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white"
            >
              Casos típicos donde el control{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#00B4D8]">
                genera impacto inmediato
              </span>
            </motion.h2>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {casos.map((caso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all overflow-hidden"
              >
                {/* Accent line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: caso.color }}
                />
                
                <div className="flex items-start gap-5">
                  <div 
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${caso.color}15` }}
                  >
                    <caso.icon className="w-7 h-7" style={{ color: caso.color }} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                      {caso.titulo}
                    </h3>
                    <p className="text-white/50 font-body leading-relaxed">
                      {caso.problemas}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-white/70 font-body">
              Si tu negocio lo sufre, se puede medir.{' '}
              <span className="text-[#00F5D4]">Si se puede medir, se puede mejorar.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

