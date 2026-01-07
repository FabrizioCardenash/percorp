'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { AnimatedText } from '@/components/ui/animated-text'
import AnimatedGlowBox from '@/components/ui/animated-glow-box'

export default function QuienesSomos() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="quienes-somos" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Título animado */}
          <div className="mb-12">
            <AnimatedText 
              text="Quiénes Somos"
              as="h2"
              textClassName="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white"
              underlineGradient="from-cyan-500 via-blue-500 to-purple-500"
              underlineHeight="h-1.5"
              underlineOffset="-bottom-3"
              underlineClassName="rounded-full"
              duration={0.08}
              delay={0.05}
              replay={isInView}
            />
          </div>
          
          <div className="space-y-8 font-body">
            {/* Subtítulo destacado */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-heading font-semibold text-white leading-tight"
            >
              Especialistas en soluciones integradas de ingeniería, tecnología y gestión
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              En <strong className="text-white">PERCORP</strong>, lideramos el diseño, construcción y operación de soluciones inteligentes que transforman el futuro empresarial. Nuestro enfoque se centra en el talento joven y el pensamiento de diseño, creando espacios y plataformas digitales que optimizan cada operación.
            </motion.p>
            
            {/* Caja con efecto glow animado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <AnimatedGlowBox className="px-6 py-5 md:px-8 md:py-6">
                <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                  Como <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">growth partner</span>, ofrecemos soluciones personalizadas para un crecimiento sostenible y eficiente.
                </p>
              </AnimatedGlowBox>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
