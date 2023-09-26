import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Grid, useHelper, Stats, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'
import { PerspectiveCamera } from "three";

const Box = () => {
  const ref = useRef()

  useHelper(ref, THREE.BoxHelper, 'red')

  const { position, color, transparent, opacity } = useControls({
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    color: "#ff000",
    opacity: {
      value: .5, min: 0, max:1
    },
    transparent: true
  })

  return (
    <mesh ref={ref} position={[position.x, position.y, position.z]}>
      <boxGeometry />
      <meshBasicMaterial color={color} transparent={transparent} opacity={opacity} />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <OrbitControls />
        <Stats />
        <axesHelper />
        {/* <gridHelper args={[10,10, "green", "blue"]} /> */}
        <Grid 
          sectionSize={3} 
          sectionColor={"purple"} 
          sectionThickness={1} 
          cellSize={1}
          cellColor={"#6f6f6f"}  
          cellThickness={0.6}
          infiniteGrid
          fadeDistance={50}
          fadeStrangth={1.5}
        />
        <Box />
      </Canvas>
    </>
  );
}

export default App;
