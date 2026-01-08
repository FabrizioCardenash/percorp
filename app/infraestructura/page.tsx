import { Metadata } from 'next'
import InfraestructuraHeader from '@/components/infraestructura/InfraestructuraHeader'
import InfraestructuraHero from '@/components/infraestructura/InfraestructuraHero'
import Nosotros from '@/components/infraestructura/Nosotros'
import Servicios from '@/components/infraestructura/Servicios'
import PropuestaValor from '@/components/infraestructura/PropuestaValor'
import MetodologiaInfra from '@/components/infraestructura/MetodologiaInfra'
import SectoresInfra from '@/components/infraestructura/SectoresInfra'
import Soluciones from '@/components/infraestructura/Soluciones'
import Proyectos from '@/components/infraestructura/Proyectos'
import FAQInfra from '@/components/infraestructura/FAQInfra'
import ContactoInfra from '@/components/infraestructura/ContactoInfra'
import FooterInfra from '@/components/infraestructura/FooterInfra'

export const metadata: Metadata = {
  title: 'Infraestructura | PERCORP - Arquitectura, Construcción y Gestión de Proyectos',
  description: 'Arquitectura, construcción y gestión de proyectos inmobiliarios con estándar corporativo. Control integral, reducción de costos y transparencia en cada proyecto.',
  keywords: ['arquitectura', 'construcción', 'gestión de proyectos', 'desarrollo inmobiliario', 'oficinas', 'retail', 'infraestructura corporativa'],
  openGraph: {
    title: 'Infraestructura | PERCORP',
    description: 'Arquitectura, construcción y gestión de proyectos para habilitar espacios con estándar corporativo.',
    type: 'website',
    locale: 'es_PE',
  },
}

export default function InfraestructuraPage() {
  return (
    <>
      <InfraestructuraHeader />
      <main>
        <InfraestructuraHero />
        <Nosotros />
        <Servicios />
        <PropuestaValor />
        <MetodologiaInfra />
        <SectoresInfra />
        <Soluciones />
        <Proyectos />
        <FAQInfra />
        <ContactoInfra />
      </main>
      <FooterInfra />
    </>
  )
}

