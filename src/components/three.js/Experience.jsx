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
import { Burger } from "./Burger";
import { CuatroQuesos } from "./CuatroQuesos";
import { Pepperoni } from "./Pepperoni";
/* import { Model } from "./Model";
import ModelTest from "./ModelTest"; */
import { ModelPizza1 } from "./PizzaOptimizada2";
import { ModelPizza2 } from "./PizzaOptimizada3";
import { Serrano } from "./Serrano";
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

      
      {/* Pizzas */}
    {name === 'mozzarella' &&  <ModelPizza1/>   }
    {name === 'especial' &&  <Pepperoni/>  }
    {name === 'cuatro quesos' &&  <CuatroQuesos/>  }
    {name === 'mediterránea' &&  <CuatroQuesos/>  }
    {name === 'fugazza' &&  <Pepperoni/>  }
    {name === 'caprese' &&  <ModelPizza1/>   }
    {name === 'pizza brader' &&  <CuatroQuesos/>  }

    {/* Sandwich */}
    {name === 'serrano' &&  <Serrano/>  }


    {/* Hamburguesas */}
    {name === 'brader' &&  <Burger/>  }
    {name === 'american brader' &&  <Burger/>  }
    {name === 'thorin' &&  <Burger/>  }
    {name === 'la 4:20' &&  <Burger/>  }
    {name === 'galaxy' &&  <Burger/>  }





    






    
   
     
    </Canvas>
  );
}
