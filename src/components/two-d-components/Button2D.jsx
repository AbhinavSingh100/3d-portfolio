import React from 'react'

const Button2D = ({ pos, size, text, onClick, color }) => {
  return (
    <>
    <RoundedBox
        position={pos}
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
    </>
  )
}

export default Button2D