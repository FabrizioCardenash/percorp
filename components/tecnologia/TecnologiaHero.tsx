'use client'

import { motion } from 'framer-motion'
import { Database, BarChart2, Shield, Zap, ArrowRight } from 'lucide-react'
import { Waves } from '@/components/ui/wave-background'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'

const features = [
  { icon: Database, text: 'Ingesta de múltiples fuentes' },
  { icon: Shield, text: 'Gobierno de datos' },
  { icon: BarChart2, text: 'KPIs ejecutivos' },
  { icon: Zap, text: 'Seguridad y trazabilidad' },
]

export default function TecnologiaHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-28">
      {/* Wave Background */}
      <div className="absolute inset-0 z-0">
        <Waves
          strokeColor="#103D96"
          backgroundColor="transparent"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />
      
      {/* Animated glow */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#103D96]/10 rounded-full blur-3xl z-[1]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom min-h-screen flex flex-col justify-center py-20 pointer-events-auto">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#103D96]/10 border border-[#103D96]/30 rounded-full mb-8"
          >
            <BarChart2 className="w-4 h-4 text-[#1E5BBF]" />
            <span className="text-sm font-body text-[#1E5BBF]">PERCORP Tecnología | Data Analytics</span>
          </motion.div>

          {/* H1 con animación */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-8 leading-tight">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 0.3,
              }}
              containerClassName="flex flex-wrap"
              elementLevelClassName="text-white"
            >
              Convierte cualquier dato en decisiones:
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              staggerFrom="last"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 0.9,
              }}
              containerClassName="flex flex-wrap"
              elementLevelClassName="text-[#1E5BBF]"
            >
              dashboards, analítica y control operativo
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              staggerFrom="center"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 1.5,
              }}
              containerClassName="flex flex-wrap"
              elementLevelClassName="text-white"
            >
              en semanas, no meses.
            </VerticalCutReveal>
          </h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2 }}
            className="text-lg md:text-xl text-white/90 font-body mb-12 max-w-3xl leading-relaxed"
          >
            Construimos tableros bajo demanda y modelos analíticos sobre Microsoft Fabric/Azure 
            para inventarios, incidentes, calidad, telemetría, predictividad y performance del negocio.
          </motion.p>

          {/* Features microcopy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full"
              >
                <feature.icon className="w-4 h-4 text-[#1E5BBF]" />
                <span className="text-sm text-white/70 font-body">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-white bg-[#103D96] hover:bg-[#1E5BBF] transition-all duration-300 rounded-lg shadow-lg hover:shadow-[#103D96]/20 hover:shadow-xl group"
            >
              Agendar sesión de diagnóstico
              <span className="text-sm text-white/70">(30 min)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#casos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 rounded-lg"
            >
              Ver casos de uso
            </a>
          </motion.div>
        </div>

        {/* Visual element - KPI Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-[520px]"
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-white/40 font-body">Analytics Dashboard</span>
            </div>
            
            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-xs text-white/50 font-body mb-1">MTTR</p>
                <p className="text-xl font-heading font-bold text-[#1E5BBF]">2.4h</p>
                <p className="text-xs text-green-400 font-body">↓ 18%</p>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-xs text-white/50 font-body mb-1">Disponibilidad</p>
                <p className="text-xl font-heading font-bold text-white">99.2%</p>
                <p className="text-xs text-green-400 font-body">↑ 0.5%</p>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-xs text-white/50 font-body mb-1">Incidentes</p>
                <p className="text-xl font-heading font-bold text-white">12</p>
                <p className="text-xs text-[#1E5BBF] font-body">Este mes</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <p className="text-xs text-white/50 font-body mb-3">Tendencia de incidentes</p>
              <div className="flex items-end gap-1 h-20">
                {[35, 50, 42, 65, 48, 72, 55, 40, 58, 45, 30, 25].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#103D96] to-[#1E5BBF]/50 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Mini metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/30 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-white/50 font-body">Inventario</p>
                  <span className="text-xs text-green-400">Óptimo</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#103D96] to-[#1E5BBF] rounded-full" style={{ width: '78%' }} />
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-white/50 font-body">Calidad datos</p>
                  <span className="text-xs text-[#1E5BBF]">92%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#103D96] to-[#1E5BBF] rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
            </div>
            
            {/* Status */}
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-white/50 font-body">Actualizado: hace 5 min</span>
              <span className="flex items-center gap-1 text-green-400 font-body">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Sincronizado
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

