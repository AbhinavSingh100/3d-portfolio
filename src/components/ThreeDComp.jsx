import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Jellyfish } from './Jellyfish'
import { OrthographicCamera } from '@react-three/drei'
import { Hero3D } from './Hero3D'

import * as THREE from 'three'

function ThreeDComp() {
  return (
    <Canvas camera={{ position: [10, 15, 30], fov: 100 }}
      style={{ height: '100vh', width: '100vw' }}
      shadows>
      <OrthographicCamera makeDefault zoom={30} position={[0, 5, 30]} />
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
      <Jellyfish />
      <Hero3D />
      <mesh position={[0, 2.5, 0]} receiveShadow>
        <boxGeometry args={[20, 30, 4]} />
        <meshStandardMaterial opacity={0.5} transparent/>
      </mesh>
      <OrbitControls  />
      <Environment preset="forest" />
    </Canvas>
  )
}

export default ThreeDComp
