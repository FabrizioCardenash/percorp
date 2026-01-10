'use client'

import { motion } from 'framer-motion'
import { Monitor, Wrench, Package, FileCheck, ArrowRight } from 'lucide-react'
import { Waves } from '@/components/ui/wave-background'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'

const trustItems = [
  { icon: Wrench, text: 'Implementación en sitio' },
  { icon: Package, text: 'Gestión de inventario' },
  { icon: Monitor, text: 'Soporte postventa' },
  { icon: FileCheck, text: 'Entrega documentada (as-built)' },
]

export default function EquipamientoHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-28">
      {/* Wave Background */}
      <div className="absolute inset-0 z-0">
        <Waves
          strokeColor="#FF6B00"
          backgroundColor="transparent"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />
      
      {/* Animated glow */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[150px] z-[1]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom min-h-screen flex flex-col justify-center py-20 pointer-events-auto">
        <div className="max-w-4xl xl:max-w-[55%]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-full mb-8"
          >
            <Monitor className="w-4 h-4 text-[#FF6B00]" />
            <span className="text-sm font-body text-[#FF6B00]">PERCORP Tecnología | Equipamiento & Integración</span>
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
              Tecnología lista para operar:
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
              elementLevelClassName="text-[#FF6B00]"
            >
              equipamiento, integración
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              staggerFrom="center"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 1.4,
              }}
              containerClassName="flex flex-wrap"
              elementLevelClassName="text-white"
            >
              e implementación end-to-end.
            </VerticalCutReveal>
          </h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2 }}
            className="text-lg md:text-xl text-white/90 font-body mb-10 max-w-3xl leading-relaxed"
          >
            Abastecemos, instalamos y dejamos funcionando tu ecosistema de trabajo: 
            laptops, periféricos, salas de reuniones, auditorios y cableado. 
            Con enfoque enterprise: estándar, trazabilidad y soporte.
          </motion.p>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {trustItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
              >
                <item.icon className="w-4 h-4 text-[#FF6B00]" />
                <span className="text-sm text-white/80 font-body">{item.text}</span>
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-white bg-[#FF6B00] hover:bg-[#FF8533] transition-all duration-300 rounded-lg shadow-lg hover:shadow-[#FF6B00]/20 hover:shadow-xl group"
            >
              Cotizar equipamiento
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

        {/* Visual element - Equipment showcase */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="hidden xl:block absolute right-4 2xl:right-12 top-1/2 -translate-y-1/2 w-[480px] 2xl:w-[550px]"
        >
          <div className="relative">
            {/* Main card - Laptop */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-white/40 font-body">Ecosistema de trabajo</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Operativo</span>
              </div>

              {/* Equipment grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {/* Laptop */}
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5">
                  <div className="w-16 h-10 bg-gray-700 rounded-t-lg mb-1 flex items-center justify-center">
                    <div className="w-12 h-7 bg-[#FF6B00]/30 rounded" />
                  </div>
                  <div className="w-18 h-1 bg-gray-600 rounded-full" />
                  <span className="text-[10px] text-white/50 mt-2">Laptops</span>
                </div>

                {/* Monitor */}
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5">
                  <div className="w-14 h-10 bg-gray-700 rounded-lg mb-1 flex items-center justify-center border-2 border-gray-600">
                    <div className="w-10 h-6 bg-[#FF6B00]/30 rounded-sm" />
                  </div>
                  <div className="w-4 h-2 bg-gray-600" />
                  <span className="text-[10px] text-white/50 mt-1">Monitores</span>
                </div>

                {/* Conference */}
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5">
                  <div className="w-12 h-8 bg-gray-700 rounded-lg mb-1 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#FF6B00] rounded-full animate-pulse" />
                  </div>
                  <span className="text-[10px] text-white/50 mt-2">Salas AV</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <p className="text-2xl font-heading font-bold text-[#FF6B00]">250+</p>
                  <p className="text-[10px] text-white/50">Equipos</p>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <p className="text-2xl font-heading font-bold text-white">15</p>
                  <p className="text-[10px] text-white/50">Salas</p>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <p className="text-2xl font-heading font-bold text-white">99%</p>
                  <p className="text-[10px] text-white/50">Uptime</p>
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/50">Inventario registrado</span>
                    <span className="text-[#FF6B00]">98%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FF6B00] to-[#FF8533] rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/50">Garantías activas</span>
                    <span className="text-green-400">85%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div 
              className="absolute -left-16 top-8 bg-black/80 backdrop-blur-sm border border-[#FF6B00]/30 rounded-xl p-4 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF6B00]/20 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Entrega</p>
                  <p className="text-xs text-white/50">48h configurado</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -right-8 bottom-20 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">As-Built</p>
                  <p className="text-xs text-white/50">Documentación completa</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

