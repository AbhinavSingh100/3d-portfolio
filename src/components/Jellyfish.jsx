// Jellyfish.jsx
import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// The component now accepts a prop to determine its rendering layer
export function Jellyfish({ inFront }) {
  const { scene } = useGLTF('src/assets/3d-assets/scene.gltf')
  const jelly1Ref = useRef()
  const jelly2Ref = useRef()

  // We create two separate clones from the loaded scene
  const jelly1 = scene.clone();
  const jelly2 = scene.clone();

  // Enable shadows on cloned instances
  useEffect(() => {
    [jelly1, jelly2].forEach(jelly => {
      jelly.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    })
  }, [jelly1, jelly2])

  useFrame(({ clock }) => {
    if (!jelly1Ref.current || !jelly2Ref.current) return
    
    const t = clock.getElapsedTime()
    const radius = 20
    const speed = 0.5
    
    // --- Jellyfish 1 ---
    const angle1 = t * speed
    const x1 = Math.cos(angle1) * radius
    const z1 = Math.sin(angle1) * radius
    jelly1Ref.current.position.set(x1, 5, z1)
    // Visibility Logic: Only show if its Z position matches the layer's purpose
    // z > 0 is closer to the camera (front layer)
    // z <= 0 is further away from the camera (back layer)
    jelly1Ref.current.visible = inFront ? z1 > 0 : z1 <= 0;


    // --- Jellyfish 2 (opposite side) ---
    const angle2 = angle1 + Math.PI
    const x2 = Math.cos(angle2) * radius
    const z2 = Math.sin(angle2) * radius
    jelly2Ref.current.position.set(x2, 5, z2)
    // Apply the same visibility logic
    jelly2Ref.current.visible = inFront ? z2 > 0 : z2 <= 0;
    

    // --- Rotation Logic (remains the same) ---
    const radial1 = new THREE.Vector3(x1, 0, z1)
    const tangent1 = radial1.clone().applyAxisAngle(new THREE.Vector3(0, -1, 0), Math.PI / 2 + 0.5).normalize()
    jelly1Ref.current.up.copy(tangent1)
    jelly1Ref.current.lookAt(jelly1Ref.current.position.clone().add(new THREE.Vector3(0, 1, 0)))

    const radial2 = new THREE.Vector3(x2, 0, z2)
    const tangent2 = radial2.clone().applyAxisAngle(new THREE.Vector3(0, -1, 0), Math.PI / 2 + 0.5).normalize()
    jelly2Ref.current.up.copy(tangent2)
    jelly2Ref.current.lookAt(jelly2Ref.current.position.clone().add(new THREE.Vector3(0, 1, 0)))
  })

  return (
    <>
      <primitive ref={jelly1Ref} object={jelly1} scale={2.5} castShadow />
      <primitive ref={jelly2Ref} object={jelly2} scale={2.5} castShadow />
    </>
  )
}
