import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function FloatingParticles({dimensions}) {
  const group = useRef();

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <group ref={group}>
      {[...Array(400)].map((_, i) => (
        <mesh key={i} position={[Math.random() * dimensions.width - dimensions.width / 2, Math.random() * dimensions.height - dimensions.height / 2, Math.random() * dimensions.depth - dimensions.depth / 2]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#00F291" transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

export default FloatingParticles;