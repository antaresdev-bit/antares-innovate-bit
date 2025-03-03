import React from 'react'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { Environment } from '@react-three/drei'

export default function EnvironmentTexture({
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
            exposure={0.5}
          />
        </mesh>
      </Environment>
    )
  }