import React, { forwardRef, useEffect, useState } from 'react'
import { Html, useGLTF, useScroll } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export const PanelkaBuilding = forwardRef((props, ref) => {
  const [iconIsShown, setIconIsShown] = useState(true)
  const { nodes, materials } = useGLTF('models/panelkaglb-v1-compressed.glb')
  const { gl } = useThree()

  const scroll = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      if (scroll.offset > 0) {
        setIconIsShown(false)
      }
    }

    scroll.el.addEventListener('scroll', handleScroll)

    return () => {
      scroll.el.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
      {iconIsShown && (
        <Html
          position={[-0.03, 2.53, -4.591]}
          transform
          distanceFactor={1.16}
          rotation={[Math.PI + 0.06, 0, Math.PI]}
          portal={{ current: gl.domElement.parentNode }}
        >
          <div class="scroll-msg-container">
            <div class="scroll-msg-inner">
              <div class="scroll-msg-wheel" />
            </div>
          </div>
        </Html>
      )}
    </group>
  )
})

useGLTF.preload('models/panelkaglb-v1-compressed.glb')
