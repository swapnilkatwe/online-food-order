import { useState, useEffect } from "react";
import { getMeals } from "../network/Http";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const meals = await getMeals();
        console.log(meals);
        setMeals(meals);
      } catch (error) {
        console.log("ERROR: " + error);
      }
    }

    fetchMeals();
  }, []);

  function handleItemAddToCartClick(id) {
    console.log("clicked:" + id);
  }
  return (
    <ul id="meals">
      {meals.map((mealItem) => (
        <li key={mealItem.id}>
          <MealItem
            id={mealItem.id}
            name={mealItem.name}
            image={mealItem.image}
            price={mealItem.price}
            description={mealItem.description}
            onSelect={handleItemAddToCartClick}
          />
        </li>
      ))}
    </ul>
  );
}
