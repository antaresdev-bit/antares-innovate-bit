'use client'

import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from './Model'
import Head from 'next/head'
import { Stats } from '@react-three/drei'
import EnvironmentTexture from './EnvironmentTexture'

export default function Scene() {

  const lightRef = useRef()

  useEffect(() => {
    window.onerror = function(msg, url, lineNo, columnNo, error) {
      console.log('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo + '\nColumn: ' + columnNo + '\nError object: ' + JSON.stringify(error));
      return false;
    };
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/assets/models/astronaut_web.gltf"
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
    <div className="relative h-screen w-screen flex items-center justify-center">
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

            <EnvironmentTexture/>
            {/* <Stats /> */}
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </div>
    </>
  )
}