'use client'

import { HowItWorks } from '@/components/ui/how-it-works'
import { ClipboardCheck, Compass, Rocket } from 'lucide-react'

export default function ComoTrabajamos() {
  const stepsData = [
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Diagnóstico y Estrategia",
      description:
        "Entendemos la operación física y digital del cliente para definir la mejor ruta para escalar.",
      benefits: [
        "Análisis profundo de la operación actual",
        "Identificación de oportunidades de mejora",
        "Definición de arquitectura estratégica",
        "Roadmap de implementación personalizado",
      ],
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Co-creación y Ejecución",
      description:
        "Diseñamos con visión, data y experiencia multisector. Ejecutamos con velocidad y estándares enterprise.",
      benefits: [
        "Design thinking aplicado",
        "PMO dedicado al proyecto",
        "Control de calidad en cada fase",
        "Comunicación transparente y continua",
      ],
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Operación y Continuidad",
      description:
        "Garantizamos la continuidad operativa con soporte, mantenimiento, SLAs y reporting.",
      benefits: [
        "Soporte técnico 24/7",
        "Mantenimiento preventivo y correctivo",
        "SLAs garantizados",
        "Reportes de performance mensuales",
      ],
    },
  ]

  return (
    <HowItWorks
      title="Cómo Trabajamos"
      subtitle="Un proceso estructurado de 3 fases para garantizar resultados excepcionales y escalables"
      steps={stepsData}
    />
  )
}
