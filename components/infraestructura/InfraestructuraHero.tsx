'use client'

import { motion } from 'framer-motion'
import { Building2, TrendingDown, Eye, ArrowRight } from 'lucide-react'
import { Waves } from '@/components/ui/wave-background'

const bullets = [
  {
    icon: Building2,
    title: 'Control integral',
    description: 'Integración fluida entre diseño y construcción, con foco en calidad, presupuesto y plazo.',
  },
  {
    icon: TrendingDown,
    title: 'Reducción de costos',
    description: 'Optimización de recursos y coordinación eficiente para reducir costos indirectos sin comprometer calidad.',
  },
  {
    icon: Eye,
    title: 'Transparencia',
    description: 'Claridad en costos, avances y decisiones durante todo el ciclo del proyecto.',
  },
]

export default function InfraestructuraHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-20">
      {/* Waves Background */}
      <Waves 
        strokeColor="#7800FF"
        backgroundColor="#000000"
        className="opacity-60"
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 container-custom min-h-screen flex flex-col justify-center py-20">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#7800FF]/10 border border-[#7800FF]/30 rounded-full mb-8 backdrop-blur-sm"
          >
            <Building2 className="w-4 h-4 text-[#7800FF]" />
            <span className="text-sm font-body text-[#7800FF]">PERCORP Infraestructura</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-8 leading-tight"
          >
            Arquitectura, construcción y gestión de proyectos para{' '}
            <span className="text-[#7800FF]">habilitar espacios</span>{' '}
            con estándar corporativo.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-body mb-12 max-w-3xl leading-relaxed"
          >
            PERCORP es una firma especializada en arquitectura, construcción y gestión de proyectos 
            inmobiliarios, ofreciendo soluciones integrales para maximizar la inversión y garantizar la calidad.
          </motion.p>

          {/* Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {bullets.map((bullet, index) => (
              <motion.div
                key={bullet.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#7800FF]/30 transition-colors"
              >
                <div className="p-2 bg-[#7800FF]/10 rounded-lg">
                  <bullet.icon className="w-5 h-5 text-[#7800FF]" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-1">{bullet.title}</h3>
                  <p className="text-sm text-white/60 font-body">{bullet.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-white bg-[#7800FF] hover:bg-[#6200cc] transition-all duration-300 rounded-lg shadow-lg hover:shadow-[#7800FF]/20 hover:shadow-xl group"
            >
              Solicitar diagnóstico
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 rounded-lg"
            >
              Agendar visita técnica
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-white/50 text-sm font-body mb-3">Descubre más</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-3 bg-[#7800FF] rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
