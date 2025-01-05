import { currencyFormatter } from "../util/Formatting";

export default function CartItem({
  name,
  price,
  quantity,
  onIncrease,
  onDescrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onIncrease}>+</button>
        <button>{quantity}</button>
        <button onClick={onDescrease}>-</button>
      </p>
    </li>
  );
}
