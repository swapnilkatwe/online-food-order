import { currencyFormatter } from "../util/Formatting.js";
import Button from "./UI/Button.jsx";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import PropTypes from "prop-types";

function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <article className="meal-item ">
      <img src={`http://localhost:3000/${meal.image}`} alt="" />

      <div>
        <h3>{meal.name}</h3>
        <label className="meal-item-price">
          {currencyFormatter.format(meal.price)}
        </label>
        <p className="meal-item-description">{meal.description}</p>
      </div>

      <Button
        textOnly={false}
        className="meal-item-actions"
        onClick={handleAddMealToCart} //{() => onSelect(id)}
      >
        Add to Cart
      </Button>
    </article>
  );
}
export default MealItem;

MealItem.propTypes = {
  meal: PropTypes.object,
};
