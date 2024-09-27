import "./Cart.css";
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Cart() {
  const cart = useContext(DataContext).cart;
  function getCartTotal() {
    let cartTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      cartTotal += prod.quantity * prod.price;
    }
    return cartTotal.toFixed(2);
  }
  return (
    <div className="cart page">
      <h1>Got everything?</h1>
      <h4>Let's get you checked out!</h4>
      <h5>
        We have <b>{cart.length}</b> items waiting for you.
      </h5>
      <div className={"parent"}>
        <div className="list">
          {cart.length === 0 ? (
            <div className="empty-cart alert alert-primary">
              <h3>Check out our catalog to add items to your cart!</h3>
            </div>
          ) : null}

          {cart.map((prod) => (
            <div className={"cart-item"}>
              <img src={prod.image} alt="" />
              <h5>{prod.title}</h5>
              <label htmlFor="">
                <b>Price:</b>
                <br />${prod.price}
              </label>
              <label htmlFor="">
                <b>Quantity:</b>
                <br />
                {prod.quantity}
              </label>
              <label htmlFor="">
                <b>Total:</b> ${(prod.price * prod.quantity).toFixed(2)}
              </label>
              <button className={"btn btn-danger"}>X</button>
            </div>
          ))}
        </div>
        {cart.length > 0 ? (
          <div className="side">
            <h4>Total:</h4>
            <h3>${getCartTotal()}</h3>
            <button className="btn btn-primary">Proceed to Payment</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
