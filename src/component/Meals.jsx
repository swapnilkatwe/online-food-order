import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";

const config = {};
export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", config, []);

  if (isLoading) {
    return <p className="center">Fetching meals ...</p>;
  }

  if (error) {
    return <ErrorPage title="Failed to fetch meals" message={error}/>
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


// API call with useEffect in same file
// const [meals, setMeals] = useState([]);
// useEffect(() => {
//   async function fetchMeals() {
//     try {
//       const meals = await getMeals();
//       console.log("data: " + meals);
//       setMeals(meals);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   fetchMeals();
// }, []);