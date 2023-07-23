import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { PanelkaBuilding } from '../PanelkaBuilding'
import { WatchingTv } from '../WatchingTv'
import { Pc } from '../Pc'

export const FLOOR_HEIGHT = 2.3
export const NB_FLOORS = 3

export function Exprience(props) {
  const [pcHovered, setPcHovered] = useState(false)
  const mainref = useRef()
  const panelkaRef = useRef()
  const tvRef = useRef()
  const pcRef = useRef()

  const panelkaAudio = new Audio('sounds/panelka-sound.mp3')

  const scroll = useScroll()

  function fade() {
    if (panelkaAudio.volume > 0) {
      panelkaAudio.volume = Math.max(panelkaAudio.volume - 0.001, 0.05)
      setTimeout(fade, 200)
    } else {
      panelkaAudio.pause()
    }
  }

  useFrame((_state, delta) => {
    const offset = 1 - scroll.offset

    if (offset < 0.33) {
      mainref.current.position.lerp(
        new THREE.Vector3(-0.4, 4 - 3.8, 0.8),
        delta * 24
      )

      if (pcHovered) {
        mainref.current.position.set(-0.4, 4 - 3.8, 1.5)
      }
    } else if (offset < 0.66) {
      fade()

      mainref.current.position.lerp(
        new THREE.Vector3(0.25, 2.2832864 - 4.2, 0.1),
        delta * 24
      )
    } else {
      mainref.current.position.lerp(
        new THREE.Vector3(0, 0.683286 - 5, 1),
        delta * 24
      )

      panelkaAudio.play()
    }
  })

  return (
    <>
      <ambientLight intensity={0.68} />
      <group
        dispose={null}
        ref={mainref}
        {...props}
        position={[-0.4, 4 - 3.8, 0.8]}
      >
        <PanelkaBuilding ref={panelkaRef} />
        <group>
          <WatchingTv ref={tvRef} />
        </group>
        <group>
          <Pc ref={{ pcRef }} setIsHovered={setPcHovered} />
        </group>
      </group>
    </>
  )
}
