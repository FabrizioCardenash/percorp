import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Neue Machina - Para títulos/headers
// Si tienes los archivos de fuente, descomenta esto y comenta el fallback
/*
const neueMachina = localFont({
  src: [
    {
      path: '../public/fonts/NeueMachina-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMachina-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMachina-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMachina-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueMachina-Ultrabold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-neue-machina',
  display: 'swap',
})
*/

// Aptos - Para cuerpo de texto
// Si tienes los archivos de fuente, descomenta esto y comenta el fallback
/*
const aptos = localFont({
  src: [
    {
      path: '../public/fonts/Aptos-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aptos-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aptos-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aptos-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aptos',
  display: 'swap',
})
*/

// ============================================
// FALLBACK: Google Fonts similares
// Usamos Space Grotesk como alternativa a Neue Machina
// y DM Sans como alternativa a Aptos
// Elimina esto cuando tengas las fuentes originales
// ============================================
import { Space_Grotesk, DM_Sans } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-neue-machina', // Usamos el mismo nombre de variable
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-aptos', // Usamos el mismo nombre de variable
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})
// ============================================

export const metadata: Metadata = {
  title: 'PERCORP | Holding Empresarial',
  description: 'Un holding diseñado para construir el futuro de las empresas. Integramos infraestructura inteligente, tecnología empresarial y ejecución de clase mundial.',
  keywords: 'holding empresarial, infraestructura inteligente, tecnología empresarial, PERCORP, smart infrastructure, enterprise technology',
  openGraph: {
    title: 'PERCORP | Holding Empresarial',
    description: 'Integramos infraestructura inteligente, tecnología empresarial y ejecución de clase mundial.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="es" 
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
      // Cuando tengas las fuentes originales, cambia a:
      // className={`${neueMachina.variable} ${aptos.variable}`}
    >
      <body className="font-body antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
