import { Canvas } from '@react-three/fiber';
import ModelMobile from './ModelMobile'
import EnvironmentTexture from '../EnvironmentTexture'
import { Suspense } from 'react'
import Head from 'next/head'

export default function MobileScene() {    
  return (
    <>
    <Head>
    <link
      rel="preload"
      href="/assets/models/astronaut_phone.gltf"
      as="fetch"
      type="model/gltf-binary"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href="/assets/images/3D/hdri.hdr"
      as="fetch"
      type="application/octet-stream"
      crossOrigin="anonymous"
    />
  </Head>
    <div className="relative h-[90vh] w-screen flex items-center justify-center">
        <div
        className="relative scene-size overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 20%, #000 80%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 20%, #000 80%, rgba(0,0,0,0) 100%)',
        }}
        >
        <Canvas 
            style={{ background: 'transparent' }}
            gl={{
            alpha: true,
            antialias: false,
            stencil: false,
            depth: false
            }}
            dpr={[1, 1]}
        >
            <Suspense fallback={null}>
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

            <EnvironmentTexture />
            <ModelMobile />
            </Suspense>
        </Canvas>
        </div>
    </div>
    </>
  );
}