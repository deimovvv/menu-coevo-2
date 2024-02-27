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
      "pizza brader": CuatroQuesos,
      // Agrega más aquí
    },
    PARAPICAR: {
      "bastones de mozzarella": CuatroQuesos,
      "dedos de pollo crujientes": ModelPizza1,
      "empanada brader": CuatroQuesos,
      "empanada de carne": ModelPizza1,
      "empanada jamón y queso": CuatroQuesos
    },
    LOMOS: {
      frodo: CuatroQuesos,
      gollum: Pepperoni,
      sauron: ModelPizza1,
      pipin: CuatroQuesos,
      calypso: CuatroQuesos,
      // Modelos de empanadas
    },
    HAMBURGUESAS: {
      // Modelos de postres
      brader: ModelPizza1,
      "american brader": Pepperoni,
      thorin: Pepperoni,
     "la 4:20": ModelPizza1,
     galaxy: ModelPizza1,


    },
   PAPASFRITAS: {
    "Cheddar y panceta":  ModelPizza1,
    GRANDES: Pepperoni,
    BRADER: Pepperoni,
    lemondrop: ModelPizza1,
    "al verdeo": ModelPizza1,
    "papas hops": CuatroQuesos,
    ferroviarias: Pepperoni,
    salchipapa: ModelPizza1,

      // Modelos de papas fritas
    },
    SANDWICHES: {
      serrano: Pepperoni
    },
    VEGGIE: {
      "PIZZA VEGETARIANA": Pepperoni,
      "SANDWICH VEGETARIANO": ModelPizza1,
      "BRUSCHETTA VEGETARIANA": ModelPizza1
    }
    // Agrega más categorías según sea necesario
  };
  
  export default modelsByCategory;