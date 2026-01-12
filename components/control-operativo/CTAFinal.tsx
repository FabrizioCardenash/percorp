'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ArrowRight, FileCheck } from 'lucide-react'

export default function CTAFinal() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0F] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00F5D4]/10 to-transparent rounded-full blur-[100px]" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Si hoy tu operación depende de intuición,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-orange-400">
              mañana te cuesta crecimiento.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 font-body mb-10 max-w-2xl mx-auto"
          >
            Recupera control con un sistema simple: tablero, rutina y automatización.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-black bg-[#00F5D4] hover:bg-[#00D4B8] transition-all duration-300 rounded-xl shadow-lg shadow-[#00F5D4]/20 hover:shadow-[#00F5D4]/30"
            >
              Solicitar Diagnóstico Express
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#checklist"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-white hover:text-[#00F5D4] transition-all duration-300"
            >
              <FileCheck className="w-5 h-5" />
              Recibir Checklist
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

