'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

export default function ArquitecturaEmpresarial() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="arquitectura" className="section-padding bg-corporate-gray">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-4 text-primary font-heading">
            Arquitectura Empresarial del Holding
          </h2>
          
          <p className="text-center text-xl text-gray-700 mb-16 max-w-3xl mx-auto font-body">
            El holding opera bajo dos empresas enterprise:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Smart Infrastructure */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-primary font-heading">
                PERCORP Smart Infrastructure
              </h3>
              
              <p className="text-gray-700 leading-relaxed font-body">
                Diseño, ingeniería, construcción y operación de infraestructura física inteligente: 
                espacios corporativos, comerciales y multisede.
              </p>
            </motion.div>

            {/* Enterprise Technology */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-primary font-heading">
                PERCORP Enterprise Technology
              </h3>
              
              <p className="text-gray-700 leading-relaxed font-body">
                Conectividad, cloud, IT, apps, automatización y operación digital para empresas 
                que necesitan plataformas modernas y resilientes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

