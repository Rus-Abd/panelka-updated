import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import { Line, OrbitControls, useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { PanelkaBuilding } from '../PanelkaBuilding'
import { WatchingTv } from '../WatchingTv'
import { Pc } from '../Pc'

export const FLOOR_HEIGHT = 2.3
export const NB_FLOORS = 3

const LINE_NB_POINTS = 4000

export function Exprience(props) {
  const mainref = useRef()
  const panelkaRef = useRef()
  const tvRef = useRef()
  const pcRef = useRef()

  const mainAudio = new Audio('sounds/panelka-sound.mp3')

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(0, 0.683286 - 5, 1),
          new THREE.Vector3(0.3, 2.2832864 - 5, 0.1),
          new THREE.Vector3(-0.4, 4 - 3.8, 0.8),
        ],
        false,
        'catmullrom',
        0.5
      ),
    []
  )
  const rotaionCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(Math.PI / 10, 0, 0),
          new THREE.Vector3(Math.PI / 10, 0, 0),
        ],
        false,
        'catmullrom',
        0.5
      ),
    []
  )

  const linePoints = useMemo(() => curve.getPoints(LINE_NB_POINTS), [curve])

  const rotaionPoints = useMemo(
    () => rotaionCurve.getPoints(LINE_NB_POINTS),
    [curve]
  )

  const shape = useMemo(() => {
    const tempShape = new THREE.Shape()
    tempShape.moveTo(0, -0.2)
    tempShape.lineTo(0, 0.2)

    return tempShape
  }, [curve])

  const scroll = useScroll()

  useFrame((_state, delta) => {
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    )
    const curPoint = linePoints[curPointIndex]
    const currotation = rotaionPoints[curPointIndex]
    console.log(mainref.current.quaternion)

    mainref.current.position.lerp(curPoint, delta * 24)
    // mainref.current.quaternion.slerp(currotation, delta * 24)
    //     x
    // :
    // 0.31024866206250007
    // y
    // :
    // -2.986567493880033
    // z
    // :
    // 0.13757214069999976
    // if (mainref.current.position.y > -2.986567493880033) {
    // }
    // const pointAhead =
    //   linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)]

    // const xDisplacement = (pointAhead.x - curPoint.x) * 80

    // Math.PI / 2 -> LEFT
    // -Math.PI / 2 -> RIGHT

    // const angleRotation =
    //   (xDisplacement < 0 ? 1 : -1) *
    //   Math.min(Math.abs(xDisplacement), Math.PI / 3)

    // const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
    //   new THREE.Euler(
    //     mainref.current.rotation.x,
    //     angleRotation,
    //     mainref.current.rotation.z
    //   )
    // )

    // mainref.current.quaternion.slerp(targetCameraQuaternion, delta * 2)
  })

  // const scroll = useScroll()

  // function fade() {
  //   if (mainAudio.volume > 0) {
  //     mainAudio.volume = Math.max(mainAudio.volume - 0.0001, 0.1)
  //     setTimeout(fade, 200)
  //   } else {
  //     mainAudio.pause()
  //   }
  // }

  //   useFrame(state => {
  //     // The offset is between 0 and 1, you can apply it to your models any way you like
  //     const offset = 1 - scroll.offset
  //     console.log(offset)

  //     if (offset < 0.480547749281697) {
  //       fade()
  //       state.camera.position.set(0, 1 + 10 * 0.6683286495690182 - 7, 1)
  //       state.camera.rotation.set(-Math.PI / 8, 0, 0)
  //     } else if (offset < 0.9648876398850715) {
  //       fade()
  //       state.camera.position.set(0, 1 + 10 * 0.8283286495690182 - 7, 1)
  //       state.camera.rotation.set(-Math.PI / 8, 0, 0)
  //     } else {
  //       mainAudio.play()
  //       state.camera.position.set(0, 1 + 10 * offset - 7, 1)
  //       state.camera.rotation.set(Math.PI / 10, 0, 0)
  //     }
  //   })

  return (
    <>
      <ambientLight intensity={props.intensity} />
      <spotLight penumbra={0.5} position={[10, 10, 5]} castShadow />
      <Line points={linePoints} color="white" lineWidth={16} />
      <group dispose={null} ref={mainref} {...props}>
        <PanelkaBuilding started={props.start} ref={panelkaRef} />
        <group>
          <WatchingTv ref={tvRef} />
        </group>
        <group>
          <Pc ref={pcRef} />
        </group>
      </group>
      <OrbitControls enableZoom={false} />
    </>
  )
}
