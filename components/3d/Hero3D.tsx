'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

// Lazy load the 3D scene
const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </div>
  ),
})

export default function Hero3D() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3D Background */}
      <Scene />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight text-white mb-6">
              Un holding diseñado para construir el futuro de las empresas.
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Integramos infraestructura inteligente, tecnología empresarial y ejecución de clase mundial 
            para acelerar el crecimiento de organizaciones que necesitan escalar sin fricción.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium font-body text-black bg-white hover:bg-gray-100 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
            >
              Contactar a Dirección Corporativa
            </a>
            <a 
              href="#empresas" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium font-body text-white bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 rounded-lg"
            >
              Conocer nuestras empresas
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <span className="text-white/40 text-sm font-body mb-3">Scroll</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                <motion.div 
                  className="w-1 h-3 bg-white/50 rounded-full"
                  animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

