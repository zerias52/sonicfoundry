import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import AddCart from "./AddCart";
import { useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

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
        <AddCart></AddCart>
      </div>
    </div>
  );
}

export default Product;
