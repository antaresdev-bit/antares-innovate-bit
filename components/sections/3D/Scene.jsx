'use client'

import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from './Model'
import { Environment, Stats } from '@react-three/drei'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'

export default function Scene() {

  const lightRef = useRef()

  return (
    <div
      className="relative scene-size overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, #000 80%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, #000 80%, rgba(0,0,0,0) 100%)',
      }}
    >
      <Canvas
        style={{ background: 'transparent' }}
        gl={{
          alpha: true,
          antialias: true,
          stencil: false,
          depth: false
        }}
      >
        <Suspense fallback={null}> 
          {/* Luz ambiental más intensa y colorida */}
          <ambientLight intensity={1} color="#341268" />

          {/* Luz de tipo panel blanca */}
          <rectAreaLight
            ref={lightRef}
            width={15}
            height={35}
            color="#ffffff"
            intensity={150}
            position={[5, 12, 10]}
            rotation={[- Math.PI/8,  -Math.PI/4, Math.PI/8]}
          />
          
          {/* {lightRef.current && (
            <primitive object={new RectAreaLightHelper(lightRef.current)} />
          )} */}
          
          {/* Luz rosa más intensa */}
          <pointLight 
            color="#F40BFA"
            intensity={2}
            position={[19, -3.8, 0.2]}
            distance={20}
            decay={2}
          />

          {/* green light */}
          <pointLight 
            color="cornflowerblue"
            intensity={15}
            position={[-2, -3, -2]}
            distance={50}
          />

          {/* yellow light */}
          <pointLight 
            intensity={8} 
            distance={100}
            position={[4, 6, 4]} 
            color="#ffd60a"
          />

          {/* Luz adicional en cyan */}
          <pointLight 
            color="#00fff5"
            intensity={10}
            position={[0, 5, -5]}
            distance={30}
          />

          <Env />
          {/* <Stats /> */}
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}

function Env({
  background,
  intensity = 0.5,
  blur = 10,
  x = 0,
  y = 0,
  z = 0
}) {
  const texture = useLoader(RGBELoader, '/assets/images/3D/hdri.hdr')
  return (
    <Environment background={background} blur={blur} exclude={['Astronaut_cube_faces']}>
      <color attach="background" args={['black']} />
      <mesh rotation={[x, y, z]} scale={100}>
        <sphereGeometry />
        <meshBasicMaterial 
          transparent 
          opacity={intensity}
          map={texture}
          side={THREE.BackSide}
          toneMapped={true}
          exposure={0.1}
        />
      </mesh>
    </Environment>
  )
}