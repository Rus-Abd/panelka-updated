import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export const PanelkaBuilding = forwardRef(({ started }, ref) => {
  const { nodes, materials } = useGLTF('models/panelkaglb.glb')
  const audio = new Audio('sounds/panelka-sound.mp3')

  const {
    panelkax,
    panlekay,
    panelkaz,
    rotationx,
    rotationz,
    rx,
    ry,
    rz,
    doorZ,
    doorX,
    doorY,
  } = useControls({
    panelkax: 5.93,
    panlekay: -6.0,
    panelkaz: -21.29,
    rotationx: -Math.PI / 2,
    rotationz: Math.PI / 2,
    rx: -9.36,
    ry: -6.0,
    rz: -33.28,
    doorZ: -21.06,
    doorX: -4.06,
    doorY: 4.06,
  })

  // if (started) {
  //   audio.play()
  // }

  return (
    <group dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[rx, ry, rz]}
        rotation={[-Math.PI / 2, Math.PI / 2, -Math.PI / 2]}
        scale={[-221.207, -101.1, -272.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box018_Entrance_02_0001.geometry}
        material={materials.Material}
        position={[panelkax, panlekay, panelkaz]}
        rotation={[rotationx, 0, rotationz]}
        scale={[0.004, 0.004, 0.005]}
      />
      <pointLight
        position={[doorX, doorY, doorZ]}
        intensity={0.3}
        color="red"
      />
    </group>
  )
})

useGLTF.preload('models/panelkaglb.glb')
