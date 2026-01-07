'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { GradualSpacing } from '@/components/ui/gradual-spacing'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setCanPlay(true)
      video.play().catch(() => {})
    }

    video.addEventListener('canplay', handleCanPlay)
    video.load()

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  // Calcular delay: 62 caracteres * 0.04 = ~2.5 segundos para la animación
  const textAnimationDuration = 3

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Placeholder mientras carga */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          canPlay ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 flex items-center justify-center gap-20 opacity-60">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-600 blur-xl animate-pulse" />
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-magenta-600 blur-xl animate-pulse" 
               style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Video Background */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${
        canPlay ? 'opacity-100' : 'opacity-0'
      }`}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Abstract_Technical_Animation_Logo_Formation.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay gradient - más fuerte en la parte inferior para el texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none z-10" />

      {/* Content - posicionado en la parte inferior */}
      <div className="relative z-20 min-h-screen flex flex-col justify-end px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <GradualSpacing
              text="Un holding diseñado para construir el futuro de las empresas"
              duration={0.5}
              delayMultiple={0.03}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white [text-shadow:_0_2px_20px_rgb(0_0_0_/_90%),_0_4px_40px_rgb(0_0_0_/_70%)]"
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-100 leading-relaxed max-w-4xl mx-auto font-body [text-shadow:_0_2px_15px_rgb(0_0_0_/_80%)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: textAnimationDuration }}
          >
            Integramos infraestructura inteligente, tecnología empresarial y ejecución de clase mundial 
            para acelerar el crecimiento de organizaciones que necesitan escalar sin fricción.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: textAnimationDuration + 0.3 }}
          >
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium font-body text-black bg-white hover:bg-gray-100 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contactar a Dirección Corporativa
            </a>
            <a 
              href="#empresas" 
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium font-body text-white bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 rounded-lg hover:scale-105"
            >
              Conocer nuestras empresas
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
