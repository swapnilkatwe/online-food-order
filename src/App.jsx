import { useEffect } from "react";
import Header from "./component/Header";
import MealItem from "./component/MealItem";
import { getMeals } from "./network/Http";
import { useState } from "react";

function App() {
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
    <>
      <Header />
      <ol id="meals">
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
      </ol>
    </>
  );
}

export default App;
