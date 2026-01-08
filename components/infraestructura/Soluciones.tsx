'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const soluciones = [
  {
    id: 'oficinas',
    titulo: 'Proyectos corporativos',
    descripcion: 'Oficina contemporánea con luz natural, transparencia espacial y calidez en materiales.',
    imagenes: ['/rendersdeproyectos/OF1.jpg', '/rendersdeproyectos/OF2.jpg', '/rendersdeproyectos/OF3.jpg', '/rendersdeproyectos/OFICINA SALA ESPERA.jpg'],
  },
  {
    id: 'retail',
    titulo: 'Tiendas & retail',
    descripcion: 'Concepto moderno e inmersivo con interacción audiovisual e iluminación enfocada en producto.',
    imagenes: ['/rendersdeproyectos/RET1.jpg', '/rendersdeproyectos/RET2.jpg'],
  },
  {
    id: 'cafeterias',
    titulo: 'Cafeterías & restaurantes',
    descripcion: 'Experiencia sensorial cuidada, atmósfera cálida y sofisticada.',
    imagenes: ['/rendersdeproyectos/CAF1.jpg', '/rendersdeproyectos/CAF2.jpg', '/rendersdeproyectos/CAF3.jpg'],
  },
  {
    id: 'farmacias',
    titulo: 'Farmacias & stands',
    descripcion: 'Orden, confianza, iluminación uniforme y lectura inmediata del espacio.',
    imagenes: ['/rendersdeproyectos/PHARMACY.jpg', '/rendersdeproyectos/PHARMACY2.jpg', '/rendersdeproyectos/PHARMACY3.jpg'],
  },
  {
    id: 'control',
    titulo: 'Centro de control y seguridad',
    descripcion: 'Estética sobria y futurista para eficiencia, monitoreo y decisiones en tiempo real.',
    imagenes: ['/rendersdeproyectos/CONTROL1.jpg', '/rendersdeproyectos/CONTROL2.jpg'],
  },
]

export default function Soluciones() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [selectedSolucion, setSelectedSolucion] = useState<typeof soluciones[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openGallery = (solucion: typeof soluciones[0]) => {
    setSelectedSolucion(solucion)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setSelectedSolucion(null)
  }

  const nextImage = () => {
    if (selectedSolucion) {
      setCurrentImageIndex((prev) => 
        prev === selectedSolucion.imagenes.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedSolucion) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedSolucion.imagenes.length - 1 : prev - 1
      )
    }
  }

  return (
    <section id="soluciones" ref={ref} className="relative py-24 md:py-32 bg-white text-black overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#7800FF] font-body text-sm tracking-widest uppercase mb-4"
          >
            Portafolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold"
          >
            Soluciones
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soluciones.map((solucion, index) => (
            <motion.div
              key={solucion.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onClick={() => openGallery(solucion)}
              className={`group cursor-pointer relative overflow-hidden rounded-2xl ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'h-[400px] lg:h-full' : 'h-[250px]'}`}>
                <Image
                  src={solucion.imagenes[0]}
                  alt={solucion.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 group-hover:text-[#7800FF] transition-colors">
                    {solucion.titulo}
                  </h3>
                  <p className="text-white/70 font-body text-sm line-clamp-2">
                    {solucion.descripcion}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs text-[#7800FF] font-body">
                      {solucion.imagenes.length} imágenes
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-xs text-white/50 font-body group-hover:text-white transition-colors">
                      Click para ver galería
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#7800FF]/0 group-hover:bg-[#7800FF]/10 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {selectedSolucion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeGallery}
          >
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div 
              className="relative w-full max-w-5xl h-[70vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedSolucion.imagenes[currentImageIndex]}
                alt={selectedSolucion.titulo}
                fill
                className="object-contain"
              />

              {/* Navigation */}
              {selectedSolucion.imagenes.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {selectedSolucion.titulo}
                </h3>
                <p className="text-white/70 font-body">
                  {selectedSolucion.descripcion}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  {selectedSolucion.imagenes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-[#7800FF]' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

