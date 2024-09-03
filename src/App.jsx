import "bulma/css/bulma.css";
import Cards from "./components/Cards";
import products from "./products";
import NavbarComp from "./components/NavbarComp";
import Cart from "./components/Cart";
import { useState } from "react";
import { CartProvider } from "./store/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <CartProvider>
        <NavbarComp showCartHandler={showCartHandler} />
        {showCart && <Cart showCartHandler={showCartHandler} />}
        <Cards products={products} />
      </CartProvider>
    </>
  );
}

export default App;
