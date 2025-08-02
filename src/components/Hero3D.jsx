import React, { useRef, useState } from 'react'
import { Text, RoundedBox, Sphere, Torus, Tetrahedron, Octahedron, Plane } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Hero3D() {
  const groupRef = useRef()
  const octahedronRef = useRef()
  const [hoveredButton, setHoveredButton] = useState(null)

  // Animate the octahedron
  useFrame(({ clock }) => {
    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.3
      octahedronRef.current.rotation.y += 0.015
      octahedronRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return (
    <group position={[0, 2.5, 2.1]}>
      {/* Profile Photo Space */}
      <group position={[-6, 2, 0]} ref={octahedronRef}>
        {/* Point lights to make it glow like a lamp */}
        
        <Octahedron
          args={[2.3]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial 
            color="black"
            roughness={0.1}
            metalness={0.3}
            transparent={true}
            opacity={0.8}
          />
        </Octahedron>
        
        {/* Additional glow effect */}
        <Octahedron
          args={[3]}
          castShadow={false}
          receiveShadow={false}
        >
          <meshBasicMaterial 
            color="black"
            transparent={true}
            opacity={0.2}
          />
        </Octahedron>
      </group>

      {/* Name */}
      <Text
        position={[3, 2, 0]}
        fontSize={2.5}
        lineHeight={0.9}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        fontWeight="700"
        font='src\assets\fonts\uni-sans\Uni Sans Heavy.otf'
        castShadow
        receiveShadow
      >
      Abhinav{`\n`}Singh
      </Text>

      {/* One-liner Description */}
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.6}
        font='src\assets\fonts\uni-sans\Uni Sans Heavy.otf'
        color="#666666"
        anchorX="center"
        anchorY="middle"
        maxWidth={15}
        textAlign="center"
        lineHeight={1.3}
      >
        Full-Stack Developer & 3D Web Enthusiast
      </Text>

      {/* About Section */}
      <group position={[0, -1.5, 0]}>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.7}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          fontWeight="600"
        >
          About
        </Text>
        
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.45}
          color="#444444"
          anchorX="center"
          anchorY="middle"
          maxWidth={18}
          textAlign="center"
          lineHeight={1.5}
        >
          I create immersive digital experiences combining modern{'\n'}
          web technologies with cutting-edge 3D design.{'\n'}
          Passionate about React, Three.js, and innovative UX.
        </Text>
      </group>

      {/* Action Buttons */}
      <group position={[0, -3.5, 0]}>
        {/* Resume Button */}
        <RoundedBox
          position={[-2.8, 0, 0]}
          args={[4.5, 1.2, 0.001]}
          radius={0.3}
          smoothness={8}
          onPointerEnter={() => setHoveredButton('resume')}
          onPointerLeave={() => setHoveredButton(null)}
          onClick={() => console.log('Download Resume')}
        >
          <meshStandardMaterial 
            color={hoveredButton === 'resume' ? "#333333" : "#000000"}
            roughness={1.0}
            metalness={0.0}
          />
        </RoundedBox>
        
        <Text
          position={[-2.8, 0, 0.01]}
          fontSize={0.45}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="600"
        >
          Resume
        </Text>

        {/* Contact Button */}
        <RoundedBox
          position={[2.8, 0, 0]}
          args={[4.5, 1.2, 0.001]}
          radius={0.3}
          smoothness={8}
          onPointerEnter={() => setHoveredButton('contact')}
          onPointerLeave={() => setHoveredButton(null)}
          onClick={() => console.log('Contact Me')}
        >
          <meshStandardMaterial 
            color={hoveredButton === 'contact' ? "#f0f0f0" : "#ffffff"}
            roughness={1.0}
            metalness={0.0}
          />
        </RoundedBox>
        
        <Text
          position={[2.8, 0, 0.01]}
          fontSize={0.45}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          fontWeight="600"
        >
          Contact Me
        </Text>
      </group>

      {/* Status Badge */}
      <group position={[0, -5.5, 0]}>
        <RoundedBox
          args={[5, 0.8, 0.15]}
          radius={0.4}
          smoothness={8}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial 
            color="#000000"
            transparent 
            opacity={0.1}
            roughness={1.0}
            metalness={0.0}
          />
        </RoundedBox>
        
        <Text
          position={[0, 0, 0.08]}
          fontSize={0.35}
          color="#00aa00"
          anchorX="center"
          anchorY="middle"
          fontWeight="500"
        >
          ● Available for opportunities
        </Text>
      </group>
    </group>
  )
}
