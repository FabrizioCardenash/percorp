'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import DisplayCards from '@/components/ui/display-cards'
import { Zap, Globe, Settings, Leaf } from 'lucide-react'

export default function Filosofia() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const corrientesCards = [
    {
      icon: <Zap className="size-5 text-yellow-300" />,
      title: "Energía",
      description: "Recursos, talento y capacidad de ejecución",
      date: "Corriente #1",
      iconClassName: "bg-yellow-600/80",
      titleClassName: "text-yellow-400",
      className: "[grid-area:stack] hover:-translate-y-6",
    },
    {
      icon: <Globe className="size-5 text-cyan-300" />,
      title: "Conectividad",
      description: "Flujos, redes e integración entre sistemas y espacios",
      date: "Corriente #2",
      iconClassName: "bg-cyan-600/80",
      titleClassName: "text-cyan-400",
      className: "[grid-area:stack] translate-x-12 translate-y-10 hover:translate-y-4",
    },
    {
      icon: <Settings className="size-5 text-purple-300" />,
      title: "Automatización",
      description: "Eficiencia operativa, precisión y reducción de fricción",
      date: "Corriente #3",
      iconClassName: "bg-purple-600/80",
      titleClassName: "text-purple-400",
      className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-14",
    },
    {
      icon: <Leaf className="size-5 text-green-300" />,
      title: "Sostenibilidad",
      description: "Decisiones responsables, escalables y orientadas al largo plazo",
      date: "Corriente #4",
      iconClassName: "bg-green-600/80",
      titleClassName: "text-green-400",
      className: "[grid-area:stack] translate-x-36 translate-y-[7.5rem] hover:translate-y-24",
    },
  ]

  return (
    <section id="filosofia" className="relative py-20 md:py-28 lg:py-32 bg-black text-white overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[600px]">
          
          {/* Columna izquierda - Títulos */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4"
            >
              ADN del Holding
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-8"
            >
              Las 4 Corrientes
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-white/60 font-body leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Nuestra propuesta se articula sobre cuatro fuerzas que sostienen a cualquier empresa moderna y guían nuestra arquitectura empresarial.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-white/40 font-body mt-6 italic"
            >
              Haz click en cada tarjeta para ver más detalles.
            </motion.p>
          </motion.div>

          {/* Columna derecha - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="scale-[0.75] sm:scale-[0.85] md:scale-90 lg:scale-100 -mr-8 lg:-mr-16">
              <DisplayCards cards={corrientesCards} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
