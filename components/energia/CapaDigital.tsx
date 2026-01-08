'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Cpu, Bell, LineChart, Users, Link2, ArrowRight, Check } from 'lucide-react'

const capacidades = [
  { icon: Cpu, text: 'Submetering inteligente y telemetría (IoT / gateways)' },
  { icon: Bell, text: 'Alarmas y detección temprana de anomalías (consumo, demanda, calidad)' },
  { icon: LineChart, text: 'Tablero ejecutivo para Finanzas/Operaciones (ROI, baseline, ahorro)' },
  { icon: Users, text: 'Rutinas de gobierno (comités, KPIs, seguimiento mensual)' },
  { icon: Link2, text: 'Integración con herramientas corporativas (reporting, tickets, mantenimiento)' },
]

export default function CapaDigital() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-black to-black" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-amber-400 font-body text-sm tracking-widest uppercase mb-4"
            >
              Diferenciador PERCORP
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6"
            >
              La diferencia PERCORP:{' '}
              <span className="text-amber-400">energía gobernada por datos</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 font-body leading-relaxed mb-8"
            >
              Integramos medición, analítica y automatización para que el área de Operaciones 
              deje de "adivinar" y empiece a gestionar energía como un sistema.
            </motion.p>

            {/* Capacidades */}
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              {capacidades.map((cap, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 bg-amber-400/10 rounded-lg flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-white/80 font-body">{cap.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-black font-body font-medium rounded-lg hover:bg-amber-300 transition-colors group"
              >
                Ver ejemplo de tablero (demo)
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Visual - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 shadow-2xl">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white font-heading font-semibold">Energy Management System</p>
                    <p className="text-white/50 text-xs font-body">Dashboard Principal</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-green-400 text-xs font-body">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/50 text-xs font-body mb-1">Ahorro Acumulado</p>
                  <p className="text-2xl font-heading font-bold text-green-400">S/ 47,200</p>
                  <p className="text-xs text-white/40 font-body">Este mes</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/50 text-xs font-body mb-1">Eficiencia</p>
                  <p className="text-2xl font-heading font-bold text-amber-400">94.2%</p>
                  <p className="text-xs text-white/40 font-body">Factor de potencia</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/50 text-xs font-body mb-1">Alertas</p>
                  <p className="text-2xl font-heading font-bold text-white">3</p>
                  <p className="text-xs text-white/40 font-body">Activas</p>
                </div>
              </div>

              {/* Chart area */}
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white/70 text-sm font-body">Consumo por Zona</p>
                  <div className="flex gap-2">
                    <span className="text-xs text-white/40 font-body px-2 py-1 bg-white/5 rounded">24h</span>
                    <span className="text-xs text-amber-400 font-body px-2 py-1 bg-amber-400/10 rounded">7d</span>
                  </div>
                </div>
                <div className="h-32 flex items-end justify-between gap-2">
                  {['Producción', 'Oficinas', 'Almacén', 'HVAC', 'Iluminación'].map((zona, i) => (
                    <div key={zona} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-amber-400 to-amber-400/30 rounded-t"
                        style={{ height: `${[75, 45, 60, 80, 35][i]}%` }}
                      />
                      <span className="text-[10px] text-white/40 font-body">{zona}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alerts */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-amber-400/10 border border-amber-400/20 rounded-lg">
                  <Bell className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-white/70 font-body">Demanda cerca del límite en Zona A</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-400/10 border border-green-400/20 rounded-lg">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-white/70 font-body">Mantenimiento preventivo completado</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


