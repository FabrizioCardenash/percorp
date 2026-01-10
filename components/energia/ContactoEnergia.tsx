'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Send, MessageCircle, Clock, CheckCircle } from 'lucide-react'

const tiposOperacion = [
  'Banca y servicios financieros',
  'Retail y centros comerciales',
  'Logística y almacenes',
  'Edificios corporativos',
  'Clínicas',
  'Industria ligera',
  'Otro',
]

export default function ContactoEnergia() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [formState, setFormState] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    ciudad: '',
    tipoOperacion: '',
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({
        nombre: '',
        empresa: '',
        cargo: '',
        email: '',
        telefono: '',
        ciudad: '',
        tipoOperacion: '',
        mensaje: '',
      })
    }, 3000)
  }

  return (
    <section id="contacto" ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FFC700]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#FFC700]/5 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#FFC700] font-body text-sm tracking-widest uppercase mb-4"
            >
              Contacto
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Solicita un{' '}
              <span className="text-[#FFC700]">diagnóstico inicial</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 font-body leading-relaxed mb-8"
            >
              En 30–60 minutos levantamos tu contexto, criticidad y objetivos. 
              Si aplica, agendamos visita técnica y te entregamos un plan con 
              prioridades y ROI estimado.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#FFC700]/10 rounded-lg">
                  <Clock className="w-5 h-5 text-[#FFC700]" />
                </div>
                <span className="text-white/80 font-body">Respuesta en menos de 24 horas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#FFC700]/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[#FFC700]" />
                </div>
                <span className="text-white/80 font-body">Sin compromiso, evaluación gratuita</span>
              </div>
            </motion.div>

            {/* WhatsApp alternative */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-white/50 font-body text-sm mb-3">¿Prefieres escribirnos directamente?</p>
              <a
                href="https://wa.me/51999999999?text=Hola, me interesa el servicio de energía de PERCORP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-body font-medium rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Escribir por WhatsApp
              </a>
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
                  <label htmlFor="nombre" className="block text-white/70 font-body text-sm mb-2">
                    Nombre y apellido *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formState.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FFC700]/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FFC700]/50 transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FFC700]/50 transition-colors"
                    placeholder="Tu cargo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 font-body text-sm mb-2">
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FFC700]/50 transition-colors"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="telefono" className="block text-white/70 font-body text-sm mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formState.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FFC700]/50 transition-colors"
                    placeholder="+51 999 999 999"
                  />
                </div>
                <div>
                  <label htmlFor="ciudad" className="block text-white/70 font-body text-sm mb-2">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    required
                    value={formState.ciudad}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FFC700]/50 transition-colors"
                    placeholder="Lima, Arequipa, etc."
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="tipoOperacion" className="block text-white/70 font-body text-sm mb-2">
                  Tipo de operación *
                </label>
                <select
                  id="tipoOperacion"
                  name="tipoOperacion"
                  required
                  value={formState.tipoOperacion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#FFC700]/50 transition-colors"
                >
                  <option value="" className="bg-gray-900">Selecciona una opción</option>
                  {tiposOperacion.map(tipo => (
                    <option key={tipo} value={tipo} className="bg-gray-900">{tipo}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-white/70 font-body text-sm mb-2">
                  ¿Qué buscas optimizar? (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  value={formState.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#FFC700]/50 transition-colors resize-none"
                  placeholder="Costo, continuidad, visibilidad, expansión..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-body font-medium rounded-lg transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-[#FFC700] text-black hover:bg-[#FFD633]'
                } disabled:opacity-70`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar solicitud
                  </>
                )}
              </button>

              <p className="text-white/40 text-xs font-body mt-4 text-center">
                Al enviar, aceptas ser contactado por PERCORP para fines de evaluación y propuesta.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


