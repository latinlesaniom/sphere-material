import './App.css';
import {Canvas} from 'react-three-fiber'
import {OrbitControls, useTexture} from '@react-three/drei'


function Sphere(){
  const texture = useTexture('/Marble.jpg')
  console.log(texture)
  return(
    <>
    <mesh>
      <sphereBufferGeometry  attach='geometry' args={[1, 64, 64]} />
      <meshPhysicalMaterial attach='material'  map={texture} roughness={1} metalness={0}  clearcoatRoughness={0} clearcoat={0.8} envMapIntensity={0.4}/>
    </mesh>
    </>
  )
}


function Scene(){
  return(
    <>
      <ambientLight />
      <spotLight intensity={1} angle={0.5} castShadow={true} position={[5, 10, 15]} />
      <Sphere />
      <OrbitControls />
    </>
  )
}


function App() {
  return (
    <>
        <Canvas 
          camera={{
            position:[0, 0, 3]
          }}
        >
          <Scene />
        </Canvas>
    </>
  );
}

export default App;
