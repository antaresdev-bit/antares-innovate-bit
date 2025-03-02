import { Canvas } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations, MeshTransmissionMaterial} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { EffectComposer } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import {KernelSize, Resolution } from 'postprocessing'
import * as THREE from 'three'


export function Model(props) {
  const group = useRef()
  const camera = useRef()
  const { nodes, materials, animations } = useGLTF('assets/models/astronaut_web.gltf')
  const { actions } = useAnimations(animations, group)
  
 
  useEffect(() => {
    
    Object.values(actions).forEach((action) => {
      action.reset().play()
      action.clampWhenFinished = true
    })
  }, [actions])

  useFrame(({ pointer, viewport }) => {
    const x = ((pointer.x * viewport.width) / 100) * -1
    const y = (pointer.y * viewport.height) / 40
    
    if (camera.current) {
      camera.current.rotation.y = THREE.MathUtils.lerp(
        camera.current.rotation.y,
        x * 0.3,
        0.1
      )
      camera.current.rotation.x = THREE.MathUtils.lerp(
        camera.current.rotation.x,
        y * 0.2,
        0.1
      )
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <skinnedMesh
            name="Astronaut"
            geometry={nodes.Astronaut.geometry}
            material={materials.Material}
            skeleton={nodes.Astronaut.skeleton}
          />
          <skinnedMesh
            name="Broche1_1"
            geometry={nodes.Broche1_1.geometry}
            material={materials.Material}
            skeleton={nodes.Broche1_1.skeleton}
          />
          <skinnedMesh
            name="Broche2"
            geometry={nodes.Broche2.geometry}
            material={materials.Material}
            skeleton={nodes.Broche2.skeleton}
          />
          <skinnedMesh
            name="cintas_1"
            geometry={nodes.cintas_1.geometry}
            material={materials.Material}
            skeleton={nodes.cintas_1.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.neutral_bone} />
        </group>
        <mesh
          name="Astronaut_cube_faces"
          castShadow
          receiveShadow
          geometry={nodes.Astronaut_cube_faces.geometry}
          material={materials.Material}
          position={[-0.088, 1.798, 0.499]}
          rotation={[0.253, -0.057, 1.596]}
          scale={2.486}
        />
        <mesh
          name="Atronaut_cube_border"
          castShadow
          receiveShadow
          geometry={nodes.Atronaut_cube_border.geometry}
          material={materials.Material}
          position={[-0.088, 1.798, 0.499]}
          rotation={[0.253, -0.057, 1.596]}
          scale={2.486}
        />
        <mesh
          name="Icosphere_rb"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_rb.geometry}
          material={materials.Material}
          position={[5.813, 0.344, 1.796]}
          scale={-0.838}
        />
        <mesh
          name="Sphere_rt"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_rt.geometry}
          material={materials.Material}
          position={[5.244, 0.687, 5.739]}
          scale={-1.088}
        />
        <mesh
          name="Cone_rb"
          castShadow
          receiveShadow
          geometry={nodes.Cone_rb.geometry}
          material={materials.Material}
          position={[-12.119, -4.999, 4.776]}
          rotation={[-0.297, -0.289, 0.157]}
          scale={0.397}
        />
        <mesh
          name="Torus_r"
          castShadow
          receiveShadow
          geometry={nodes.Torus_r.geometry}
          material={materials.Material}
          position={[4.947, 6.219, 4.811]}
          rotation={[-2.123, -0.012, -2.103]}
          scale={-1.438}
        />
        <mesh
          name="Torus_l"
          castShadow
          receiveShadow
          geometry={nodes.Torus_l.geometry}
          material={materials.Material}
          position={[-2.244, 7.712, -3.501]}
          rotation={[-2.197, 1.209, -0.949]}
          scale={-0.801}
        />
        <mesh
          name="Sphere_lb"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_lb.geometry}
          material={materials.Material}
          position={[4.021, 24.424, -16.446]}
          scale={-3.464}
        />
        <mesh
          name="Icosphere_lt"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_lt.geometry}
          material={materials.Material}
          position={[-0.923, 16.023, -4.694]}
          scale={0.556}
        />
        <mesh
          name="Cone_middle"
          castShadow
          receiveShadow
          geometry={nodes.Cone_middle.geometry}
          material={materials.Material}
          position={[-9.486, -3.653, 9.869]}
          rotation={[1.356, 0.182, -1.104]}
          scale={0.228}
        />
        <mesh
          name="Star_lb"
          castShadow
          receiveShadow
          geometry={nodes.Star_lb.geometry}
          material={materials.Material}
          position={[-2.611, 1.263, -4.861]}
          scale={0.145}
        />
        <mesh
          name="Star_rt"
          castShadow
          receiveShadow
          geometry={nodes.Star_rt.geometry}
          material={materials.Material}
          position={[5.992, -3.087, 4.047]}
          scale={0.261}
        />
        <mesh
          name="Star_lt"
          castShadow
          receiveShadow
          geometry={nodes.Star_lt.geometry}
          material={materials.Material}
          position={[-2.587, 8.035, 0.838]}
          scale={0.169}
        />
        <mesh
          name="Star_rb"
          castShadow
          receiveShadow
          geometry={nodes.Star_rb.geometry}
          material={materials.Material}
          position={[3.96, -2.437, 0.192]}
          scale={0.107}
        />
      </group>
      <group          ref={camera}>
          <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={100}
            near={0.1}
            fov={18.895}
            position={[-27.806, -18.87, 20.621]}
            rotation={[0.825, -0.753, 0]}
          >
           <EffectComposer multisampling={8}>
              <Bloom 
                intensity={1}
                kernelSize={KernelSize.SMALL}
                luminanceThreshold={0.3}
                luminanceSmoothing={1}
                mipmapBlur
                resolutionX={Resolution.AUTO_SIZE} 
                resolutionY={Resolution.AUTO_SIZE}
                layers={0}
              />
            </EffectComposer>            
          </PerspectiveCamera>
        </group>
    </group>
  )
}

useGLTF.preload('/astronaut_web.gltf')

export default function TestScene() {
  return (
    <div className="w-screen h-screen">
        <Canvas>
            <ambientLight intensity={1} />
            <Model />
        </Canvas>
    </div>
  );
}
