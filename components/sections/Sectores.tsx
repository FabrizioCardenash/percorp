'use client'

import { GallerySectores } from '@/components/ui/gallery-sectores'

const sectoresData = [
  {
    id: "corporativo",
    title: "Corporativo",
    description: "Soluciones integrales para grandes empresas y corporaciones multinacionales",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "retail",
    title: "Retail",
    description: "Transformación digital y física para el comercio minorista moderno",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "servicios",
    title: "Servicios",
    description: "Optimización de operaciones para empresas de servicios profesionales",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
  {
    id: "banca",
    title: "Banca y Seguros",
    description: "Infraestructura segura y tecnología para el sector financiero",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&q=80",
  },
  {
    id: "educacion",
    title: "Educación",
    description: "Espacios de aprendizaje innovadores y plataformas educativas",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    id: "salud",
    title: "Salud",
    description: "Infraestructura hospitalaria y sistemas de gestión médica",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    id: "consumo",
    title: "Consumo",
    description: "Soluciones para marcas de consumo masivo y distribución",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: "startups",
    title: "Startups & Scaleups",
    description: "Infraestructura ágil para empresas en crecimiento acelerado",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
  },
]

export default function Sectores() {
  return (
    <GallerySectores
      title="Sectores que Atendemos"
      description="Trabajamos con empresas de diferentes industrias que buscan transformación y crecimiento sostenible"
      items={sectoresData}
    />
  )
}
