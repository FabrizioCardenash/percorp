'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { MapPin, Ruler, Calendar } from 'lucide-react'
import Image from 'next/image'

const proyectos = [
  {
    titulo: 'Oficinas Obra Global',
    subtitulo: 'Patio Panorama',
    tipo: 'Remodelación de oficinas',
    area: '170 m²',
    desarrollo: 'Diseño (1 mes)',
    imagen: '/rendersdeproyectos/OFICINA PANORAMA.jpg',
  },
  {
    titulo: 'Parque Pampaflores',
    subtitulo: 'Condominio Terra Galicia, Cieneguilla',
    tipo: 'Consultoría de rediseño de espacio público',
    area: null,
    desarrollo: null,
    imagen: '/rendersdeproyectos/PARQUE PAMPA FLORES.jpg',
  },
]

export default function Proyectos() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="experiencia" ref={ref} className="relative py-24 md:py-32 bg-gray-50 text-black overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#7800FF] font-body text-sm tracking-widest uppercase mb-4"
          >
            Trayectoria
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold"
          >
            Proyectos & experiencia
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.titulo}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-black mb-1">
                  {proyecto.titulo}
                </h3>
                <p className="text-[#7800FF] font-body text-sm mb-3">
                  {proyecto.subtitulo}
                </p>
                <p className="text-gray-600 font-body text-sm mb-4">
                  {proyecto.tipo}
                </p>

                {/* Meta info */}
                {(proyecto.area || proyecto.desarrollo) && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                    {proyecto.area && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <Ruler className="w-4 h-4" />
                        <span className="text-sm font-body">{proyecto.area}</span>
                      </div>
                    )}
                    {proyecto.desarrollo && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-body">{proyecto.desarrollo}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-gray-400 text-sm font-body mt-12"
        >
          * Más proyectos disponibles bajo solicitud.
        </motion.p>
      </div>
    </section>
  )
}

