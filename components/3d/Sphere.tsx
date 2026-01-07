'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface SphereProps {
  position: [number, number, number]
  color: string
  secondaryColor: string
  scale: number
  distort: number
  speed: number
  roughness?: number
  metalness?: number
}

export default function Sphere({
  position,
  color,
  secondaryColor,
  scale,
  distort,
  speed,
  roughness = 0.1,
  metalness = 0.8,
}: SphereProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Create gradient-like color
  const gradientColor = useMemo(() => {
    return new THREE.Color(color)
  }, [color])

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={gradientColor}
        envMapIntensity={1.5}
        clearcoat={1}
        clearcoatRoughness={0}
        roughness={roughness}
        metalness={metalness}
        distort={distort}
        speed={speed}
        // @ts-expect-error - iridescence props exist in newer Three.js
        iridescence={0.3}
        iridescenceIOR={1.3}
      />
    </mesh>
  )
}

