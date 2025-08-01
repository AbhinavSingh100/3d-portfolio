// JellyfishScene.jsx
import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Jellyfish() {
  const jellyfish = useGLTF('src/assets/3d-assets/scene.gltf')
  const jelly1Ref = useRef()
  const jelly2Ref = useRef()

  // Enable shadows on cloned instances
  useEffect(() => {
    if (jelly1Ref.current && jelly2Ref.current) {
      [jelly1Ref.current, jelly2Ref.current].forEach(ref => {
        ref.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })
      })
    }
  }, [jellyfish])

  useFrame(({ clock }) => {
    if (!jelly1Ref.current || !jelly2Ref.current) return
    
    const t = clock.getElapsedTime()
    const radius = 20
    const speed = 0.5
    // Jellyfish 1
    const angle1 = t * speed
    const x1 = Math.cos(angle1) * radius
    const z1 = Math.sin(angle1) * radius
    jelly1Ref.current.position.set(x1, 5, z1)

    // Jellyfish 1 — look at the direction of movement
    const radial1 = new THREE.Vector3(x1, 0, z1)
    const tangent1 = radial1.clone().applyAxisAngle(new THREE.Vector3(0, -1, 0), Math.PI / 2 + 0.5).normalize()
    jelly1Ref.current.up.copy(tangent1)
    jelly1Ref.current.lookAt(jelly1Ref.current.position.clone().add(new THREE.Vector3(0, 1, 0)))

    // Jellyfish 2 — opposite side
    const angle2 = angle1 + Math.PI
    const x2 = Math.cos(angle2) * radius
    const z2 = Math.sin(angle2) * radius
    jelly2Ref.current.position.set(x2, 5, z2)

    // Jellyfish 2 — look at the direction of movement
    const radial2 = new THREE.Vector3(x2, 0, z2)
    const tangent2 = radial2.clone().applyAxisAngle(new THREE.Vector3(0, -1, 0), Math.PI / 2 + 0.5).normalize()
    jelly2Ref.current.up.copy(tangent2)
    jelly2Ref.current.lookAt(jelly2Ref.current.position.clone().add(new THREE.Vector3(0, 1, 0)))

  })

  return (
    <>
      <primitive ref={jelly1Ref} object={jellyfish.scene.clone()} scale={2.5} castShadow />
      <primitive ref={jelly2Ref} object={jellyfish.scene.clone()} scale={2.5} castShadow />
    </>
  )
}
