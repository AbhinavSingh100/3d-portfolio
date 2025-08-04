import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Jellyfish } from './Jellyfish'
import { OrthographicCamera } from '@react-three/drei'

// The component now accepts the 'inFront' prop
function ThreeDComp({ inFront }) {
  return (
    // The key changes are gl={{ alpha: true }} and eventSource/eventPrefix
    <Canvas 
      camera={{ position: [10, 15, 30], fov: 100 }}
      style={{ height: '100vh', width: '100vw', pointerEvents: 'none' }}
      shadows
      gl={{ alpha: true }} // Makes the canvas background transparent
    >
      <OrthographicCamera makeDefault zoom={35} position={[0, 7, 30]} rotation={[-0.1, 0, 0]} />
      <directionalLight
        castShadow
        position={[5, 10, 50]}
        intensity={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-bias={-0.0001}
      />
      {/* Pass the inFront prop down to the Jellyfish component */}
      <Jellyfish inFront={inFront} />
      
      <Environment preset="forest" />
    </Canvas>
  )
}

export default ThreeDComp
