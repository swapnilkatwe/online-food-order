import Header from "./component/Header";
import { useState } from "react";
import Cart from "./component/Cart";
import Modal from "./component/Modal";
import Meals from "./component/Meals";

function App() {
  const [showCart, setShowCart] = useState(false);

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
      <Meals />

    </>
  );
}

export default App;
