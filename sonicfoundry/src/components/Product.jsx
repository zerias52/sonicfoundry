import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import AddCart from "./AddCart";

function Product(props) {
  return (
    <div className="product">
      <img src={props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>
      <label>${props.data.price}</label>
      <div className="controls">
        <QuantityPicker></QuantityPicker>
        <AddCart></AddCart>
      </div>
    </div>
  );
}

export default Product;
