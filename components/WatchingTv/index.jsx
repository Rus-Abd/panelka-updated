import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

import { Hand } from '../Hand'

export const WatchingTv = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('models/watching_tv-v1.glb')

  const { x, y, z, tvRoomX, tvRoomY, tvRoomZ } = useControls({
    x: -1.22,
    y: 1.8,
    z: 0.9433,
    tvRotx: 0.01,
    tvRoty: -2.0711999999999953,
    tvRotz: -0.1918000000000002,
    tvRoomX: 0.95,
    tvRoomY: -0.72,
    //  -0.11 the value to appear in front
    tvRoomZ: 0.67,
  })

  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, -Math.PI / 2, 0]}
      position={[tvRoomX, tvRoomY, tvRoomZ]}
      ref={ref}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.others.geometry}
        material={materials['Material.001']}
        position={[-0.698 + x, 0 + y, -1.364 + z]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main.geometry}
        material={materials.Material}
        position={[-0.339 + x, 0.701 + y, -0.085 + z]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.878}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls.geometry}
        material={materials['Material.002']}
        position={[0 + x, 1 + y, 0 + z]}
      />
      {/* <Html
        position={[-0.339 + x, 0.701 + y, 0.02 + z]}
        transform
        distanceFactor={1.16}
        rotation={[0, Math.PI / 2, 0]}
      >
        <video ref={playerRef} src="/videos/mmm.mp4" />
      </Html> */}
      <Hand />
    </group>
  )
})

useGLTF.preload('models/watching_tv-v1.glb')
