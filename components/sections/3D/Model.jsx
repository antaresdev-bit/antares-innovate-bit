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
  const { nodes, materials, animations } = useGLTF('/assets/models/astronaut_web_optimized.gltf')
  const { actions } = useAnimations(animations, group)
  const [materialsLoaded, setMaterialsLoaded] = useState(false)
  const [compiledMaterials, setCompiledMaterials] = useState(null)

  // Material simple para carga inicial
  const simpleMaterial = useMemo(() => (
    <meshLambertMaterial 
      color="#fff"
      roughness={1}
      metalness={0}
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

  /*// Compilar materiales después del primer render
  useEffect(() => {
    const figureMaterial = (
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
    )


    setCompiledMaterials({
      astronautMaterial,
      figureMaterial,
      cubeMaterial
    })

    // Dar tiempo para que los materiales se compilen
    const timer = setTimeout(() => {
      setMaterialsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])*/

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
            {astronautMaterial}
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
            {materialsLoaded && compiledMaterials ? 
              astronautMaterial : 
              simpleMaterial}
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
          {/* <EffectComposer multisampling={8}>
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
            </EffectComposer> */}            
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
         />
        </mesh>
      </group>

    </group>
  )
}