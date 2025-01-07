import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import { getCartTotalAmount } from "../util/HelperFunctions";
import { currencyFormatter } from "../util/Formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const cartTotal = getCartTotalAmount(cartCtx.items);

  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData
  } = useHttp("http://localhost:3000/orders", requestConfig);

  function handleOnSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    console.log("form data:" + JSON.stringify(customerData));

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }
  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending Order Data...</span>;
  }

  if (data) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfuly!</p>
        <p>
          You will receive a email and text message on your registerd email and
          mobile number in few minutes.
        </p>
        <p className="modal-action">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleOnSubmit}>
        <h1>Checkout</h1>
        <p> Total Ammount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" id="name" type="text" />
        <Input label="Email Address" id="email" type="email" />
        <Input label="Street Address" id="street" type="text" />

        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>
        {error && <ErrorPage title="Failed to Submit Order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
