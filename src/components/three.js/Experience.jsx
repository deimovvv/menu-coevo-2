import {
  OrbitControls,
  Environment,
  Html,
  useProgress,
  View
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import SceneSelector from "./SceneSelector";


const primitivos = [
  { elemento: <planeGeometry />, tamaño: 2 },
  { elemento: <sphereGeometry />, tamaño: 0.7 },
  { elemento: <boxGeometry />, tamaño: 0.6 },
];


export default function Experience({name, category}) {


  const containerRef = useRef();

  useLayoutEffect(() => {
    const container = containerRef.current; // Aquí accedemos directamente a la referencia actualizada
    if (!container) return;

    const handleResize = () => {
      const { clientWidth, clientHeight } = container;
      container.style.width = `${clientWidth}px`;
      container.style.height = `${clientHeight}px`;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // No necesitas incluir containerRef.current en la lista de dependencias


  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }} ref={containerRef}>
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
    </div>
  );
}
