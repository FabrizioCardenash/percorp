'use client'

import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei'
import HeroSpheres from './HeroSpheres'

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    </div>
  )
}

function SimpleFallback() {
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="flex gap-32">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 animate-pulse blur-sm opacity-80" />
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 animate-pulse blur-sm opacity-80" />
      </div>
    </div>
  )
}

export default function Scene() {
  const [dpr, setDpr] = useState(1.5)
  const [isLowPerformance, setIsLowPerformance] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const checkPerformance = () => {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      
      if (!gl) {
        setIsLowPerformance(true)
        return
      }

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      
      if (isMobile) {
        setDpr(1)
      }
    }

    checkPerformance()
  }, [])

  if (!isClient) {
    return <LoadingFallback />
  }

  if (isLowPerformance) {
    return <SimpleFallback />
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        style={{ background: '#000000' }}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(Math.min(2, dpr + 0.5))}
          onDecline={() => setDpr(Math.max(0.5, dpr - 0.5))}
        >
          <Suspense fallback={null}>
            <HeroSpheres />
            <Preload all />
          </Suspense>
        </PerformanceMonitor>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
    </div>
  )
}
