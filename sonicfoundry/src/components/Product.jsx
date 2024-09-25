import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useContext, useState } from "react";
import DataContext from "../state/DataContext";

function Product(props) {
  const addToCart = useContext(DataContext).addProductToCart;

  const [quantity, setQuantity] = useState(1);

  function add() {
    let prod = { ...props.data, quantity: quantity };
    addToCart(prod);
  }

  function handleQuantity(qty) {
    setQuantity(qty);
  }
  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }
  return (
    <div className="product">
      <img src={props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>
      <div className={"price"}>
        <label>Price: ${props.data.price.toFixed(2)}</label>
      </div>
      <div className={"total"}>
        <label>
          Total:
          <br /> ${getTotal()}
        </label>
      </div>
      <div className="controls">
        <QuantityPicker onChange={handleQuantity}></QuantityPicker>
        <button className={"btn btn-primary btn-sm"} onClick={add}>
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Product;
