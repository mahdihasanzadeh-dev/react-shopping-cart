import React from "react";
import ShoppingCartContextProvider from "./context/shopping-cart-context";
import { ShoppingCart } from "./components";
const App :React.FC =()=> {
  return (
    <ShoppingCartContextProvider >
      <ShoppingCart />
    </ShoppingCartContextProvider>
  );
}

export default App;
