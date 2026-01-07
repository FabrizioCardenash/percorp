'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface AnimatedGlowBoxProps {
  children: React.ReactNode
  className?: string
}

const AnimatedGlowBox = ({ children, className }: AnimatedGlowBoxProps) => {
  return (
    <div className="relative w-full p-[3px] rounded-xl">
      {/* Borde animado con gradiente giratorio */}
      <div 
        className="absolute inset-0 rounded-xl animate-gradient-x"
        style={{
          background: 'linear-gradient(90deg, #402fb5, #cf30aa, #00d4ff, #cf30aa, #402fb5)',
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Glow exterior más visible */}
      <div 
        className="absolute inset-[-4px] rounded-xl blur-lg opacity-70 animate-gradient-x"
        style={{
          background: 'linear-gradient(90deg, #402fb5, #cf30aa, #00d4ff, #cf30aa, #402fb5)',
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Segundo glow para más intensidad */}
      <div 
        className="absolute inset-[-2px] rounded-xl blur-md opacity-80 animate-gradient-x"
        style={{
          background: 'linear-gradient(90deg, #cf30aa, #402fb5, #cf30aa, #00d4ff, #cf30aa)',
          backgroundSize: '200% 200%',
          animationDelay: '-1.5s',
        }}
      />
      
      {/* Contenido con fondo */}
      <div className={cn(
        "relative bg-black rounded-xl w-full z-10",
        className
      )}>
        {children}
      </div>
    </div>
  )
}

export default AnimatedGlowBox
