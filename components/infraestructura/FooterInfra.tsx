'use client'

import Link from 'next/link'
import { Linkedin, Mail, Building2 } from 'lucide-react'

export default function FooterInfra() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo y tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Building2 className="w-5 h-5 text-[#7800FF]" />
              <span className="text-xl font-heading font-bold">
                PERCORP
              </span>
            </div>
            <p className="text-white/50 font-body text-sm">
              Desarrollo Inmobiliario & Construcción
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="/privacidad" 
              className="text-white/50 hover:text-white font-body text-sm transition-colors"
            >
              Política de privacidad
            </Link>
            <a 
              href="https://linkedin.com/company/percorp" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:infraestructura@percorp.pe" 
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-body">
            © {currentYear} PERCORP. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

