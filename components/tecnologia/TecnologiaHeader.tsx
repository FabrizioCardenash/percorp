'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Por qué', href: '#porque' },
  { name: 'Entregables', href: '#entregables' },
  { name: 'Casos de uso', href: '#casos' },
  { name: 'Metodología', href: '#metodologia' },
  { name: 'Arquitectura', href: '#arquitectura' },
  { name: 'Paquetes', href: '#paquetes' },
  { name: 'Contacto', href: '#contacto' },
]

export default function TecnologiaHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl md:text-2xl font-heading font-bold text-white">
                PERCORP
              </span>
              <span className="text-xs md:text-sm font-body text-pink-400 tracking-wider">
                TECNOLOGÍA
              </span>
            </Link>

            {/* Nav Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-body text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <a
                href="#contacto"
                className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium font-body text-white bg-pink-500 hover:bg-pink-400 transition-all duration-300 rounded-lg"
              >
                Agendar diagnóstico
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white"
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
              className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
            >
              <nav className="container-custom py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-body text-white/80 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium font-body text-white bg-pink-500 hover:bg-pink-400 transition-all duration-300 rounded-lg mt-4"
                >
                  Agendar diagnóstico
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

