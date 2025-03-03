import { useDetectGPU } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

export default function MobileCamera() {
  const gpu = useDetectGPU()
  const isLowEnd = gpu.isMobile && gpu.tier < 2

  return (
    <>
    {isLowEnd ? (
    <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100}
          near={0.1}
          fov={18.895}
          position={[-27.806, -18.87, 20.621]}
          rotation={[0.825, -0.753, 0]}
    /> 
    ):(
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
    )}
    </>
  )
}

