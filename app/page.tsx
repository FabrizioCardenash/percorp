import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import VisionSection from '@/components/sections/VisionSection'
import QuienesSomos from '@/components/sections/QuienesSomos'
import NuestrasEmpresas from '@/components/sections/NuestrasEmpresas'
import NuestroModelo from '@/components/sections/NuestroModelo'
import Filosofia from '@/components/sections/Filosofia'
import Sectores from '@/components/sections/Sectores'
import ComoTrabajamos from '@/components/sections/ComoTrabajamos'
import CTAFinal from '@/components/sections/CTAFinal'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VisionSection />
        <QuienesSomos />
        <NuestrasEmpresas />
        <NuestroModelo />
        <Filosofia />
        <Sectores />
        <ComoTrabajamos />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
