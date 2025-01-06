import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const config = {};
export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", config, []);

  console.log("data: " + meals);

  if (isLoading) {
    return <p>Fetching meals ...</p>;
  }

  return (
    <ul id="meals">
      {meals.map((mealItem) => (
        <li key={mealItem.id}>
          <MealItem meal={mealItem} />
        </li>
      ))}
    </ul>
  );
}
