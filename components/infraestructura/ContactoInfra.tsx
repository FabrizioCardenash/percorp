'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Send, MessageCircle, CheckCircle } from 'lucide-react'

const tiposProyecto = [
  'Oficinas',
  'Retail',
  'Restaurante',
  'Farmacia',
  'Centro de Control',
  'Residencial',
  'Otro',
]

export default function ContactoInfra() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [formState, setFormState] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    tipoProyecto: '',
    metros: '',
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
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a7dd159f-3e6e-4a4c-9f63-545926b89d1c',
          subject: `🏗️ Nuevo contacto Infraestructura: ${formState.nombre} - ${formState.tipoProyecto}`,
          from_name: 'PERCORP Infraestructura',
          to: 'arq.brunoperez@gmail.com',
          cc: 'mauricioperez.29@hotmail.com',
          nombre: formState.nombre,
          empresa: formState.empresa,
          cargo: formState.cargo,
          email: formState.email,
          telefono: formState.telefono,
          tipo_proyecto: formState.tipoProyecto,
          metros_cuadrados: formState.metros || 'No especificado',
          mensaje: formState.mensaje || 'Sin mensaje adicional',
        }),
      })

      const data = await response.json()
      
      if (data.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormState({
            nombre: '',
            empresa: '',
            cargo: '',
            email: '',
            telefono: '',
            tipoProyecto: '',
            metros: '',
            mensaje: '',
          })
        }, 3000)
      }
    } catch (error) {
      console.error('Error enviando formulario:', error)
      alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" ref={ref} className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7800FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#7800FF]/5 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#7800FF] font-body text-sm tracking-widest uppercase mb-4"
            >
              Contacto
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Hablemos de{' '}
              <span className="text-[#7800FF]">tu proyecto</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 font-body leading-relaxed mb-8"
            >
              Cuéntanos el tipo de espacio, plazos y restricciones. Te devolvemos un diagnóstico 
              inicial y la ruta recomendada.
            </motion.p>

            {/* WhatsApp alternative */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-white/50 font-body text-sm mb-3">¿Prefieres escribirnos directamente?</p>
              <a
                href="https://wa.me/51999999999?text=Hola, me interesa el servicio de infraestructura de PERCORP"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#7800FF]/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-white/70 font-body text-sm mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formState.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#7800FF]/50 transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="cargo" className="block text-white/70 font-body text-sm mb-2">
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="cargo"
                    name="cargo"
                    value={formState.cargo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#7800FF]/50 transition-colors"
                    placeholder="Tu cargo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 font-body text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#7800FF]/50 transition-colors"
                    placeholder="tu@email.com"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#7800FF]/50 transition-colors"
                    placeholder="+51 999 999 999"
                  />
                </div>
                <div>
                  <label htmlFor="tipoProyecto" className="block text-white/70 font-body text-sm mb-2">
                    Tipo de proyecto *
                  </label>
                  <select
                    id="tipoProyecto"
                    name="tipoProyecto"
                    required
                    value={formState.tipoProyecto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#7800FF]/50 transition-colors"
                  >
                    <option value="" className="bg-gray-900">Selecciona una opción</option>
                    {tiposProyecto.map(tipo => (
                      <option key={tipo} value={tipo} className="bg-gray-900">{tipo}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="metros" className="block text-white/70 font-body text-sm mb-2">
                  m² aproximados (opcional)
                </label>
                <input
                  type="text"
                  id="metros"
                  name="metros"
                  value={formState.metros}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#7800FF]/50 transition-colors"
                  placeholder="Ej: 200 m²"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-white/70 font-body text-sm mb-2">
                  Mensaje (objetivo + plazo + ubicación)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  value={formState.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#7800FF]/50 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-body font-medium rounded-lg transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-[#7800FF] text-white hover:bg-[#6200cc]'
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
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar solicitud
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

