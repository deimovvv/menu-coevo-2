import {
  OrbitControls,
  Environment,
  Html,
  useProgress,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { BoxGeometry } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Bicho10 } from "./Bicho10";
import { CuatroQuesos } from "./CuatroQuesos";
import { Pepperoni } from "./Pepperoni";
/* import { Model } from "./Model";
import ModelTest from "./ModelTest"; */
import { ModelPizza1 } from "./PizzaOptimizada2";
import { ModelPizza2 } from "./PizzaOptimizada3";
/* import { Model2 } from './Model2'; */

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const primitivos = [
  { elemento: <planeGeometry />, tamaño: 2 },
  { elemento: <sphereGeometry />, tamaño: 0.7 },
  { elemento: <boxGeometry />, tamaño: 0.6 },
];


export default function Experience({name}) {
  const model = useLoader(GLTFLoader, "/models/PizzaOptimizada2.glb");

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

      

    {name === 'GRANDES' &&  <ModelPizza1/>   }
    {name === 'Cheddar y panceta' &&  <Pepperoni/>  }
    {name === 'BRADER' &&  <CuatroQuesos/>  }
    {name === 'lemondrop' &&  <CuatroQuesos/>  }
    {name === 'al verdeo' &&  <Pepperoni/>  }
    {name === 'papas hops' &&  <ModelPizza1/>   }
    {name === 'ferroviarias' &&  <CuatroQuesos/>  }
    {name === 'salchipapa' &&  <ModelPizza1/>   }






    
   
     
    </Canvas>
  );
}
