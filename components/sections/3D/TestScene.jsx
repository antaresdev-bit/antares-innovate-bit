import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { Environment} from '@react-three/drei'
import * as THREE from 'three'
import { ModelMobile } from './mobile/ModelMobile'

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
            intensity={100}
            position={[0, 5, -5]}
            distance={30}
            />

            <ModelMobile />
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
            exposure={0.5}
          />
        </mesh>
      </Environment>
    )
  }