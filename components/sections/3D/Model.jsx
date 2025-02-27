import React, { useRef, useEffect, useMemo, useState } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations, MeshTransmissionMaterial} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Bloom } from '@react-three/postprocessing'
import {KernelSize, Resolution } from 'postprocessing'
import { EffectComposer } from '@react-three/postprocessing'

export function Model(props) {
  const group = useRef()
  const camera = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/models/astronaut_web.gltf')
  const { actions } = useAnimations(animations, group)
  const [materialsLoaded, setMaterialsLoaded] = useState(false)

  // Material simple para carga inicial
  const simpleMaterial = useMemo(() => (
    <meshLambertMaterial 
      color="#fff"
      roughness={1}
      metalness={0}
    />
  ), [])

  // Materiales originales
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
    />
  ), [])

  const  figureMaterial = useMemo(() => (
    <meshPhysicalMaterial 
      color="#000359"             
      metalness={1}
      specular="#ffffff"
      roughness={0}
      clearcoat={1}
      ior={2.5}
      reflectivity={1}
      iridescence={0.5}
      iridescenceIOR={2.5}
      envMapIntensity={2}
      emissive="#fff"
      emissiveIntensity={0.2}
    />
    ), [])

  const cubeMaterial = useMemo(() => (
    <MeshTransmissionMaterial 
    transmissionSampler={true}
    ior={2} 
    chromaticAberration={0.3}
    metalness={0.1}
    transmission={1}
    backside={true}
    iridescence={0.5}           
    iridescenceIOR={2}  
    iridescenceThicknessRange={[500, 400]}  
    toneMapped={false}      
    depthWrite={true}
    depthTest={true}
    renderOrder={-1}
    samples={8} 
    thickness={0.05} 
    anisotropy={1} 
    roughness={0.05}
    transparent={true}
    attenuation={0.5}
    reflectivity={0}
  />
  ), [])

  useEffect(() => {
    console.log('Animaciones disponibles:', Object.keys(actions))
    
    Object.values(actions).forEach((action) => {
      action.reset().play()
      action.clampWhenFinished = true
    })
  }, [actions])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMaterialsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

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
      <mesh>
        <sphereGeometry args={[40, 64, 64]} />
        <meshLambertMaterial 
        color="purple"
        side={THREE.DoubleSide}
        />
      </mesh>
      <group name="Scene">
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <skinnedMesh
            name="Astronaut"
            geometry={nodes.Astronaut.geometry}
            skeleton={nodes.Astronaut.skeleton}
          >
            {materialsLoaded ? astronautMaterial : simpleMaterial}
          </skinnedMesh>
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
          >
            {materialsLoaded ? astronautMaterial : simpleMaterial}
          </skinnedMesh>
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.neutral_bone} />
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

        <mesh
          name="Astronaut_cube_faces"
          receiveShadow
          geometry={nodes.Astronaut_cube_faces.geometry}
          material={materials.Material}
          position={[-0.088, 1.798, 0.499]}
          rotation={[0.253, -0.057, 1.596]}
          scale={2.486}
        >
          {materialsLoaded ? cubeMaterial : simpleMaterial}
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
         />
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
          name="Torus_l"
          castShadow
          receiveShadow
          geometry={nodes.Torus_l.geometry}
          material={materials.Material}
          position={[-2.244, 7.712, -3.501]}
          rotation={[-2.197, 1.209, -0.949]}
          scale={-0.801}
        >
          {materialsLoaded ? astronautMaterial : simpleMaterial}
        </mesh>

        <mesh
          name="Sphere_rt"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_rt.geometry}
          position={[5.244, 0.687, 5.739]}
          scale={-1.088}
        >
          {materialsLoaded ? figureMaterial : simpleMaterial}
        </mesh>
        <group 
        position={[-3, -1, -1]}
        >
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
            {materialsLoaded ? figureMaterial : simpleMaterial}
          </mesh>
        </group>

        <mesh
          name="Sphere_lb"
          castShadow
          receiveShadow
          geometry={nodes.Sphere_lb.geometry}
          material={materials.Material}
          position={[4.021, 24.424, -16.446]}
          scale={-3.464}
        >
         {materialsLoaded ? figureMaterial : simpleMaterial}
        </mesh>
        <mesh
          name="Icosphere_lt"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_lt.geometry}
          material={materials.Material}
          position={[-0.923, 16.023, -4.694]}
          scale={0.556}
        >
          {materialsLoaded ? figureMaterial : simpleMaterial}
        </mesh>
        <mesh
          name="Icosphere_rb"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_rb.geometry}
          material={materials.Material}
          position={[5.8125, -1.60853, 0.170475]}
          scale={0.556}
        >
          {materialsLoaded ? figureMaterial : simpleMaterial}
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
          {materialsLoaded ? figureMaterial : simpleMaterial}
        </mesh>

        <mesh
          name="Star_lb"
          castShadow
          receiveShadow
          geometry={nodes.Star_lb.geometry}
          position={[-2.611, 1.263, -4.861]}
          scale={0.145}
        >
          {materialsLoaded ? astronautMaterial : simpleMaterial}
        </mesh>
        <mesh
          name="Star_rt"
          castShadow
          receiveShadow
          geometry={nodes.Star_rt.geometry}
          material={materials.Material}
          position={[5.992, -3.087, 4.047]}
          scale={0.261}
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
      </group>

    </group>
  )
}
