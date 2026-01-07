'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo y Descripción */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 font-heading">PERCORP</h3>
            <p className="text-gray-400 leading-relaxed mb-6 font-body">
              Holding empresarial especializado en diseñar, construir y operar soluciones que combinan 
              ingeniería, tecnología y gestión para empresas que necesitan ejecutar con velocidad, 
              eficiencia y precisión.
            </p>
          </div>

          {/* Empresas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Nuestras Empresas</h4>
            <ul className="space-y-3">
              <li>
                <a href="/smart-infrastructure" className="text-gray-400 hover:text-accent transition-colors">
                  Smart Infrastructure
                </a>
              </li>
              <li>
                <a href="/enterprise-technology" className="text-gray-400 hover:text-accent transition-colors">
                  Enterprise Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#quienes-somos" className="text-gray-400 hover:text-accent transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#arquitectura" className="text-gray-400 hover:text-accent transition-colors">
                  Arquitectura
                </a>
              </li>
              <li>
                <a href="#modelo" className="text-gray-400 hover:text-accent transition-colors">
                  Nuestro Modelo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} PERCORP Holding. Todos los derechos reservados.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

