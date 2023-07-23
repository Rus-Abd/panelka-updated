import React, { forwardRef } from 'react'

import { Html, useGLTF } from '@react-three/drei'

import { useThree } from '@react-three/fiber'

export const Pc = forwardRef((props, ref) => {
  const { pcRef } = ref
  const { setIsHovered } = props

  const { nodes, materials } = useGLTF('models/pc-v1-compressed.glb')

  const { gl } = useThree()

  return (
    <group
      ref={pcRef}
      {...props}
      dispose={null}
      position={[0.33, -0.93, -0.24]}
      rotation={[0, Math.PI, 0]}
    >
      <mesh
        geometry={nodes.defaultMaterial016.geometry}
        material={materials['Material.013']}
        position={[-0.041, 0.571, 0.417]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.104}
      />
      <mesh
        geometry={nodes.side_walls001.geometry}
        material={materials['Material.019']}
        position={[0, 1, 0]}
      />
      <mesh
        geometry={nodes.others_joined.geometry}
        material={materials['Material.009']}
        position={[-0.633, 0.822, 0.988]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <Html
        position={[-0.03, 0.73, 0.591]}
        transform
        distanceFactor={1.16}
        rotation={[Math.PI + 0.06, 0, Math.PI]}
        scale={[0.107, 0.175, 1]}
        portal={{ current: gl.domElement.parentNode }}
      >
        <iframe
          src="https://panelka-pc-updated.vercel.app/"
          title="pc"
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => setIsHovered(false)}
        />
      </Html>
    </group>
  )
})

useGLTF.preload('models/pc-v1-compressed.glb')
