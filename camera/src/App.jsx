import { Environment, OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { City } from "./components/City";

function App() {
  return (
    <Canvas >
      {/* IGNORE FOR NOW */}
      {/* <PerspectiveCamera position={[3,3,3]} makeDefault near={1} far={8}/> */}
      <OrthographicCamera
        position={[1, 1, 1]}
        top={10}
        bottom={-2}
        left={-2 * (window.innerWidth / window.innerHeight)}
        right={2 * (window.innerWidth / window.innerHeight)}
        near={-5}
      />
      
      <OrbitControls />
      <City />
      <Environment preset="city" />
    </Canvas>
  );
}

export default App;
