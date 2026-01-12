'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const empresas = [
  { name: 'Infraestructura', href: '/infraestructura', description: 'Arquitectura, construcción y gestión', color: '#7800FF' },
  { name: 'Energía', href: '/energia', description: 'Infraestructura eléctrica y optimización', color: '#FFC700' },
  { name: 'Equipamiento', href: '/equipamiento', description: 'Laptops, salas AV e integración', color: '#FF6B00' },
  { name: 'Tecnología', href: '/tecnologia', description: 'Data Analytics & Dashboards', color: '#1E5BBF' },
  { name: 'Conectividad', href: '/conectividad', description: 'Redes y comunicaciones', color: '#00B4D8' },
  { name: 'Automatización', href: '/automatizacion', description: 'Control y sistemas inteligentes', color: '#10B981' },
]

const navItems = [
  { name: 'Solución', href: '#solucion' },
  { name: 'Casos de uso', href: '#casos-uso' },
  { name: 'Cómo trabajamos', href: '#como-trabajamos' },
  { name: 'Ofertas', href: '#ofertas' },
  { name: 'FAQ', href: '#faq' },
]

export default function ControlHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEmpresasOpen, setIsEmpresasOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A0F]/95 backdrop-blur-md shadow-lg border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-xl md:text-2xl font-heading font-bold text-white">
              PERCORP
            </span>
          </Link>

          {/* Nav Desktop */}
          <nav className="hidden xl:flex items-center gap-1">
            {/* Dropdown Empresas */}
            <div 
              className="relative"
              onMouseEnter={() => setIsEmpresasOpen(true)}
              onMouseLeave={() => setIsEmpresasOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-body transition-colors ${
                  isEmpresasOpen ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                Empresas
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isEmpresasOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isEmpresasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-[#0A0A0F]/98 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                  >
                    {empresas.map((empresa) => (
                      <Link
                        key={empresa.name}
                        href={empresa.href}
                        className="block px-5 py-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      >
                        <span 
                          className="block font-body font-medium"
                          style={{ color: empresa.color }}
                        >
                          {empresa.name}
                        </span>
                        <span className="block text-white/40 text-xs mt-0.5">{empresa.description}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Items */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-body text-white/60 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTAs + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href="#checklist"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-medium font-body text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300 rounded-lg"
            >
              Recibir Checklist
            </a>
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium font-body text-black bg-[#00F5D4] hover:bg-[#00D4B8] transition-all duration-300 rounded-lg"
            >
              Solicitar Diagnóstico
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0A0A0F]/98 backdrop-blur-md border-t border-white/10"
          >
            <nav className="container-custom py-6">
              {/* Empresas Section */}
              <div className="mb-6">
                <p className="text-white/40 text-xs font-body uppercase tracking-wider mb-3">Nuestras Empresas</p>
                <div className="grid grid-cols-2 gap-2">
                  {empresas.map((empresa) => (
                    <Link
                      key={empresa.name}
                      href={empresa.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <span 
                        className="block font-body font-medium text-sm"
                        style={{ color: empresa.color }}
                      >
                        {empresa.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-4" />

              {/* Nav Items */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-base font-body text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* CTAs Mobile */}
              <div className="mt-6 space-y-3">
                <a
                  href="#checklist"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 text-sm font-medium font-body text-white border border-white/20 transition-all duration-300 rounded-lg"
                >
                  Recibir Checklist
                </a>
                <a
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 text-sm font-medium font-body text-black bg-[#00F5D4] hover:bg-[#00D4B8] transition-all duration-300 rounded-lg"
                >
                  Solicitar Diagnóstico
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

