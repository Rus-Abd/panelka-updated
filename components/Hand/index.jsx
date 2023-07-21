import * as THREE from 'three'

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { useControls } from 'leva'
import { videos } from './constants'

export function Hand(props) {
  const group = useRef()
  const state = useRef({
    clicked: 0,
  })
  const playerRef = useRef(null)
  const { nodes, materials, animations } = useGLTF('models/hand.glb')
  const { actions } = useAnimations(animations, group)
  const audio = new Audio('sounds/remote-pressed.mp3')

  const { handX, handY, handZ } = useControls({
    handX: -0.96,
    handY: 2.01,
    handZ: 1.09,
  })
  useEffect(() => {
    function handleClick() {
      if (state.current.clicked === 0) {
        actions.power_on.reset()
        actions.power_on.clampWhenFinished = true
        actions.power_on.timeScale = 1
        actions.power_on.setLoop(THREE.LoopOnce, 1)
        actions.power_on.play()
        setTimeout(() => {
          audio.play()
          playerRef.current.play()
          state.current.clicked += 1
        }, 300)
      } else {
        actions.next_channel.reset()
        actions.next_channel.clampWhenFinished = true
        actions.next_channel.timeScale = 1
        actions.next_channel.setLoop(THREE.LoopOnce, 1)
        actions.next_channel.play()
        setTimeout(() => {
          audio.play()
          if (state.current.clicked >= videos.length) {
            state.current.clicked = 0
          }
          playerRef.current.src = videos[state.current.clicked]
          playerRef.current.play()
          state.current.clicked += 1
        }, 300)
      }
    }

    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [playerRef.current])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[0.188 + handX, -0.051 + handY, 0 + handZ]}
          rotation={[0, 0, 0.264]}
          scale={0.62}
        >
          <skinnedMesh
            name="arms_arms1_0"
            geometry={nodes.arms_arms1_0.geometry}
            material={materials['Material.004']}
            skeleton={nodes.arms_arms1_0.skeleton}
          />
          <primitive object={nodes.Bone} />
        </group>
        <mesh
          name="Circle010_Buttons_0"
          castShadow
          receiveShadow
          geometry={nodes.Circle010_Buttons_0.geometry}
          material={materials['Material.003']}
          position={[0.559 + handX, 0.369 + handY, -0.279 + handZ]}
          rotation={[-1.844, 0.443, 0.165]}
          scale={0.051}
        />
        <Html
          position={[-0.2 + -1.224, 3.281 + -0.6031, 0.24 + 0.9433]}
          transform
          distanceFactor={1.16}
          rotation={[0, Math.PI / 2, 0]}
        >
          <video
            ref={playerRef}
            poster="/images/static-tv.gif"
            src="/videos/mmm.mp4"
          />
        </Html>
      </group>
    </group>
  )
}

useGLTF.preload('models/hand.glb')
