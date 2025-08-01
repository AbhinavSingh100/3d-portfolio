import React, { useRef, useState } from 'react'
import { Text, RoundedBox } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Hero3D() {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Subtle floating animation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = 2.5 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 2.5, 2.1]}>
      {/* Main Title */}
      <Text
        position={[0, 2, 0]}
        fontSize={1.5}
        color="black"
        anchorX="center"
        anchorY="middle"
        fontWeight="800"
        castShadow
        receiveShadow
      >
        Creative
      </Text>

      <Text
        position={[0, 0.3, 0]}
        fontSize={1.5}
        color="#667eea"
        anchorX="center"
        anchorY="middle"
        fontWeight="800"
        castShadow
        receiveShadow
      >
        Developer
      </Text>

      <Text
        position={[0, -1.4, 0]}
        fontSize={1.5}
        color="black"
        anchorX="center"
        anchorY="middle"
        fontWeight="800"
        castShadow
        receiveShadow
      >
        & Designer
      </Text>

      {/* Status Badge */}
      <group position={[0, 3.5, 0]}>
        {/* Badge Background */}
        <mesh castShadow receiveShadow>
          <planeGeometry args={[3, 0.6]} />
          <meshStandardMaterial 
            color="#000000" 
            transparent 
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Badge Text */}
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.3}
          color="#00ff88"
          anchorX="center"
          anchorY="middle"
          fontWeight="600"
        >
          ● Available for work
        </Text>
      </group>

      {/* Description */}
      <Text
        position={[0, -2.8, 0]}
        fontSize={0.4}
        color="black"
        anchorX="center"
        anchorY="middle"
        maxWidth={12}
        textAlign="center"
        lineHeight={1.2}
        castShadow
        receiveShadow
      >
        I craft exceptional digital experiences through innovative{'\n'}
        web development and 3D design.{'\n'}
        Let's bring your ideas to life.
      </Text>

      {/* Interactive Buttons */}
      <group position={[0, -4.5, 0]}>
        {/* Primary Button */}
        <RoundedBox
          position={[-2, 0, 0]}
          args={[3, 0.8, 0.2]}
          radius={0.1}
          smoothness={4}
          castShadow
          receiveShadow
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onClick={() => console.log('View My Work clicked')}
        >
          <meshStandardMaterial 
            color={hovered ? "#7b8ef0" : "#667eea"} 
            transparent 
            opacity={0.9}
          />
        </RoundedBox>
        
        <Text
          position={[-2, 0, 0.06]}
          fontSize={0.3}
          color="black"
          anchorX="center"
          anchorY="middle"
          fontWeight="600"
        >
          View My Work
        </Text>

        {/* Secondary Button */}
        <RoundedBox
          position={[2, 0, 0]}
          args={[3, 0.8, 0.2]}
          radius={0.1}
          smoothness={4}
          castShadow
          receiveShadow
          onClick={() => console.log('Get In Touch clicked')}
        >
          <meshStandardMaterial 
            color="black" 
            transparent 
            opacity={0.1}
          />
        </RoundedBox>
        
        <Text
          position={[2, 0, 0.06]}
          fontSize={0.3}
          color="black"
          anchorX="center"
          anchorY="middle"
          fontWeight="600"
        >
          Get In Touch
        </Text>
      </group>

      {/* Stats Section */}
      <group position={[0, -6, 0]}>
        {/* Left Stat */}
        <group position={[-3, 0, 0]}>
          <Text
            position={[0, 0.3, 0]}
            fontSize={0.8}
            color="black"
            anchorX="center"
            anchorY="middle"
            fontWeight="700"
            castShadow
          >
            50+
          </Text>
          <Text
            position={[0, -0.3, 0]}
            fontSize={0.25}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            PROJECTS
          </Text>
        </group>

        {/* Center Stat */}
        <group position={[0, 0, 0]}>
          <Text
            position={[0, 0.3, 0]}
            fontSize={0.8}
            color="black"
            anchorX="center"
            anchorY="middle"
            fontWeight="700"
            castShadow
          >
            3+
          </Text>
          <Text
            position={[0, -0.3, 0]}
            fontSize={0.25}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            YEARS
          </Text>
        </group>

        {/* Right Stat */}
        <group position={[3, 0, 0]}>
          <Text
            position={[0, 0.3, 0]}
            fontSize={0.8}
            color="black"
            anchorX="center"
            anchorY="middle"
            fontWeight="700"
            castShadow
          >
            ∞
          </Text>
          <Text
            position={[0, -0.3, 0]}
            fontSize={0.25}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            PASSION
          </Text>
        </group>
      </group>
    </group>
  )
}
