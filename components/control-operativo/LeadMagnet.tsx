'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FileCheck, Clock, Zap, ArrowRight } from 'lucide-react'

export default function LeadMagnet() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="checklist" className="relative py-24 md:py-32 bg-[#080810] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-[#00F5D4]/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-3xl overflow-hidden">
            {/* Decorative element */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px]" />
            
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
              <FileCheck className="w-8 h-8 text-purple-400" />
            </div>

            {/* Content */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Checklist gratuito:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                "¿Qué tan controlada está tu operación?"
              </span>
            </h2>

            <p className="text-lg text-white/60 font-body mb-8">
              10 preguntas, 3 minutos. Identifica si estás perdiendo control, margen o tiempo.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/50 text-sm font-body">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Solo 3 minutos</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm font-body">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Resultados inmediatos</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-white bg-purple-500 hover:bg-purple-600 transition-all duration-300 rounded-xl shadow-lg shadow-purple-500/20"
              >
                Recibir checklist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-white/40 text-sm font-body">
                Te lo enviamos al instante. Sin spam.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
