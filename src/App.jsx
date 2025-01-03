import { useEffect } from "react";
import Header from "./component/Header";
import MealItem from "./component/MealItem";
import { getMeals } from "./network/Http";
import { useState } from "react";
import Cart from "./component/Cart";
import Modal from "./component/Modal";

function App() {
  const [meals, setMeals] = useState([]);
  const [showCart, setShowCart] = useState(false);

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

  function handleShowCart() {
    console.log("show cart!");
    setShowCart(true);
  }
  function handleDismissCart() {
    console.log("dismiss cart!");
    setShowCart(false);
  }

  function handleCheckout() {
    console.log("show Checkout!");
  }

  return (
    <>
      <Modal
        open={showCart}
        onClose={handleDismissCart}
      >
        <Cart
          title="Chicken curry"
          onClose={handleDismissCart}
          onCheckout={handleCheckout}
        />
      </Modal>

      <Header onSelect={handleShowCart} />

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
