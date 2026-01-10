'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Laptop, Video, Wrench, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Laptop,
    title: 'Equipamiento Corporativo',
    subtitle: 'Procurement & Supply',
    color: '#FF6B00',
    items: [
      'Laptops y estaciones de trabajo (perfilado por rol)',
      'RAM/SSD y upgrades',
      'Monitores, docks, teclados, mouses, headsets',
      'Cables (HDMI/DP/USB-C), adaptadores, UPS',
      'Impresión y periféricos especializados',
    ],
  },
  {
    icon: Video,
    title: 'Salas de Reuniones',
    subtitle: 'AV/UC & Colaboración',
    color: '#00FFA3',
    items: [
      'Salas pequeñas/medianas/grandes',
      'Cámaras, micrófonos, parlantes, barras de video',
      'Integración con Teams/Zoom/Meet',
      'Cableado estructurado y señal (HDMI/USB/extensores)',
      'Audio inteligible, encuadre, iluminación básica',
    ],
  },
  {
    icon: Wrench,
    title: 'Implementación & Soporte',
    subtitle: 'Continuidad Operativa',
    color: '#103D96',
    items: [
      'Instalación y configuración (imaging, perfiles)',
      'Documentación "as-built" (diagramas + inventario)',
      'Mesa de ayuda / soporte en sitio',
      'Plan de renovación tecnológica (refresh por ciclos)',
      'Gestión de garantías y ciclo de vida',
    ],
  },
]

export default function ServiciosEquip() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="servicios" ref={sectionRef} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#FF6B00] font-body text-sm tracking-widest uppercase mb-4"
          >
            Servicios
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Soluciones{' '}
            <span className="text-[#FF6B00]">integrales</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 font-body"
          >
            Tres bloques de servicios que cubren todo el ciclo de vida tecnológico.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="group relative"
            >
              <div 
                className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${service.color}20, transparent)` }}
              />
              
              <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-opacity-50 transition-all duration-300 h-full"
                style={{ '--hover-color': service.color } as React.CSSProperties}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm font-body mb-6" style={{ color: service.color }}>
                  {service.subtitle}
                </p>
                
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span 
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="text-white/70 font-body text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B00] text-white font-body font-medium rounded-lg hover:bg-[#FF8533] transition-colors group"
          >
            Solicitar cotización
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

