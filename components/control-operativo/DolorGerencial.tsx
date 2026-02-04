'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { 
  PackageX, 
  TrendingDown, 
  FileSpreadsheet, 
  AlertTriangle,
  Users,
  HelpCircle
} from 'lucide-react'

const sintomas = [
  {
    icon: PackageX,
    text: '"El inventario no cuadra" y cada cierre es una discusión.',
  },
  {
    icon: TrendingDown,
    text: 'Las ventas se mueven, pero el margen no aparece.',
  },
  {
    icon: FileSpreadsheet,
    text: 'Reportes manuales que consumen tiempo y no generan acción.',
  },
  {
    icon: AlertTriangle,
    text: 'Incidentes, reclamos y retrasos que se repiten sin causa raíz.',
  },
  {
    icon: Users,
    text: 'Dependencia de 1–2 personas ("solo ellos saben").',
  },
  {
    icon: HelpCircle,
    text: 'Decisiones importantes con intuición porque no hay visibilidad.',
  },
]

export default function DolorGerencial() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0F] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#FF6B6B] font-body text-sm uppercase tracking-widest mb-4"
            >
              ¿Te suena familiar?
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            >
              Cuando la operación crece,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-orange-400">
                el control no escala solo.
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60 max-w-2xl mx-auto font-body"
            >
              La mayoría de empresas no tiene un problema de esfuerzo. Tiene un problema de 
              control operacional: la información llega tarde, los procesos dependen de personas 
              y los problemas se repiten.
            </motion.p>
          </div>

          {/* Symptoms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {sintomas.map((sintoma, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] hover:border-white/10 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FF6B6B]/10 flex items-center justify-center group-hover:bg-[#FF6B6B]/20 transition-colors">
                  <sintoma.icon className="w-5 h-5 text-[#FF6B6B]" />
                </div>
                <p className="text-white/70 font-body leading-relaxed pt-2">
                  {sintoma.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-white font-body">
              Eso se corrige con un sistema mínimo:{' '}
              <span className="text-[#00F5D4] font-medium">medir → decidir → ejecutar → sostener.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
