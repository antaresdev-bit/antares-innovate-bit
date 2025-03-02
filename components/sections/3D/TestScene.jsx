import { Canvas } from '@react-three/fiber';
import React, { useRef, useEffect, useMemo } from 'react'
import { useGLTF, useAnimations, PerspectiveCamera, MeshTransmissionMaterial } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { Environment} from '@react-three/drei'
import * as THREE from 'three'

export function Model(props) {
  const group = useRef()
  const camera = useRef()
  const { nodes, materials, animations } = useGLTF('assets/models/astronaut_web.gltf')
  const { actions } = useAnimations(animations, group)

  const simpleMaterial = useMemo(() => (
    <meshLambertMaterial 
      color="#fff"
      roughness={1}
      metalness={0}
    />
  ), [])

  const cubeMaterial = useMemo(() => (
    <MeshTransmissionMaterial 
    ior={1.5} 
    chromaticAberration={0.3}
    metalness={0.1}
    transmission={1}
    iridescence={0.5}           
    iridescenceIOR={2}  
    resolution={256}
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
      resolution={256}
    />
  ), [])

  useEffect(() => {
    
    Object.values(actions).forEach((action) => {
      action.reset().play()
      action.clampWhenFinished = true
    })
  }, [actions])

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
          resolution={256}
         />
        </mesh>


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
         <group          >
          <PerspectiveCamera
            ref={camera}
            name="Camera"
            makeDefault={true}
            far={100}
            near={0.1}
            fov={18.895}
            position={[-27.806, -18.87, 20.621]}
            rotation={[0.825, -0.753, 0]}
          >        
          </PerspectiveCamera>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('assets/models/astronaut_web.gltf')

export default function TestScene() {

    
  return (
    <div className="h-[80vh] w-screen flex items-center justify-center">
              <div
        className="relative scene-size overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 20%, #000 80%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 20%, #000 80%, rgba(0,0,0,0) 100%)',
        }}
      >
        <Canvas>
            <ambientLight intensity={1} color="#3d1758" />
            {/* Luz de tipo panel blanca */}
            <rectAreaLight
            width={15}
            height={35}
            color="#ffffff"
            intensity={150}
            position={[5, 12, 10]}
            rotation={[- Math.PI/8,  -Math.PI/4, Math.PI/8]}
            />

            {/* Luz rosa más intensa */}
            <pointLight 
            color="#F40BFA"
            intensity={2}
            position={[19, -3.8, 0.2]}
            distance={20}
            decay={2}
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

            <Model />
            <Env />
        </Canvas>
        </div>
    </div>
  );
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