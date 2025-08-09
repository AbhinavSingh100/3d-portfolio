import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Jellyfish } from './Jellyfish'
import { OrthographicCamera } from '@react-three/drei'
import * as THREE from 'three'
import FloatingParticles from './sections/FloatingParticles'

// The component now accepts the 'inFront' prop
function ThreeDComp({ inFront }) {
  return (
    // The key changes are gl={{ alpha: true }} and eventSource/eventPrefix
    <Canvas 
      camera={{ position: [10, 15, 30], fov: 100 }}
      style={{ height: '100vh', width: '100vw', pointerEvents: 'none' }}
      shadows
      gl={{ alpha: true }}
    >
      <OrthographicCamera makeDefault zoom={35} position={[0, 7, 30]} rotation={[-0.1, 0, 0]} />
      <ambientLight intensity={0.2} />
      {/* Add ambient light for general illumination */}
      <directionalLight
        castShadow
        position={[0, 50, 0]}
        rotation={[-90, 0, 0]}
        intensity={25}
        color="#6C807B"  // or "#8A2BE2" for violet tones
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <fog attach="fog" args={["#0e0e1a", 10, 40]} />
      {/* Pass the inFront prop down to the Jellyfish component */}
      <FloatingParticles dimensions={{ width: 40, height: 40, depth: 40 }} />
      <Jellyfish inFront={inFront} />


    </Canvas>
  )
}

export default ThreeDComp
