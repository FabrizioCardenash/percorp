import { Metadata } from 'next'
import TecnologiaHeader from '@/components/tecnologia/TecnologiaHeader'
import TecnologiaHero from '@/components/tecnologia/TecnologiaHero'
import PorQueOferta from '@/components/tecnologia/PorQueOferta'
import QueEntregamos from '@/components/tecnologia/QueEntregamos'
import CasosDeUso from '@/components/tecnologia/CasosDeUso'
import MetodologiaData from '@/components/tecnologia/MetodologiaData'
import Arquitectura from '@/components/tecnologia/Arquitectura'
import Diferenciadores from '@/components/tecnologia/Diferenciadores'
import PaquetesTec from '@/components/tecnologia/PaquetesTec'
import ContactoTecnologia from '@/components/tecnologia/ContactoTecnologia'
import FooterTecnologia from '@/components/tecnologia/FooterTecnologia'

export const metadata: Metadata = {
  title: 'PERCORP Tecnología | Data Analytics & Dashboards - Microsoft Fabric/Azure',
  description: 'Dashboards bajo demanda y modelos analíticos sobre Microsoft Fabric/Azure para inventarios, incidentes, calidad, telemetría, predictividad y performance del negocio.',
  keywords: ['data analytics', 'dashboards', 'Power BI', 'Microsoft Fabric', 'Azure', 'business intelligence', 'KPIs', 'analítica de datos'],
  openGraph: {
    title: 'PERCORP Tecnología | Data Analytics & Dashboards',
    description: 'Convierte cualquier dato en decisiones: dashboards, analítica y control operativo en semanas, no meses.',
    type: 'website',
    locale: 'es_PE',
  },
}

export default function TecnologiaPage() {
  return (
    <>
      <TecnologiaHeader />
      <main>
        <TecnologiaHero />
        <PorQueOferta />
        <QueEntregamos />
        <CasosDeUso />
        <MetodologiaData />
        <Arquitectura />
        <Diferenciadores />
        <PaquetesTec />
        <ContactoTecnologia />
      </main>
      <FooterTecnologia />
    </>
  )
}

