import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from 'three'

function App() {


  return (
    <Canvas camera={{
      position: [3, 3, 3]
    }}>
      <OrbitControls />
      <group position={[-2, -2, 0]} scale={2} rotation-y={Math.PI / 4} >
        <mesh position-x={1} scale={[1, 0.6, 0.2]} rotation={[THREE.MathUtils.degToRad(45), 0, 0]}>
          <boxGeometry />
          <meshToonMaterial color={'red'} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry />
          <meshToonMaterial color={'green'} />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <boxGeometry />
          <meshToonMaterial color={'purple'} />
        </mesh>
      </group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 3]} intensity={1} />
      <directionalLight position={[0, 3, 3]} intensity={0.5} />
    </Canvas>
  ) 
}

export default App
