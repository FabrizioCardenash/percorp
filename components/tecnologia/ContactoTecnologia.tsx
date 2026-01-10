'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

const industrias = [
  'Banca / Finanzas',
  'Retail',
  'Logística',
  'Manufactura',
  'Salud',
  'Servicios',
  'Otro',
]

const objetivos = [
  'Inventario',
  'Incidentes',
  'Calidad',
  'Telemetría',
  'Predictivo',
  'Otro',
]

export default function ContactoTecnologia() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [formState, setFormState] = useState({
    nombre: '',
    empresa: '',
    email: '',
    industria: '',
    objetivo: '',
    fuentes: '',
    usuarios: '',
    urgencia: '',
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
        nombre: '',
        empresa: '',
        email: '',
        industria: '',
        objetivo: '',
        fuentes: '',
        usuarios: '',
        urgencia: '',
        mensaje: '',
      })
    }, 3000)
  }

  return (
    <section id="contacto" ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#103D96]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#1E5BBF] font-body text-sm tracking-widest uppercase mb-4"
            >
              Contacto
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Trae tus fuentes.{' '}
              <span className="text-[#1E5BBF]">Nosotros te devolvemos control.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 font-body leading-relaxed mb-8"
            >
              Cuéntanos sobre tus fuentes de datos, objetivos y urgencia. 
              Te devolvemos una propuesta con roadmap y estimación.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="font-heading font-semibold text-white mb-4">¿Qué recibirás?</h3>
              <ul className="space-y-2 text-white/70 font-body text-sm">
                <li>✓ Diagnóstico inicial de viabilidad</li>
                <li>✓ Propuesta técnica y comercial</li>
                <li>✓ Roadmap de implementación</li>
                <li>✓ Estimación de tiempos y costos</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="nombre" className="block text-white/70 font-body text-sm mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formState.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#103D96]/50 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#103D96]/50 transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#103D96]/50 transition-colors"
                    placeholder="tu@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="industria" className="block text-white/70 font-body text-sm mb-2">
                    Industria *
                  </label>
                  <select
                    id="industria"
                    name="industria"
                    required
                    value={formState.industria}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#103D96]/50 transition-colors"
                  >
                    <option value="" className="bg-gray-900">Selecciona</option>
                    {industrias.map(ind => (
                      <option key={ind} value={ind} className="bg-gray-900">{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="objetivo" className="block text-white/70 font-body text-sm mb-2">
                    Objetivo principal *
                  </label>
                  <select
                    id="objetivo"
                    name="objetivo"
                    required
                    value={formState.objetivo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#103D96]/50 transition-colors"
                  >
                    <option value="" className="bg-gray-900">Selecciona</option>
                    {objetivos.map(obj => (
                      <option key={obj} value={obj} className="bg-gray-900">{obj}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="fuentes" className="block text-white/70 font-body text-sm mb-2">
                    Fuentes de datos
                  </label>
                  <input
                    type="text"
                    id="fuentes"
                    name="fuentes"
                    value={formState.fuentes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#103D96]/50 transition-colors"
                    placeholder="ERP, Excel, APIs..."
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="usuarios" className="block text-white/70 font-body text-sm mb-2">
                    # Usuarios estimados
                  </label>
                  <input
                    type="text"
                    id="usuarios"
                    name="usuarios"
                    value={formState.usuarios}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#103D96]/50 transition-colors"
                    placeholder="Ej: 10-20"
                  />
                </div>
                <div>
                  <label htmlFor="urgencia" className="block text-white/70 font-body text-sm mb-2">
                    Urgencia
                  </label>
                  <select
                    id="urgencia"
                    name="urgencia"
                    value={formState.urgencia}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-[#103D96]/50 transition-colors"
                  >
                    <option value="" className="bg-gray-900">Selecciona</option>
                    <option value="alta" className="bg-gray-900">Alta (menos de 1 mes)</option>
                    <option value="media" className="bg-gray-900">Media (1-3 meses)</option>
                    <option value="baja" className="bg-gray-900">Baja (explorando)</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-white/70 font-body text-sm mb-2">
                  Contexto adicional
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  value={formState.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body placeholder:text-white/30 focus:outline-none focus:border-[#103D96]/50 transition-colors resize-none"
                  placeholder="Cuéntanos más sobre tu situación actual..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-body font-medium rounded-lg transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-[#103D96] text-white hover:bg-[#1E5BBF]'
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
                    Recibir propuesta y roadmap
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
