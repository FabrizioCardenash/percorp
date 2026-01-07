'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import Image from 'next/image'

export default function NuestroModelo() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="modelo" className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* Estrella decorativa */}
      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        animate={isInView ? { opacity: 1, rotate: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 right-8 md:top-12 md:right-12"
      >
        <svg 
          width="60" 
          height="60" 
          viewBox="0 0 100 100" 
          fill="white"
          className="md:w-20 md:h-20"
        >
          <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
        </svg>
      </motion.div>

      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Título principal */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6"
          >
            NUESTRO MODELO
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-body tracking-[0.2em] text-white/90 mb-16 md:mb-20"
          >
            DESIGN — BUILD — OPERATE PARA EL ÉXITO
          </motion.p>

          {/* Imagen principal con las tres esferas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-5xl mx-auto mb-16 md:mb-20"
          >
            <div className="relative w-full aspect-[3/1]">
              <Image
                src="/imagenes web/work percorp.png"
                alt="Design - Build - Operate"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Texto explicativo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm md:text-base text-white/70 font-body leading-relaxed max-w-4xl italic"
          >
            El modelo Design – Build – Operate de PERCORP está diseñado para impulsar el crecimiento de las empresas. 
            Comenzamos con un diseño estratégico, seguido por la construcción de soluciones físicas y digitales listas 
            para operar. Finalmente, garantizamos una operación continua con gobernanza y un PMO de clase mundial que 
            asegura la calidad y eficiencia en cada etapa.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
