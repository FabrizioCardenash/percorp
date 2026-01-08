'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const pasos = [
  {
    numero: 1,
    titulo: 'Análisis &\nViabilidad',
    descripcion: 'Evaluamos terrenos y regulaciones para asegurar viabilidad.',
  },
  {
    numero: 2,
    titulo: 'Diseño\nEstratégico',
    descripcion: 'Creamos diseños eficientes que maximizan el valor de inversión.',
  },
  {
    numero: 3,
    titulo: 'Planificación de\nConstrucción',
    descripcion: 'Establecemos presupuestos y cronogramas para el proyecto.',
  },
  {
    numero: 4,
    titulo: 'Construcción &\nControl',
    descripcion: 'Ejecutamos el proyecto manteniendo calidad y seguridad.',
  },
  {
    numero: 5,
    titulo: 'Entrega & Cierre',
    descripcion: 'Finalizamos el proyecto asegurando cumplimiento de los requisitos.',
  },
]

// Componente de icono de estrella/sparkle
const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="white" />
  </svg>
)

export default function MetodologiaInfra() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="metodologia" ref={ref} className="relative overflow-hidden">
      {/* Header con fondo morado */}
      <div className="relative bg-[#7800FF] pt-16 pb-32">
        <div className="container-custom relative z-10">
          <div className="flex items-start justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white italic"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Metodología
            </motion.h2>
            
            {/* Logo PERCORP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex flex-col items-center gap-2"
            >
              <div className="flex flex-col items-center">
                <div className="flex gap-1 mb-1">
                  <span className="text-white text-lg">✦</span>
                  <span className="text-white text-lg">✦</span>
                  <span className="text-white text-lg">✦</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <div className="w-0.5 h-8 bg-white"></div>
                  <div className="w-0.5 h-12 bg-white"></div>
                  <div className="w-0.5 h-8 bg-white"></div>
                  <div className="w-0.5 h-14 bg-white mx-1"></div>
                  <div className="w-0.5 h-8 bg-white"></div>
                  <div className="w-0.5 h-12 bg-white"></div>
                  <div className="w-0.5 h-8 bg-white"></div>
                </div>
                <span className="text-white text-xs font-body tracking-wider mt-2">PERCORP</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Curva de transición */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120V60C240 100 480 120 720 100C960 80 1200 20 1440 0V120H0Z" fill="black" />
          </svg>
        </div>
      </div>

      {/* Contenido con fondo negro */}
      <div className="relative bg-black pt-8 pb-24">
        {/* Ondas decorativas izquierda */}
        <div className="absolute bottom-0 left-0 w-48 h-64 opacity-30 pointer-events-none">
          <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {[...Array(15)].map((_, i) => (
              <path
                key={i}
                d={`M${-50 + i * 12} 300 Q${-30 + i * 12} 200, ${-50 + i * 12} 100 Q${-70 + i * 12} 50, ${-50 + i * 12} 0`}
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>

        {/* Ondas decorativas derecha */}
        <div className="absolute bottom-0 right-0 w-64 h-48 opacity-30 pointer-events-none">
          <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {[...Array(20)].map((_, i) => (
              <path
                key={i}
                d={`M0 ${150 + i * 8} Q100 ${130 + i * 8}, 200 ${150 + i * 8} Q250 ${160 + i * 8}, 300 ${150 + i * 8}`}
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>

        <div className="container-custom relative z-10">
          {/* Stepper horizontal */}
          <div className="relative">
            {/* Grid de pasos */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {pasos.map((paso, index) => (
                <motion.div
                  key={paso.numero}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Número en círculo */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center mb-6">
                    <span className="text-white text-xl md:text-2xl font-heading font-medium">
                      {paso.numero}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-white font-heading font-semibold text-base md:text-lg mb-3 whitespace-pre-line leading-tight">
                    {paso.titulo}
                  </h3>

                  {/* Icono sparkle como separador */}
                  <div className="flex items-center gap-1 mb-4">
                    <div className="w-4 h-4">
                      <svg viewBox="0 0 24 24" fill="white">
                        <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
                      </svg>
                    </div>
                    <div className="w-8 h-px bg-white"></div>
                    <div className="w-4 h-4">
                      <svg viewBox="0 0 24 24" fill="white">
                        <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" />
                      </svg>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-white/70 font-body text-sm leading-relaxed max-w-[180px]">
                    {paso.descripcion}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Línea conectora horizontal (solo desktop) */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-white/30" style={{ top: '32px' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
