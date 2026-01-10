'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Send, CheckCircle, Clock } from 'lucide-react'

const necesidades = [
  'Equipos (laptops, monitores, periféricos)',
  'Salas de reuniones (AV/UC)',
  'Cableado estructurado',
  'Implementación completa',
  'Soporte y mantenimiento',
  'Otro',
]

export default function ContactoEquip() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [formState, setFormState] = useState({
    empresa: '',
    cargo: '',
    sedes: '',
    necesidad: '',
    cantidades: '',
    fechaObjetivo: '',
    telefono: '',
    email: '',
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({
        empresa: '',
        cargo: '',
        sedes: '',
        necesidad: '',
        cantidades: '',
        fechaObjetivo: '',
        telefono: '',
        email: '',
        mensaje: '',
      })
    }, 3000)
  }

  return (
    <section id="contacto" ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#FF6B00] font-body text-sm tracking-widest uppercase mb-4"
            >
              Contacto
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Cotiza en{' '}
              <span className="text-[#FF6B00]">24–48h</span>{' '}
              con especificación clara
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 font-body leading-relaxed mb-8"
            >
              Cuéntanos qué necesitas y te devolvemos una propuesta con BOM, 
              cronograma y costos estimados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-xl"
            >
              <Clock className="w-8 h-8 text-[#FF6B00]" />
              <div>
                <p className="font-heading font-semibold text-white">Respuesta rápida</p>
                <p className="text-sm text-white/60 font-body">Propuesta en 24–48 horas hábiles</p>
              </div>
            </motion.div>
          </div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="empresa" className="block text-white/70 font-body text-sm mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formState.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="cargo" className="block text-white/70 font-body text-sm mb-2">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    id="cargo"
                    name="cargo"
                    required
                    value={formState.cargo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                    placeholder="Tu cargo"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="sedes" className="block text-white/70 font-body text-sm mb-2">
                    # Sedes
                  </label>
                  <input
                    type="text"
                    id="sedes"
                    name="sedes"
                    value={formState.sedes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                    placeholder="Ej: 3 oficinas"
                  />
                </div>
                <div>
                  <label htmlFor="necesidad" className="block text-white/70 font-body text-sm mb-2">
                    Necesidad principal *
                  </label>
                  <select
                    id="necesidad"
                    name="necesidad"
                    required
                    value={formState.necesidad}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                  >
                    <option value="" className="bg-gray-900">Selecciona</option>
                    {necesidades.map(n => (
                      <option key={n} value={n} className="bg-gray-900">{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="cantidades" className="block text-white/70 font-body text-sm mb-2">
                    Cantidades estimadas
                  </label>
                  <input
                    type="text"
                    id="cantidades"
                    name="cantidades"
                    value={formState.cantidades}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                    placeholder="Ej: 50 laptops, 2 salas"
                  />
                </div>
                <div>
                  <label htmlFor="fechaObjetivo" className="block text-white/70 font-body text-sm mb-2">
                    Fecha objetivo
                  </label>
                  <input
                    type="text"
                    id="fechaObjetivo"
                    name="fechaObjetivo"
                    value={formState.fechaObjetivo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                    placeholder="Ej: Marzo 2026"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="telefono" className="block text-white/70 font-body text-sm mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formState.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                    placeholder="+51 999 999 999"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 font-body text-sm mb-2">
                    Correo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-white/70 font-body text-sm mb-2">
                  Detalles adicionales
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  value={formState.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00]/50 transition-colors resize-none"
                  placeholder="Especificaciones adicionales, marcas preferidas, etc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-body font-medium rounded-lg transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-[#FF6B00] text-white hover:bg-[#FF8533]'
                } disabled:opacity-70`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    ¡Solicitud enviada!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Recibir propuesta
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

