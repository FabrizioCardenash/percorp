'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, Play } from 'lucide-react'

export default function ControlHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0F] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00F5D4]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iIzFhMWExYSIgZmlsbC1vcGFjaXR5PSIuMyIvPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-[#00F5D4] rounded-full animate-pulse" />
            <span className="text-sm font-body text-white/70">Sistema de Control Operativo</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Control real para tu negocio.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#00B4D8]">
              Menos sorpresas.
            </span>{' '}
            Mejores decisiones.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-3xl mx-auto font-body"
          >
            Implementamos un Sistema de Control Operativo basado en datos y automatización 
            para que puedas ver, decidir y ejecutar con claridad: inventarios, costos, ventas, 
            incidentes, calidad y productividad.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12"
          >
            {[
              'Un solo número confiable para gestionar',
              'Rutina simple que sostiene resultados',
              'Automatización que reduce errores'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white/70">
                <CheckCircle2 className="w-5 h-5 text-[#00F5D4] flex-shrink-0" />
                <span className="text-sm font-body">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-black bg-[#00F5D4] hover:bg-[#00D4B8] transition-all duration-300 rounded-xl shadow-lg shadow-[#00F5D4]/20 hover:shadow-[#00F5D4]/30"
            >
              Solicitar Diagnóstico Express
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solucion"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl"
            >
              <Play className="w-5 h-5" />
              Ver cómo funciona
            </a>
          </motion.div>

          {/* Microcopy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-white/40 text-sm font-body"
          >
            <Clock className="w-4 h-4" />
            <span>Respuesta en menos de 24 horas hábiles. Sin compromiso.</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          >
            <motion.div 
              className="w-1 h-2 bg-white/40 rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
