"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export interface SectorItem {
  id: string
  title: string
  description: string
  image: string
}

export interface GallerySectoresProps {
  title?: string
  description?: string
  items: SectorItem[]
}

const GallerySectores = ({
  title = "Sectores que Atendemos",
  description = "Trabajamos con empresas de diferentes industrias que buscan transformación y crecimiento",
  items,
}: GallerySectoresProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!carouselApi) {
      return
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }
    updateSelection()
    carouselApi.on("select", updateSelection)
    return () => {
      carouselApi.off("select", updateSelection)
    }
  }, [carouselApi])

  // Mouse tracking for carousel movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselContainerRef.current || !carouselApi) return

    const container = carouselContainerRef.current
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width

    // Calculate position percentage (0 to 1)
    const positionPercent = x / width

    // Calculate which slide to show based on cursor position
    const totalSlides = items.length
    const targetSlide = Math.floor(positionPercent * totalSlides)
    
    // Clamp to valid range
    const clampedSlide = Math.max(0, Math.min(targetSlide, totalSlides - 1))
    
    // Only scroll if different from current
    if (clampedSlide !== currentSlide) {
      carouselApi.scrollTo(clampedSlide)
    }
  }

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
              {title}
            </h2>
            <p className="max-w-lg text-gray-400 font-body text-lg">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev()
              }}
              disabled={!canScrollPrev}
              className="disabled:opacity-30 text-white border border-white/20 hover:border-white/40"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext()
              }}
              disabled={!canScrollNext}
              className="disabled:opacity-30 text-white border border-white/20 hover:border-white/40"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div 
        ref={carouselContainerRef}
        onMouseMove={handleMouseMove}
        className="w-full cursor-ew-resize"
      >
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-4 md:ml-[max(4rem,calc(50vw-600px))] mr-4 md:mr-[max(2rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[280px] md:max-w-[320px] lg:max-w-[360px] pl-4"
              >
                <div className="group rounded-xl cursor-pointer">
                  <div className="relative h-full min-h-[380px] md:min-h-[420px] max-w-full overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white">
                      <h3 className="mb-2 text-2xl font-heading font-bold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 font-body line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Visual hint */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm font-body">
            ← Mueve el cursor para explorar →
          </p>
        </div>
        
        {/* Dots indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-6" : "bg-white/30"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { GallerySectores }
