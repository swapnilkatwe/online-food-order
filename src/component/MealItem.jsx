import { string } from "prop-types";
import { currencyFormatter } from "../util/Formatting.js";
import Button from "./UI/Button.jsx";

function MealItem({ id, image, name, price, description, onSelect }) {
  return (
    <article className="meal-item ">
      
      <img src={`http://localhost:3000/${image}`} alt="" />
      
      <div>
        <h3>{name}</h3>
        <label className="meal-item-price">
          {currencyFormatter.format(price)}
        </label>
        <p className="meal-item-description">{description}</p>
      </div>

      <Button
        textOnly={false}
        className="meal-item-actions"
        onClick={() => onSelect(id)}
      >
        Add to Cart
      </Button>

    </article>
  );
}
export default MealItem;

MealItem.propTypes = {
  id: string,
  image: string,
  name: string,
  price: string,
  description: string,
  onSelect: () => {},
};
