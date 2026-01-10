'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, ShoppingBag, HardHat, GraduationCap, Briefcase, MapPin } from 'lucide-react'

const sectors = [
  { icon: Building2, name: 'Banca', description: 'Seguridad y estándares rigurosos' },
  { icon: ShoppingBag, name: 'Retail', description: 'Múltiples tiendas, mismo estándar' },
  { icon: HardHat, name: 'Construcción', description: 'Oficinas de obra y campo' },
  { icon: GraduationCap, name: 'Educación', description: 'Aulas y laboratorios' },
  { icon: Briefcase, name: 'Corporativo', description: 'Oficinas y salas ejecutivas' },
  { icon: MapPin, name: 'Multi-sede', description: 'Operaciones distribuidas' },
]

export default function SectoresEquip() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="sectores" ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-b from-black to-gray-950 text-white overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#FF6B00] font-body text-sm tracking-widest uppercase mb-4"
          >
            Sectores
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            Donde encaja{' '}
            <span className="text-[#FF6B00]">mejor</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#FF6B00]/30 hover:bg-white/[0.07] transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FF6B00]/20 transition-colors">
                <sector.icon className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-1">
                {sector.name}
              </h3>
              <p className="text-xs text-white/50 font-body">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

