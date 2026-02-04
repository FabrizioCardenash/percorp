'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ArrowRight, Sparkles, Zap, RefreshCcw, Calendar } from 'lucide-react'

const ofertas = [
  {
    numero: '01',
    titulo: 'Diagnóstico Express',
    subtitulo: 'Para ganar claridad rápida',
    incluye: ['Mapa de fugas/fricciones', 'KPIs recomendados', 'Plan 30–60–90'],
    cta: 'Solicitar Diagnóstico Express',
    href: '#contacto',
    destacado: false,
    icon: Sparkles,
    color: '#A78BFA',
  },
  {
    numero: '02',
    titulo: 'Quick Control',
    subtitulo: 'Sistema mínimo viable',
    descripcion: 'Para recuperar control en semanas.',
    incluye: ['Tablero (10–15 KPIs)', 'Definiciones claras', 'Responsables y rutina semanal operando'],
    cta: 'Implementar Quick Control',
    href: '#contacto',
    destacado: true,
    icon: Zap,
    color: '#00F5D4',
  },
  {
    numero: '03',
    titulo: 'Control & Automation',
    subtitulo: 'Escala con eficiencia',
    descripcion: 'Para reducir fricción y escalar eficiencia.',
    incluye: ['Automatizaciones/alertas en procesos críticos', 'Roadmap de mejora'],
    cta: 'Escalar con automatización',
    href: '#contacto',
    destacado: false,
    icon: RefreshCcw,
    color: '#FBBF24',
  },
]

export default function Ofertas() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="ofertas" className="relative py-24 md:py-32 bg-[#0A0A0F] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00F5D4]/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#00F5D4] font-body text-sm uppercase tracking-widest mb-4"
            >
              Ofertas
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white"
            >
              Elige tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#00B4D8]">
                punto de entrada
              </span>
            </motion.h2>
          </div>

          {/* Ofertas Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {ofertas.map((oferta, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all ${
                  oferta.destacado 
                    ? 'bg-gradient-to-b from-[#00F5D4]/10 to-transparent border-[#00F5D4]/30 shadow-lg shadow-[#00F5D4]/10' 
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'
                }`}
              >
                {/* Popular badge */}
                {oferta.destacado && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00F5D4] text-black text-xs font-body font-bold rounded-full">
                    Más popular
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${oferta.color}15` }}
                  >
                    <oferta.icon className="w-6 h-6" style={{ color: oferta.color }} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-body">Oferta {oferta.numero}</p>
                    <h3 className="text-xl font-heading font-bold text-white">{oferta.titulo}</h3>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-white/60 font-body mb-6">
                  {oferta.subtitulo}
                </p>

                {/* Incluye */}
                <div className="flex-grow mb-8">
                  <p className="text-white/40 text-xs font-body uppercase tracking-wider mb-3">Incluye:</p>
                  <ul className="space-y-2">
                    {oferta.incluye.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 font-body text-sm">
                        <span className="text-[#00F5D4] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={oferta.href}
                  className={`group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium font-body rounded-xl transition-all ${
                    oferta.destacado
                      ? 'text-black bg-[#00F5D4] hover:bg-[#00D4B8]'
                      : 'text-white bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {oferta.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Optional - Control as a Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-white/40" />
                <span className="text-white/40 text-sm font-body">Opcional</span>
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">
                Control as a Service
              </h4>
              <p className="text-white/50 font-body text-sm mb-4">
                Tablero vivo + comité + backlog + optimización continua (mensual)
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-[#00F5D4] font-body text-sm hover:underline underline-offset-4"
              >
                Quiero un plan mensual
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
