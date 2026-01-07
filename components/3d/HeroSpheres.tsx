'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

// Shader para el efecto de cristal líquido
const vertexShader = `
  uniform float uTime;
  uniform float uDistortion;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  
  // Simplex noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    
    vec3 pos = position;
    
    // Distorsión suave tipo líquido
    float noise1 = snoise(pos * 2.0 + uTime * 0.4);
    float noise2 = snoise(pos * 3.0 - uTime * 0.3);
    
    pos += normal * noise1 * uDistortion * 0.15;
    pos += normal * noise2 * uDistortion * 0.1;
    
    vPosition = pos;
    vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShaderBlue = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  
  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float fresnel = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), 2.5);
    
    // Colores azul/cyan/teal
    vec3 deepBlue = vec3(0.0, 0.15, 0.4);
    vec3 cyan = vec3(0.0, 0.85, 0.95);
    vec3 teal = vec3(0.0, 0.6, 0.7);
    vec3 highlight = vec3(1.0, 1.0, 1.0);
    vec3 gold = vec3(0.95, 0.75, 0.35);
    
    // Gradiente basado en posición y tiempo
    float gradient = sin(vPosition.y * 2.0 + uTime * 0.5) * 0.5 + 0.5;
    float swirl = sin(vPosition.x * 3.0 + vPosition.z * 2.0 + uTime * 0.3) * 0.5 + 0.5;
    
    vec3 baseColor = mix(deepBlue, teal, gradient);
    baseColor = mix(baseColor, cyan, fresnel * 0.8);
    baseColor = mix(baseColor, teal, swirl * 0.3);
    
    // Reflejos dorados en los bordes
    baseColor += gold * pow(fresnel, 3.0) * 0.25;
    
    // Highlight especular
    baseColor += highlight * pow(fresnel, 5.0) * 0.4;
    
    // Profundidad interior
    float depth = 1.0 - fresnel;
    baseColor = mix(baseColor, deepBlue * 0.5, depth * 0.3);
    
    gl_FragColor = vec4(baseColor, 1.0);
  }
`

const fragmentShaderRed = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  
  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float fresnel = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), 2.5);
    
    // Colores magenta/rosa/púrpura
    vec3 deepPurple = vec3(0.3, 0.0, 0.4);
    vec3 magenta = vec3(0.95, 0.2, 0.6);
    vec3 pink = vec3(1.0, 0.4, 0.7);
    vec3 highlight = vec3(1.0, 1.0, 1.0);
    vec3 gold = vec3(0.95, 0.75, 0.35);
    
    // Gradiente basado en posición y tiempo
    float gradient = sin(vPosition.y * 2.0 + uTime * 0.5) * 0.5 + 0.5;
    float swirl = sin(vPosition.x * 3.0 + vPosition.z * 2.0 + uTime * 0.3) * 0.5 + 0.5;
    
    vec3 baseColor = mix(deepPurple, magenta, gradient);
    baseColor = mix(baseColor, pink, fresnel * 0.7);
    baseColor = mix(baseColor, magenta, swirl * 0.3);
    
    // Reflejos dorados
    baseColor += gold * pow(fresnel, 3.0) * 0.25;
    
    // Highlight especular
    baseColor += highlight * pow(fresnel, 5.0) * 0.4;
    
    // Profundidad interior
    float depth = 1.0 - fresnel;
    baseColor = mix(baseColor, deepPurple * 0.5, depth * 0.3);
    
    gl_FragColor = vec4(baseColor, 1.0);
  }
`

const fragmentShaderMerged = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  
  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float fresnel = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), 2.5);
    
    // Colores fusionados
    vec3 deepPurple = vec3(0.25, 0.0, 0.35);
    vec3 magenta = vec3(0.9, 0.1, 0.5);
    vec3 blue = vec3(0.2, 0.3, 0.9);
    vec3 red = vec3(1.0, 0.2, 0.3);
    vec3 highlight = vec3(1.0, 1.0, 1.0);
    vec3 gold = vec3(0.95, 0.7, 0.3);
    
    // Rotación del gradiente
    float angle = atan(vPosition.z, vPosition.x) + uTime * 0.2;
    float gradientAngle = sin(angle * 2.0) * 0.5 + 0.5;
    float gradientY = sin(vPosition.y * 2.0 + uTime * 0.3) * 0.5 + 0.5;
    
    vec3 baseColor = mix(magenta, red, gradientAngle);
    baseColor = mix(baseColor, blue, gradientY * 0.4);
    baseColor = mix(baseColor, magenta, fresnel * 0.5);
    
    // Reflejos dorados más intensos
    baseColor += gold * pow(fresnel, 2.5) * 0.35;
    
    // Highlight especular
    baseColor += highlight * pow(fresnel, 4.0) * 0.5;
    
    // Profundidad
    float depth = 1.0 - fresnel;
    baseColor = mix(baseColor, deepPurple * 0.4, depth * 0.25);
    
    gl_FragColor = vec4(baseColor, 1.0);
  }
`

interface LiquidSphereProps {
  position: [number, number, number]
  colorType: 'blue' | 'red' | 'merged'
  scale: number
  visible: boolean
  distortion: number
  opacity?: number
}

function LiquidSphere({ position, colorType, scale, visible, distortion, opacity = 1 }: LiquidSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const fragmentShader = colorType === 'blue' 
    ? fragmentShaderBlue 
    : colorType === 'red' 
    ? fragmentShaderRed 
    : fragmentShaderMerged

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uDistortion: { value: distortion },
  }), [distortion])

  useFrame((state) => {
    if (!meshRef.current || !visible) return

    const time = state.clock.elapsedTime

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time
    }

    // Rotación suave
    meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.15
    meshRef.current.rotation.y = time * 0.15
    meshRef.current.rotation.z = Math.cos(time * 0.15) * 0.1
  })

  if (!visible || scale <= 0) return null

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 128, 128]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          opacity={opacity}
        />
      </mesh>
    </Float>
  )
}

export default function HeroSpheres() {
  const [animationPhase, setAnimationPhase] = useState<'separate' | 'attracting' | 'merging' | 'merged'>('separate')
  const [leftPosition, setLeftPosition] = useState<[number, number, number]>([-3.5, 0, -1])
  const [rightPosition, setRightPosition] = useState<[number, number, number]>([3.5, 0, -1])
  const [mergedScale, setMergedScale] = useState(0)
  const [individualOpacity, setIndividualOpacity] = useState(1)

  useEffect(() => {
    const cycleDuration = 12000

    const interval = setInterval(() => {
      const now = Date.now()
      const cycleProgress = (now % cycleDuration) / cycleDuration

      if (cycleProgress < 0.3) {
        // Separadas (0-30%)
        setAnimationPhase('separate')
        setLeftPosition([-3.5, 0, -1])
        setRightPosition([3.5, 0, -1])
        setMergedScale(0)
        setIndividualOpacity(1)
      } else if (cycleProgress < 0.55) {
        // Atrayéndose (30-55%)
        setAnimationPhase('attracting')
        const attractProgress = (cycleProgress - 0.3) / 0.25
        const eased = attractProgress * attractProgress * (3 - 2 * attractProgress)
        setLeftPosition([THREE.MathUtils.lerp(-3.5, -0.8, eased), 0, THREE.MathUtils.lerp(-1, 0, eased)])
        setRightPosition([THREE.MathUtils.lerp(3.5, 0.8, eased), 0, THREE.MathUtils.lerp(-1, 0, eased)])
        setIndividualOpacity(1)
      } else if (cycleProgress < 0.7) {
        // Fusionándose (55-70%)
        setAnimationPhase('merging')
        const mergeProgress = (cycleProgress - 0.55) / 0.15
        setLeftPosition([-0.8 * (1 - mergeProgress), 0, 0])
        setRightPosition([0.8 * (1 - mergeProgress), 0, 0])
        setMergedScale(mergeProgress * 1.2)
        setIndividualOpacity(1 - mergeProgress)
      } else {
        // Fusionada (70-100%)
        setAnimationPhase('merged')
        setMergedScale(1.2)
        setIndividualOpacity(0)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Environment para reflejos */}
      <Environment preset="night" />

      {/* Iluminación */}
      <ambientLight intensity={0.15} />
      
      {/* Luz principal */}
      <pointLight position={[0, 5, 8]} intensity={1.5} color="#ffffff" />
      
      {/* Luz azul */}
      <pointLight position={[-6, 2, 4]} intensity={2.5} color="#00d4ff" />
      <spotLight position={[-5, 0, 5]} angle={0.5} penumbra={1} intensity={3} color="#00ffff" />
      
      {/* Luz magenta */}
      <pointLight position={[6, 2, 4]} intensity={2.5} color="#ff0066" />
      <spotLight position={[5, 0, 5]} angle={0.5} penumbra={1} intensity={3} color="#ff00aa" />

      {/* Luz dorada inferior */}
      <pointLight position={[0, -4, 3]} intensity={1} color="#ffaa00" />

      {/* Rim lights */}
      <pointLight position={[-4, -2, -2]} intensity={1.5} color="#0066ff" />
      <pointLight position={[4, -2, -2]} intensity={1.5} color="#ff0066" />

      {/* Esfera Azul/Cyan - Izquierda */}
      <LiquidSphere
        position={leftPosition}
        colorType="blue"
        scale={0.9}
        visible={individualOpacity > 0}
        distortion={animationPhase === 'merging' ? 0.6 : 0.25}
        opacity={individualOpacity}
      />

      {/* Esfera Roja/Magenta - Derecha */}
      <LiquidSphere
        position={rightPosition}
        colorType="red"
        scale={0.9}
        visible={individualOpacity > 0}
        distortion={animationPhase === 'merging' ? 0.6 : 0.25}
        opacity={individualOpacity}
      />

      {/* Esfera Fusionada - Centro */}
      <LiquidSphere
        position={[0, 0, 0]}
        colorType="merged"
        scale={mergedScale}
        visible={mergedScale > 0}
        distortion={0.3}
        opacity={1}
      />
    </>
  )
}
