import DataContext from "./DataContext";
import { useState } from "react";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ userID: 123, name: "Zeri" });

  function addProductToCart(product) {
    console.log("Global add");
    let copy = [...cart];
    copy.push(product);
    setCart(copy);
  }

  function removeProductFromCart() {}

  function clearCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;
