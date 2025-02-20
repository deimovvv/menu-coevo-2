import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PeperroniTest(props) {
  const { nodes, materials } = useGLTF('/models/pepperonitest.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  )
}

useGLTF.preload('/pepperonitest.glb')
