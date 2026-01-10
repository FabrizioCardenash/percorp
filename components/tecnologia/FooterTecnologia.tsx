'use client'

import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'

export default function FooterTecnologia() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2 mb-2">
              <span className="text-xl font-heading font-bold text-white">PERCORP</span>
              <span className="text-sm font-body text-pink-400">TECNOLOGÍA</span>
            </Link>
            <p className="text-white/50 font-body text-sm">
              Data Analytics & Dashboards | Microsoft Fabric/Azure
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/company/percorp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-pink-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:tecnologia@percorp.com.pe"
              className="text-white/50 hover:text-pink-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white/40 font-body text-xs">
              © {new Date().getFullYear()} PERCORP. Todos los derechos reservados.
            </p>
            <Link href="/privacidad" className="text-white/40 font-body text-xs hover:text-white/60 transition-colors">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

