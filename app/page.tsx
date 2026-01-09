import { Metadata } from 'next'
import EnergiaHeader from '@/components/energia/EnergiaHeader'
import EnergiaHero from '@/components/energia/EnergiaHero'
import BarraConfianza from '@/components/energia/BarraConfianza'
import QueHacemos from '@/components/energia/QueHacemos'
import Paquetes from '@/components/energia/Paquetes'
import Metodologia from '@/components/energia/Metodologia'
import CapaDigital from '@/components/energia/CapaDigital'
import Industrias from '@/components/energia/Industrias'
import Casos from '@/components/energia/Casos'
import FAQ from '@/components/energia/FAQ'
import ContactoEnergia from '@/components/energia/ContactoEnergia'
import FooterEnergia from '@/components/energia/FooterEnergia'

export const metadata: Metadata = {
  title: 'PERCORP Energía | Infraestructura Eléctrica y Optimización Energética',
  description: 'Diseñamos e implementamos infraestructura eléctrica, medición avanzada y optimización energética con enfoque llave en mano. Ahorro verificable, resiliencia operacional y control digital.',
  keywords: ['energía inteligente', 'infraestructura eléctrica', 'optimización energética', 'submetering', 'eficiencia energética', 'continuidad operacional', 'PERCORP'],
  openGraph: {
    title: 'PERCORP Energía | Infraestructura Eléctrica y Optimización Energética',
    description: 'Infraestructura eléctrica, medición avanzada y optimización energética llave en mano.',
    type: 'website',
    locale: 'es_PE',
  },
}

export default function Home() {
  return (
    <>
      <EnergiaHeader />
      <main>
        <EnergiaHero />
        <BarraConfianza />
        <QueHacemos />
        <Paquetes />
        <Metodologia />
        <CapaDigital />
        <Industrias />
        <Casos />
        <FAQ />
        <ContactoEnergia />
      </main>
      <FooterEnergia />
    </>
  )
}
