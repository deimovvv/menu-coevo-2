import {
  OrbitControls,
  Environment,
  Html,
  useProgress,
  View
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import SceneSelector from "./SceneSelector";


const primitivos = [
  { elemento: <planeGeometry />, tamaño: 2 },
  { elemento: <sphereGeometry />, tamaño: 0.7 },
  { elemento: <boxGeometry />, tamaño: 0.6 },
];


export default function Experience({name, category}) {


  console.log(category);

  return (
    <Canvas
      className="canvas-test"
      shadows
      camera={{
        fov: 45,
        near: 0.01,
        far: 2000,
        position: [-1, 1, -0.5],
      }}
    >
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={1.0}
        /* enableZoom={false} */
        autoRotate={true}
      />

      <directionalLight castShadow position={[1, 2, 3]} intensity={5.2} />
      <ambientLight intensity={1} />
      <Environment preset={"sunset"} />


      <Suspense fallback={null }>
        <SceneSelector category={category} name={name} />
      </Suspense>




      {/* Pizzas */}
    {/* {name === 'mozzarella' &&  <ModelPizza1/>   } */}
   
     
    </Canvas>
  );
}
