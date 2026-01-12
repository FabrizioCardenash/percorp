'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Send, Clock, CheckCircle2 } from 'lucide-react'

const opcionesControl = [
  'Inventarios',
  'Margen',
  'Incidentes',
  'Productividad',
  'Otro'
]

const opcionesUrgencia = [
  'Esta semana',
  'Este mes',
  'Este trimestre'
]

export default function Contacto() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    whatsapp: '',
    controlar: '',
    urgencia: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
          subject: `📊 Nuevo contacto Control Operativo: ${formData.nombre} - ${formData.controlar}`,
          from_name: 'PERCORP Control Operativo',
          ccemail: 'mauricioperez.29@hotmail.com',
          nombre: formData.nombre,
          empresa: formData.empresa,
          cargo: formData.cargo,
          email: formData.email,
          whatsapp: formData.whatsapp || 'No proporcionado',
          que_controlar: formData.controlar,
          urgencia: formData.urgencia,
        }),
      })

      const data = await response.json()
      
      if (data.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            nombre: '',
            empresa: '',
            cargo: '',
            email: '',
            whatsapp: '',
            controlar: '',
            urgencia: ''
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
    <section id="contacto" className="relative py-24 md:py-32 bg-[#0A0A0F] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00F5D4]/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
            >
              Conversemos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#00B4D8]">
                20–30 minutos.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/60 font-body"
            >
              Te diremos el primer paso más rentable.
            </motion.p>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Nombre */}
                <div>
                  <label className="block text-white/60 text-sm font-body mb-2">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label className="block text-white/60 text-sm font-body mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                {/* Cargo */}
                <div>
                  <label className="block text-white/60 text-sm font-body mb-2">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cargo}
                    onChange={(e) => setFormData({...formData, cargo: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                    placeholder="Tu cargo actual"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/60 text-sm font-body mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* WhatsApp */}
                <div className="md:col-span-2">
                  <label className="block text-white/60 text-sm font-body mb-2">
                    WhatsApp (opcional)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                    placeholder="+51 999 999 999"
                  />
                </div>

                {/* ¿Qué quieres controlar? */}
                <div>
                  <label className="block text-white/60 text-sm font-body mb-2">
                    ¿Qué quieres controlar primero? *
                  </label>
                  <select
                    required
                    value={formData.controlar}
                    onChange={(e) => setFormData({...formData, controlar: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body focus:outline-none focus:border-[#00F5D4]/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0A0A0F]">Selecciona una opción</option>
                    {opcionesControl.map((opcion) => (
                      <option key={opcion} value={opcion} className="bg-[#0A0A0F]">{opcion}</option>
                    ))}
                  </select>
                </div>

                {/* Urgencia */}
                <div>
                  <label className="block text-white/60 text-sm font-body mb-2">
                    ¿Qué tan urgente es? *
                  </label>
                  <select
                    required
                    value={formData.urgencia}
                    onChange={(e) => setFormData({...formData, urgencia: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body focus:outline-none focus:border-[#00F5D4]/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0A0A0F]">Selecciona una opción</option>
                    {opcionesUrgencia.map((opcion) => (
                      <option key={opcion} value={opcion} className="bg-[#0A0A0F]">{opcion}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium font-body text-black bg-[#00F5D4] hover:bg-[#00D4B8] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-xl shadow-lg shadow-[#00F5D4]/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar y agendar diagnóstico
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Microcopy */}
              <div className="flex items-center justify-center gap-2 mt-4 text-white/40 text-sm font-body">
                <Clock className="w-4 h-4" />
                <span>Respuesta en menos de 24 horas hábiles.</span>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 bg-white/[0.02] border border-[#00F5D4]/20 rounded-2xl text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#00F5D4]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#00F5D4]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                ¡Mensaje enviado!
              </h3>
              <p className="text-white/60 font-body">
                Te contactaremos en menos de 24 horas hábiles para agendar tu diagnóstico.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

