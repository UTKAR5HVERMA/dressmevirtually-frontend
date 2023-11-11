import { animationControls } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
// import { Canvas  } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import the GLTFLoader
import './ThreeModel.css';

const YourComponent = () => {
  const containerRef = useRef();
  
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .5, 1000);
    const renderer = new THREE.WebGLRenderer();
    const loader = new GLTFLoader(); // Use the 'new' keyword to create an instance
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 10, 10);
    camera.position.z=2;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    loader.load('../../../3d model/t-shirt1.glb', (gltf) => {
      const model = gltf.scene;
      // model.position.set(-7, 2, -3); 
      scene.add(model); 
      scene.add(light);
     
      // You can add lights, materials, or other elements to the scene here.
      
      animate();
    });
    // Background.renderer.setClearColor(0xffffff, 0);
    const animate = () => {
      requestAnimationFrame(animationControls);
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    return () => {
      // Clean up resources here if needed
    };
  }, []);

  return <div ref={containerRef} className='html-box'/>;
};
export default YourComponent;


// ../../../3d model/t-shirt1.glb


