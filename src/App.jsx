import Header from "./component/Header";
import Cart from "./component/Cart";
import Meals from "./component/Meals";
import { CartContextProvider } from "./store/CartContext";

function App() {
  function handleShowCart() {
    console.log("show Cart!");
  }

  return (
    <CartContextProvider>
      <Cart />
      <Header onSelect={handleShowCart} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
