import {string} from "prop-types";

function Cart({title, onClose, onCheckout}) {
  return (
    <div className="cart">
        <h2>Your Cart</h2>
        <ul>
            <li className="cart-item">{title}</li>
            <li>Sea food</li>
            <li>Sea food</li>
        </ul>
        <button onClick={onClose}>Close</button>
        <button onClick={onCheckout}>Go to Checkout</button>
    </div>
  )
}
export default Cart;

Cart.propTypes = {
    title: string,
    onClose: ()=>{},
    onCheckout:()=>{}
}