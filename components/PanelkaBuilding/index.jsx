import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const PanelkaBuilding = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('models/panelkaglb-v1-compressed.glb')

  return (
    <group dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.004']}
        position={[-9.36, -6.0, -33.28]}
        rotation={[-Math.PI / 2, Math.PI / 2, -Math.PI / 2]}
        scale={[-221.207, -101.1, -272.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box018_Entrance_02_0001.geometry}
        material={materials['Material.005']}
        position={[5.93, -6.0, -21.29]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.004, 0.004, 0.005]}
      />
    </group>
  )
})

useGLTF.preload('models/panelkaglb-v1-compressed.glb')
