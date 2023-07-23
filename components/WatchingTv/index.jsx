import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { Hand } from '../Hand'

export const WatchingTv = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('models/watching_tv-v1-compressed.glb')

  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, -Math.PI / 2, 0]}
      position={[0.95, -0.72, 0.67]}
      ref={ref}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.others.geometry}
        material={materials['Material.001']}
        position={[-0.698 + -1.22, 0 + 1.8, -1.364 + 0.9433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main.geometry}
        material={materials['Material.002']}
        position={[-0.339 + -1.22, 0.701 + 1.8, -0.085 + 0.9433]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.878}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls.geometry}
        material={materials['Material.003']}
        position={[0 + -1.22, 1 + 1.8, 0 + 0.9433]}
      />
      <Hand />
    </group>
  )
})

useGLTF.preload('models/watching_tv-v1-compressed.glb')
