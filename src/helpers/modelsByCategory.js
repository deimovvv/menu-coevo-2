import { CuatroQuesos } from "../components/three.js/modelsProducts/CuatroQuesos";
import { Pepperoni } from "../components/three.js/modelsProducts/Pepperoni";
import { ModelPizza1 } from "../components/three.js/modelsProducts/PizzaOptimizada2";


const modelsByCategory = {
    PIZZAS: {
      mozzarella: ModelPizza1,
      especial: Pepperoni,
      "cuatro quesos": CuatroQuesos,
      mediterránea: ModelPizza1,
      caprese: Pepperoni,
      fugazza: CuatroQuesos,
      // Agrega más aquí
    },
    empanadas: {
      // Modelos de empanadas
    },
    postres: {
      // Modelos de postres
    },
   PAPASFRITAS: {
    "Cheddar y panceta":  ModelPizza1,
    GRANDES: Pepperoni,
      // Modelos de papas fritas
    },
    // Agrega más categorías según sea necesario
  };
  
  export default modelsByCategory;