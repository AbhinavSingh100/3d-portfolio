import React, { useRef, useState } from 'react'
import { Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const Navbar3D = ({x, y, z}) => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [activeItem, setActiveItem] = useState('home') // Track active/selected item

  const navItems = [
    { id: 'home', icon: '🏠', position: [-4, 0, 0.06], action: () => {
      console.log('Home clicked')
      setActiveItem('home')
    }},
    { id: 'blogs', icon: '📝', position: [-2, 0, 0.06], action: () => {
      console.log('Blogs clicked')
      setActiveItem('blogs')
    }},
    { id: 'github', icon: '⚡', position: [0, 0, 0.06], action: () => {
      console.log('GitHub clicked')
      setActiveItem('github')
    }},
    { id: 'twitter', icon: '🐦', position: [2, 0, 0.06], action: () => {
      console.log('Twitter clicked')
      setActiveItem('twitter')
    }},
    { id: 'email', icon: '📧', position: [4, 0, 0.06], action: () => {
      console.log('Email clicked')
      setActiveItem('email')
    }}
  ]

  const getItemColor = (itemId) => {
    if (activeItem === itemId) return "#00ff88"      // Green for active
    if (hoveredItem === itemId) return "#667eea"     // Blue for hover
    return "transparent"                             // Transparent for default
  }

  const getItemOpacity = (itemId) => {
    if (activeItem === itemId) return 0.8           // Strong opacity for active
    if (hoveredItem === itemId) return 0.3          // Medium opacity for hover
    return 0.0                                      // Transparent for default
  }

  const getIconColor = (itemId) => {
    if (activeItem === itemId) return "#ffffff"     // White for active
    if (hoveredItem === itemId) return "#ffffff"    // White for hover
    return "#888888"                                // Gray for default
  }

  return (
    <group position={[x, y, z]}>
      {/* Navbar Background */}
      <RoundedBox 
        args={[10, 1.5, 0.15]} 
        radius={0.5} 
        smoothness={8}
        castShadow 
        receiveShadow
      >
        <meshStandardMaterial 
          color="#1a1a1a" 
          transparent 
          opacity={0.9}
          roughness={1.0}
          metalness={0.0}
        />
      </RoundedBox>

      {/* Navigation Items */}
      {navItems.map((item) => (
        <group key={item.id} position={item.position}>
          {/* Hover/Active Background */}
          <RoundedBox
            args={[1.5, 1, 0.5]}
            radius={0.15}
            smoothness={0}
            onPointerEnter={(e) => {
              e.stopPropagation()
              setHoveredItem(item.id)
            }}
            onPointerLeave={(e) => {
              e.stopPropagation()
              setHoveredItem(null)
            }}
            onClick={(e) => {
              e.stopPropagation()
              item.action()
            }}
          >
            <meshStandardMaterial
              color={getItemColor(item.id)}
              transparent
              opacity={getItemOpacity(item.id)}
              roughness={1.0}
              metalness={0.0}
            />
          </RoundedBox>

          {/* Icon */}
          <Text
            position={[0, 0, 0.03]}
            fontSize={0.4}
            color={getIconColor(item.id)}
            anchorX="center"
            anchorY="middle"
            raycast={() => null} // Disable raycast to prevent hover conflicts
          >
            {item.icon}
          </Text>
        </group>
      ))}
    </group>
  )
}

export default Navbar3D