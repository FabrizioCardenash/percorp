import { Metadata } from 'next'
import EquipamientoHeader from '@/components/equipamiento/EquipamientoHeader'
import EquipamientoHero from '@/components/equipamiento/EquipamientoHero'
import ProblemasEquip from '@/components/equipamiento/ProblemasEquip'
import PropuestaValorEquip from '@/components/equipamiento/PropuestaValorEquip'
import ServiciosEquip from '@/components/equipamiento/ServiciosEquip'
import MetodologiaEquip from '@/components/equipamiento/MetodologiaEquip'
import DiferenciadoresEquip from '@/components/equipamiento/DiferenciadoresEquip'
import SectoresEquip from '@/components/equipamiento/SectoresEquip'
import CasosEquip from '@/components/equipamiento/CasosEquip'
import FAQEquip from '@/components/equipamiento/FAQEquip'
import ContactoEquip from '@/components/equipamiento/ContactoEquip'
import FooterEquip from '@/components/equipamiento/FooterEquip'

export const metadata: Metadata = {
  title: 'PERCORP Tecnología | Equipamiento & Integración - Laptops, Salas AV, Cableado',
  description: 'Tecnología lista para operar: laptops, periféricos, salas de reuniones, auditorios y cableado. Abastecemos, instalamos y dejamos funcionando tu ecosistema de trabajo.',
  keywords: ['equipamiento corporativo', 'laptops empresariales', 'salas de reuniones', 'videoconferencia', 'Teams', 'Zoom', 'cableado estructurado', 'soporte TI'],
  openGraph: {
    title: 'PERCORP Tecnología | Equipamiento & Integración',
    description: 'Equipamiento, integración e implementación end-to-end para tu ecosistema de trabajo.',
    type: 'website',
    locale: 'es_PE',
  },
}

export default function EquipamientoPage() {
  return (
    <>
      <EquipamientoHeader />
      <main>
        <EquipamientoHero />
        <ProblemasEquip />
        <PropuestaValorEquip />
        <ServiciosEquip />
        <MetodologiaEquip />
        <DiferenciadoresEquip />
        <SectoresEquip />
        <CasosEquip />
        <FAQEquip />
        <ContactoEquip />
      </main>
      <FooterEquip />
    </>
  )
}

