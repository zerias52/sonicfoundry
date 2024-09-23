import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import AddCart from "./AddCart";

function handleQuantity() {
  console.log("Quantity changed!");
}

function Product(props) {
  return (
    <div className="product">
      <img src={props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>
      <label>Price ${props.data.price}</label>
      <label>Total ${props.data.price}</label>
      <div className="controls">
        <QuantityPicker onChange={handleQuantity}></QuantityPicker>
        <AddCart></AddCart>
      </div>
    </div>
  );
}

export default Product;
