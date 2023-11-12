import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


// import CanvasLoader from "../Loader";

const modelScale = [1,1,1]; // Adjust the scale based on your requirements
const modelPosition = [0, -5, 0];
const Earth = () => {
  const earth = useGLTF("../../../3d model/shirt.gltf");

  return (
    <primitive object={earth.scene} scale={modelScale} position={modelPosition} rotation-z={0} />
  );
};

const YourComponent = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{    
          position: [60, 50, 150],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
        //   autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default YourComponent;
