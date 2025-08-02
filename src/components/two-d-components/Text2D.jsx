import React from 'react'
import { Text } from '@react-three/drei'

const Text2D = ({ pos, fontSize, font, color,  text}) => {
  return (
    <Text
        position={pos}
        fontSize={fontSize}
        lineHeight={0.9}
        color={color}
        anchorX="center"
        anchorY="middle"
        fontWeight="700"
        font={font}
    >
        {text}
    </Text>
  )
}

export default Text2D