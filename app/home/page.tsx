import { Metadata } from 'next'
import ControlHeader from '@/components/control-operativo/ControlHeader'
import ControlHero from '@/components/control-operativo/ControlHero'
import DolorGerencial from '@/components/control-operativo/DolorGerencial'
import LaSolucion from '@/components/control-operativo/LaSolucion'
import Resultados from '@/components/control-operativo/Resultados'
import PorQuePERCORP from '@/components/control-operativo/PorQuePERCORP'
import CasosDeUso from '@/components/control-operativo/CasosDeUso'
import ComoTrabajamos from '@/components/control-operativo/ComoTrabajamos'
import Ofertas from '@/components/control-operativo/Ofertas'
import LeadMagnet from '@/components/control-operativo/LeadMagnet'
import Contacto from '@/components/control-operativo/Contacto'
import FAQ from '@/components/control-operativo/FAQ'
import CTAFinal from '@/components/control-operativo/CTAFinal'
import ControlFooter from '@/components/control-operativo/ControlFooter'

export const metadata: Metadata = {
  title: 'PERCORP | Sistema de Control Operativo para tu negocio',
  description: 'Implementamos un sistema simple de control: tablero de indicadores, rutina de gestión y automatización. Resultados visibles en semanas.',
  keywords: ['control operativo', 'tablero de indicadores', 'KPIs', 'automatización', 'gestión empresarial', 'PERCORP'],
  openGraph: {
    title: 'Control real para tu negocio | PERCORP',
    description: 'Menos sorpresas, mejores decisiones. Tablero + rutina + automatización, llave en mano.',
    type: 'website',
    locale: 'es_PE',
  },
}

export default function DesarrolloPage() {
  return (
    <>
      <ControlHeader />
      <main>
        <ControlHero />
        <DolorGerencial />
        <LaSolucion />
        <Resultados />
        <PorQuePERCORP />
        <CasosDeUso />
        <ComoTrabajamos />
        <Ofertas />
        <LeadMagnet />
        <Contacto />
        <FAQ />
        <CTAFinal />
      </main>
      <ControlFooter />
    </>
  )
}
