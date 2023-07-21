import React, { forwardRef } from 'react'

import { Html, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export const Pc = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('models/pc.glb')

  const { pcX, pcY, pcZ, iX, iY, iZ } = useControls({
    pcX: 0.33,
    pcY: -0.93,
    pcZ: -0.24,
    tvRotx: 0.01,
    tvRoty: -2.0711999999999953,
    tvRotz: -0.1918000000000002,
    iX: -0.03,
    iY: 0.72,
    iZ: 0.597,
  })

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      position={[pcX, pcY, pcZ]}
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
        position={[iX, iY, iZ]}
        transform
        distanceFactor={1.16}
        rotation={[Math.PI + 0.06, 0, Math.PI]}
      >
        <div className="iframe-container">
          <iframe
            src="https://panelka-pc-updated.vercel.app/"
            frameBorder="0"
            title="pc"
          />
        </div>
      </Html>
    </group>
  )
})

useGLTF.preload('models/pc.glb')
