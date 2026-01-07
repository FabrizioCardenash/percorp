'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, BarChart3, ArrowRight } from 'lucide-react'

const bullets = [
  {
    icon: Zap,
    title: 'Ahorro verificable',
    description: 'Eficiencia, demanda máxima, factor de potencia y calidad de energía.',
  },
  {
    icon: Shield,
    title: 'Resiliencia operacional',
    description: 'Continuidad para cargas críticas y reducción de incidentes.',
  },
  {
    icon: BarChart3,
    title: 'Control digital',
    description: 'Submetering + dashboards + automatización para decisiones en tiempo real.',
  },
]

export default function EnergiaHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-28">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Animated glow */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom min-h-screen flex flex-col justify-center py-20">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-body text-amber-400">PERCORP Energía</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-8 leading-tight"
          >
            Energía inteligente para operar{' '}
            <span className="text-amber-400">sin interrupciones</span>{' '}
            y con costos bajo control.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-body mb-12 max-w-3xl leading-relaxed"
          >
            Diseñamos e implementamos infraestructura eléctrica, medición avanzada y optimización 
            energética con enfoque llave en mano. Convertimos consumo y continuidad en una ventaja 
            competitiva: OPEX menor, resiliencia mayor, data accionable.
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
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-400/30 transition-colors"
              >
                <div className="p-2 bg-amber-400/10 rounded-lg">
                  <bullet.icon className="w-5 h-5 text-amber-400" />
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-black bg-amber-400 hover:bg-amber-300 transition-all duration-300 rounded-lg shadow-lg hover:shadow-amber-400/20 hover:shadow-xl group"
            >
              Solicitar diagnóstico
              <span className="text-sm text-black/60">(30–60 min)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#metodologia"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 rounded-lg"
            >
              Hablar con un especialista
            </a>
          </motion.div>
        </div>

        {/* Visual element - Abstract dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px]"
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-white/40 font-body">Dashboard Energético</span>
            </div>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black/30 rounded-lg p-4">
                <p className="text-xs text-white/50 font-body mb-1">Consumo Actual</p>
                <p className="text-2xl font-heading font-bold text-amber-400">847 kWh</p>
                <p className="text-xs text-green-400 font-body">↓ 12% vs mes anterior</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <p className="text-xs text-white/50 font-body mb-1">Demanda Máxima</p>
                <p className="text-2xl font-heading font-bold text-white">124 kW</p>
                <p className="text-xs text-amber-400 font-body">Dentro del límite</p>
              </div>
            </div>
            
            {/* Chart placeholder */}
            <div className="bg-black/30 rounded-lg p-4 h-32 flex items-end gap-1">
              {[40, 65, 45, 80, 55, 70, 60, 75, 50, 85, 65, 55].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-amber-400 to-amber-400/50 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            
            {/* Status */}
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-white/50 font-body">Última actualización: hace 2 min</span>
              <span className="flex items-center gap-1 text-green-400 font-body">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                En línea
              </span>
            </div>
          </div>
        </motion.div>
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
              className="w-1 h-3 bg-amber-400 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

