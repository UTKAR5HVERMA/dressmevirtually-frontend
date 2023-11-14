import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import './ThreeModel.css' 

// import CanvasLoader from "../Loader";

const modelScale = [1.45,1.45,1.45]; // Adjust the scale based on your requirements
const modelPosition = [0, -40, 0];
const modelRotation = [0, 0, 0];
const Earth = () => {
  const earth = useGLTF("../../../3d model/shirt.gltf");

  return (
    <primitive object={earth.scene} scale={modelScale} position={modelPosition} rotation={modelRotation} />
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
          position: [0, 50, 170],
        fov: 40,
        near: 0.1,
        far: 200,
      }}
  className="canvas-posiion"  >
      <Suspense fallback={null}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />	
        <Earth />
        {/* <directionalLight position={[70, 80, 100]} intensity={1} /> */}
        
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default YourComponent;
