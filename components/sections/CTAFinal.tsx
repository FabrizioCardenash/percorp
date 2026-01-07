'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import Image from 'next/image'

export default function CTAFinal() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="contacto" className="section-padding text-white relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagenes web/SAN-ISIDRO.png"
          alt="San Isidro Background"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-8 leading-tight font-heading">
            Construyamos la infraestructura y tecnología que tu empresa necesita para crecer
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed font-body">
            Agenda una reunión con nuestro equipo directivo y descubre cómo PERCORP puede acelerar el crecimiento de tu organización.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="mailto:direccion@percorp.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary bg-white text-accent hover:bg-gray-100 text-lg px-10 py-5"
            >
              Agendar reunión con Dirección
            </motion.a>
            
            <motion.a
              href="#empresas"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary border-white text-white hover:bg-white hover:text-accent text-lg px-10 py-5"
            >
              Conocer las empresas PERCORP
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <p className="text-blue-100 text-lg mb-4">
              ¿Prefieres escribirnos directamente?
            </p>
            <a 
              href="mailto:direccion@percorp.com" 
              className="text-2xl font-semibold hover:underline"
            >
              direccion@percorp.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
