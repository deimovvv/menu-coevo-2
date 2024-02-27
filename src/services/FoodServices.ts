import { Food } from "../Types/Food";

// const BASE_URL = "https://back-foodapp.onrender.com/fooddasdasdasdds";


const BASE_URL = "/db/db.json";

export const FoodServices = {

    //Obtener todas las tareas
    getAllFoods: async (): Promise<Food[]> => {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        
        return data.foods;
    },

    //Obtener una tarea
    getOneFood: async (id: number): Promise<Food> => {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();

        const foodData = data.foods.find((food:Food) => food.id === id);

        return foodData;
    },

    //Obtener tareas en una categoria
    getFoodsInCategory: async (category: string): Promise<Food[]> => {
        const response = await fetch(`${BASE_URL}?estado=${category}`);
        const data = await response.json();

        const categoryData = data.foods.filter((food:Food)=> food.descripcion === category)

        return categoryData;
    }

}



/* import { Food } from "../Types/Food";





const BASE_URL = "https://back-foodapp.onrender.com/foods";

const BASE_URL = "/db/db.json";




export const FoodServices = {

    //Obtener todas las tareas
    getAllFoods: async (): Promise<Food[]> => {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        return data;
    },

    //Obtener una tarea
    getOneFood: async (id: number): Promise<Food> => {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    },

    //Obtener tareas en una categoria
    getFoodsInCategory: async (category: string): Promise<Food[]> => {
        const response = await fetch(`${BASE_URL}?estado=${category}`);
        const data = await response.json();
        return data;
    }
} */