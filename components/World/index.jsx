import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'

import { PerspectiveCamera, ScrollControls } from '@react-three/drei'
import { CustomLoader } from '../CustomLoader'
import { Exprience } from '../Experience'

export const FLOOR_HEIGHT = 2.3
export const NB_FLOORS = 3

export function World() {
  const [start, setStart] = useState(false)

  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]}>
        <PerspectiveCamera position={[0, 0, 1]} fov={60} makeDefault />
        {start && (
          <ScrollControls pages={3} damping={0.25}>
            <Exprience />
          </ScrollControls>
        )}
      </Canvas>
      <CustomLoader started={start} onStarted={() => setStart(true)} />
    </>
  )
}
