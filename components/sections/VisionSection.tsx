'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import { ArrowRight } from 'lucide-react'

export default function VisionSection() {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="relative min-h-[80vh] w-full overflow-hidden bg-black flex items-center">
      {/* Imagen de fondo - entra desde la izquierda */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-start overflow-hidden"
        initial={{ x: '-100%', opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="relative w-[95%] h-full">
          <Image
            src="/imagenes web/hero upgrade.png"
            alt="PERCORP Vision"
            fill
            className="object-cover object-left"
            quality={90}
          />
        </div>
      </motion.div>

      {/* Contenido - posicionado en el círculo negro */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm ml-[28%] md:ml-[33%] lg:ml-[35%] text-center">
          <motion.p
            className="text-sm md:text-base lg:text-lg uppercase tracking-[0.2em] text-gray-300 font-body leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Integramos infraestructura inteligente, tecnología empresarial y ejecución de clase mundial para acelerar el crecimiento de organizaciones que necesitan escalar sin fricción.
          </motion.p>
        </div>
      </div>

      {/* Botón CONOCE MÁS en esquina inferior derecha */}
      <motion.div 
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <a 
          href="#quienes-somos" 
          className="flex items-center gap-3 text-white font-body text-sm tracking-widest hover:text-gray-300 transition-colors group"
        >
          <span>CONOCE MÁS</span>
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </a>
      </motion.div>
    </section>
  )
}
