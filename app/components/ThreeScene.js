'use client'

import { useRef, useMemo, useEffect, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ColorfulStars({ isDark = true, ...props }) {
  const ref = useRef()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(2000 * 3)
    const colors = new Float32Array(2000 * 3)
    
    // Color palettes for light and dark themes
    const darkPalette = [
      [1.0, 0.6, 0.8], // Pink
      [0.6, 0.8, 1.0], // Light blue
      [0.8, 0.6, 1.0], // Purple
      [1.0, 0.8, 0.4], // Gold
      [0.4, 1.0, 0.8], // Cyan
      [1.0, 0.4, 0.6], // Rose
      [0.6, 1.0, 0.6], // Light green
    ]
    
    const lightPalette = [
      [0.8, 0.2, 0.6], // Deep pink
      [0.2, 0.4, 0.9], // Deep blue
      [0.6, 0.2, 0.8], // Deep purple
      [0.9, 0.6, 0.1], // Orange
      [0.1, 0.7, 0.6], // Teal
      [0.8, 0.1, 0.3], // Deep rose
      [0.3, 0.7, 0.3], // Forest green
    ]
    
    const palette = isDark ? darkPalette : lightPalette
    
    for (let i = 0; i < 2000; i++) {
      // Generate positions
      const radius = Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      
      // Generate colors - pick random color from palette
      const colorIndex = Math.floor(Math.random() * palette.length)
      const baseColor = palette[colorIndex]
      
      // Add some brightness variation
      const brightness = 0.7 + Math.random() * 0.3
      
      colors[i * 3] = baseColor[0] * brightness
      colors[i * 3 + 1] = baseColor[1] * brightness
      colors[i * 3 + 2] = baseColor[2] * brightness
    }
    
    // Set attributes properly
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    
    return geometry
  }, [isDark])
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  useFrame((state, delta) => {
    if (ref.current) {
      const targetRotationX = mousePosition.y * 0.1
      const targetRotationY = mousePosition.x * 0.1
      
      ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.05
      ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 0.05
      ref.current.rotation.z += delta / 20
    }
  })
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref} geometry={pointsGeometry} frustumCulled={false} {...props}>
        <pointsMaterial
          transparent
          size={isDark ? 0.008 : 0.010}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors={true}
          opacity={isDark ? 0.8 : 0.9}
        />
      </points>
    </group>
  )
}

// Simple fallback mesh in case Points don't work
function FallbackStars({ isDark = true }) {
  const meshRef = useRef()
  
  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta / 10
      meshRef.current.rotation.y -= delta / 15
    }
  })
  
  const starData = useMemo(() => {
    const temp = []
    const colors = isDark 
      ? ['#ff6b9d', '#a8e6cf', '#c7a8ff', '#ffd93d', '#6bcfff']
      : ['#d63384', '#0d6efd', '#6f42c1', '#fd7e14', '#20c997']
    
    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      temp.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ],
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    return temp
  }, [isDark])
  
  return (
    <group ref={meshRef}>
      {starData.map((star, i) => (
        <mesh key={i} position={star.position}>
          <sphereGeometry args={[0.003, 4, 4]} />
          <meshBasicMaterial color={star.color} />
        </mesh>
      ))}
    </group>
  )
}

function SceneContent({ isDark }) {
  return (
    <>
      <Suspense fallback={<FallbackStars isDark={isDark} />}>
        <ColorfulStars isDark={isDark} />
      </Suspense>
      
      {/* Add some ambient light for better visibility */}
      <ambientLight intensity={0.3} />
    </>
  )
}

export default function ThreeScene({ isDark = true }) {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '100vh' }}>
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent isDark={isDark} />
      </Canvas>
    </div>
  )
}