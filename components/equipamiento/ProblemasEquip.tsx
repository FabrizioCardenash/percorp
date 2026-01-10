'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ShoppingCart, Video, Box, Headphones } from 'lucide-react'

const problems = [
  {
    icon: ShoppingCart,
    title: 'Compras fragmentadas',
    description: 'Sin estándar: cada área compra "a su manera", generando incompatibilidades y sobrecostos.',
  },
  {
    icon: Video,
    title: 'Salas que fallan',
    description: 'Audio/video que no funciona cuando más importa: problemas de compatibilidad y configuración.',
  },
  {
    icon: Box,
    title: 'Inventario sin trazabilidad',
    description: 'Pérdidas, sobrecompra, equipos sin dueño. Nadie sabe qué hay ni dónde está.',
  },
  {
    icon: Headphones,
    title: 'Soporte reactivo',
    description: 'Sin SLAs claros, sin repuestos, sin garantías ordenadas. Se apaga incendios.',
  },
]

export default function ProblemasEquip() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="problemas" ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#FF6B00] font-body text-sm tracking-widest uppercase mb-4"
          >
            El problema
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Problemas que{' '}
            <span className="text-[#FF6B00]">resolvemos</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FF6B00]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FF6B00]/20 transition-colors">
                <problem.icon className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-white/60 font-body text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

