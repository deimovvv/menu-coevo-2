import {
  View
} from "@react-three/drei";
import { Suspense } from "react";
import modelsByCategory from "../../helpers/modelsByCategory";
import { CuatroQuesos } from "./modelsProducts/CuatroQuesos";
import { Pepperoni } from "./modelsProducts/Pepperoni";
import { ModelPizza1 } from "./modelsProducts/PizzaOptimizada2";

 // Ajusta la ruta según sea necesario

export default function SceneSelector({ category, name, inView }) {
  const CategoryModels = modelsByCategory[category] || {};
  const ModelComponent = CategoryModels[name];

  return ModelComponent ?  <ModelComponent inView={inView}/>
  
 : <>Modelo no encontrado</>;
}





// METODO VIEJO, NO BORRAR

/*   export default function SceneSelector({ name }) {
    switch (name) {
      case 'mozzarella':
        return <ModelPizza1 />
      case 'especial':
        return <Pepperoni />
      case 'cuatro quesos':
        return <CuatroQuesos />;
        case 'mediterránea':
          return <ModelPizza1 />;
          case 'caprese':
          return  <Pepperoni />;
          case 'fugazza':
            return <CuatroQuesos />;
      // Añade aquí más casos según tus modelos
      default:
        return ''// O algún modelo por defecto
    }
  }; */