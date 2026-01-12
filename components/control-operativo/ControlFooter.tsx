'use client'

import Link from 'next/link'
import { Mail, MessageCircle, Linkedin } from 'lucide-react'

export default function ControlFooter() {
  return (
    <footer className="relative bg-[#050508] border-t border-white/5 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Title */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-xl font-heading font-bold text-white">
                PERCORP
              </span>
              <span className="text-xs font-body text-white/40 border-l border-white/20 pl-3">
                Sistema de Control Operativo
              </span>
            </Link>
            <p className="text-white/30 text-sm font-body">
              Control real. Mejores decisiones.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:contacto@percorp.com"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-body"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-body"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href="https://linkedin.com/company/percorp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-body"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-4 text-sm font-body">
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
              Términos
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs font-body">
            © {new Date().getFullYear()} PERCORP. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

