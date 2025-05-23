import React, { useRef, useEffect, useMemo, useState } from 'react'
import { useGLTF, useAnimations, MeshTransmissionMaterial, useDetectGPU } from '@react-three/drei'
import * as THREE from 'three'
import MobileCamera from './MobileCamera'

export default function ModelMobile(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('assets/models/astronaut_phone.gltf')
  const { actions } = useAnimations(animations, group)
  const gpu = useDetectGPU()
  const hasLowFPS = gpu.fps < 30
  const resolution = hasLowFPS ? 256 : 512
  const [materialsLoaded, setMaterialsLoaded] = useState(false)

  const simpleMaterial = useMemo(() => (
    <meshLambertMaterial 
      color="#fff"
      roughness={1}
      metalness={0}
    />
  ), [])

  const coneMaterial = useMemo(() => (
    <meshStandardMaterial
    color="#87CEEB"
    toneMapped={false}
    resolution={resolution}
    emissive="#87CEEB"
    emissiveIntensity={1}
   />
  ), [])

  const cubeMaterial = useMemo(() => (
    <MeshTransmissionMaterial 
    ior={1.5} 
    metalness={0.1}
    transmission={1}
    iridescence={0.5}           
    iridescenceIOR={2}  
    resolution={resolution}
    samples={2} 
    thickness={0.05} 
    anisotropy={1} 
    roughness={0.05}
    transparent={true}
    attenuation={0.5}
    reflectivity={0}
    doubleSided={true}
  />
  ), [])

  const astronautMaterial = useMemo(() => (
    <meshPhysicalMaterial 
      color="#000359"             
      metalness={1}
      specular="#ffffff"
      roughness={0.1}
      clearcoat={0.5}
      ior={2.5}
      reflectivity={1}
      iridescence={0.5}
      iridescenceIOR={2.5}
      envMapIntensity={2}
      resolution={resolution}
    />
  ), [])

  useEffect(() => {
    
    Object.values(actions).forEach((action) => {
      action.reset().play()
      action.clampWhenFinished = true
    })
  }, [actions])

  useEffect(() => {
    // Dar tiempo para que los materiales se compilen
    const timer = setTimeout(() => {
      setMaterialsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
        <mesh>
        <sphereGeometry args={[60, 6, 6]} />
        <meshLambertMaterial 
        color="white"
        side={THREE.DoubleSide}
        />
      </mesh>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <skinnedMesh
            name="Astronaut"
            geometry={nodes.Astronaut.geometry}
            material={materials.Material}
            skeleton={nodes.Astronaut.skeleton}
          >
            {astronautMaterial}
          </skinnedMesh>
          <skinnedMesh
            name="Broche1_1"
            geometry={nodes.Broche1_1.geometry}
            material={materials.Material}
            skeleton={nodes.Broche1_1.skeleton}
          >
            {astronautMaterial}
          </skinnedMesh>
          <skinnedMesh
            name="Broche2"
            geometry={nodes.Broche2.geometry}
            material={materials.Material}
            skeleton={nodes.Broche2.skeleton}
          >
            {astronautMaterial}
          </skinnedMesh>
          <skinnedMesh
            name="cintas_1"
            geometry={nodes.cintas_1.geometry}
            material={materials.Material}
            skeleton={nodes.cintas_1.skeleton}
          >
            {astronautMaterial}
          </skinnedMesh>
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
        >
          {cubeMaterial}
        </mesh>
        <mesh
          name="Atronaut_cube_border"
          castShadow
          receiveShadow
          geometry={nodes.Atronaut_cube_border.geometry}
          material={materials.Material}
          position={[-0.088, 1.798, 0.499]}
          rotation={[0.253, -0.057, 1.596]}
          scale={2.486}
        >
          <meshPhysicalMaterial
          color="#87CEEB"
          toneMapped={false}
          resolution={resolution}
         />
        </mesh>
        <mesh
          name="Cone_rb"
          castShadow
          receiveShadow
          geometry={nodes.Cone_rb.geometry}
          material={materials.Material}
          position={[-12.119, -4.999, 4.776]}
          rotation={[-0.297, -0.289, 0.157]}
          scale={0.397}
        >
          {materialsLoaded ? coneMaterial : simpleMaterial}
        </mesh>
        <mesh
          name="Torus_r"
          castShadow
          receiveShadow
          geometry={nodes.Torus_r.geometry}
          material={materials.Material}
          position={[4.947, 6.219, 4.811]}
          rotation={[-2.123, -0.012, -2.103]}
          scale={-1.438}
        >
          {materialsLoaded ? astronautMaterial : simpleMaterial}
        </mesh>
        <mesh
          name="Cone_middle"
          castShadow
          receiveShadow
          geometry={nodes.Cone_middle.geometry}
          material={materials.Material}
          position={[-9.486, -3.653, 9.869]}
          rotation={[1.356, 0.182, -1.104]}
          scale={0.228}
        >
          {materialsLoaded ? coneMaterial : simpleMaterial}
        </mesh>
        <mesh
          name="Star_lb"
          castShadow
          receiveShadow
          geometry={nodes.Star_lb.geometry}
          material={materials.Material}
          position={[-2.611, 1.263, -4.861]}
          scale={0.145}
        >
          {materialsLoaded ? astronautMaterial : simpleMaterial}
        </mesh>
        <mesh
          name="Star_lt"
          castShadow
          receiveShadow
          geometry={nodes.Star_lt.geometry}
          material={materials.Material}
          position={[-2.587, 8.035, 0.838]}
          scale={0.169}
        >
          {materialsLoaded ? astronautMaterial : simpleMaterial}
        </mesh>
        <mesh
          name="Star_rb"
          castShadow
          receiveShadow
          geometry={nodes.Star_rb.geometry}
          material={materials.Material}
          position={[3.96, -2.437, 0.192]}
          scale={0.107}
        >
          {materialsLoaded ? astronautMaterial : simpleMaterial}
        </mesh>
        <MobileCamera />
      </group>
    </group>
  )
}