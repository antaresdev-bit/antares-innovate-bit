import { PerspectiveCamera } from '@react-three/drei'
export default function MobileCamera() {

  return (
    <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100}
          near={0.1}
          fov={18.895}
          position={[-27.806, -18.87, 20.621]}
          rotation={[0.825, -0.753, 0]}
    /> 
  )
}

