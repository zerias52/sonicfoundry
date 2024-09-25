import "./Cart.css";
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Cart() {
  const cart = useContext(DataContext).cart;
  return (
    <div className="cart page">
      <h1>Got everything?</h1>
      <h4>Let's get you checked out!</h4>
      <h5>
        We have <b>{cart.length}</b> items waiting for you.
      </h5>
      <div className={"parent"}>
        <div className="list">
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
                <b>Total:</b> ${prod.price * prod.quantity}
              </label>
              <button className={"btn btn-danger "}>X</button>
            </div>
          ))}
        </div>
        <div className="side">
          <h4>Total:</h4>
          <h3>$1321.00</h3>
          <button className="btn btn-primary">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
