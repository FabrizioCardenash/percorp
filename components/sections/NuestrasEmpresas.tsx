'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import Image from 'next/image'

export default function NuestrasEmpresas() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="empresas" className="relative py-0 bg-black overflow-hidden">
      <div className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Grid de dos columnas */}
          <div className="grid lg:grid-cols-2 min-h-[80vh]">
            
            {/* PERCORP Tecnología - Esfera Roja/Magenta */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group cursor-pointer overflow-hidden"
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]">
                  <Image
                    src="/imagenes web/rojo bg.png"
                    alt="PERCORP Tecnología"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
              
              {/* Contenido */}
              <div className="relative z-10 h-full min-h-[500px] lg:min-h-[80vh] flex items-center justify-center p-8">
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 tracking-tight">
                      PERCORP<span className="text-pink-400">_</span>
                    </h3>
                    <p className="text-lg md:text-xl font-body text-white/90 tracking-[0.3em] uppercase">
                      Tecnología
                    </p>
                  </motion.div>
                  
                  {/* Descripción en hover */}
                  <motion.div 
                    className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white/80 font-body max-w-sm mx-auto mb-6">
                      Tecnología empresarial diseñada para acelerar tu operación y tus decisiones.
                    </p>
                    <a 
                      href="/enterprise-technology" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all"
                    >
                      Ver empresa
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Línea divisoria central */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-1/2 bg-white/20 z-20" />

            {/* PERCORP Infraestructura - Esfera Azul/Cyan */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group cursor-pointer overflow-hidden"
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]">
                  <Image
                    src="/imagenes web/azul bg.png"
                    alt="PERCORP Infraestructura"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
              
              {/* Contenido */}
              <div className="relative z-10 h-full min-h-[500px] lg:min-h-[80vh] flex items-center justify-center p-8">
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 tracking-tight">
                      PERCORP<span className="text-cyan-400">_</span>
                    </h3>
                    <p className="text-lg md:text-xl font-body text-white/90 tracking-[0.3em] uppercase">
                      Infraestructura
                    </p>
                  </motion.div>
                  
                  {/* Descripción en hover */}
                  <motion.div 
                    className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white/80 font-body max-w-sm mx-auto mb-6">
                      Infraestructura inteligente para organizaciones que necesitan continuidad, eficiencia y estandarización.
                    </p>
                    <a 
                      href="/smart-infrastructure" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all"
                    >
                      Ver empresa
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
