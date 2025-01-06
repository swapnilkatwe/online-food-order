import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import { getCartTotalAmount } from "../util/HelperFunctions";
import { currencyFormatter } from "../util/Formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const cartTotal = getCartTotalAmount(cartCtx.items);

  const userProgressCtx = useContext(UserProgressContext);

  function handleOnSubmit(event) {
    event.preventDefault();
  }
  function handleClose() {
    userProgressCtx.hideCheckout();
  }
  //
  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose} >
      <form onSubmit={handleOnSubmit}>
        <h1>Checkout</h1>
        <p> Total Ammount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" id="full-name" type="text" />
        <Input label="Email Address" id="email" type="email" />
        <Input label="Street Address" id="street" type="text" />

        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
