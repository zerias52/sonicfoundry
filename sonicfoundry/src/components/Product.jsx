import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import AddCart from "./AddCart";

function Product(props) {
  return (
    <div className="product">
      <img src="/images/missingimage.jpg" alt=""></img>
      <h5>{props.title}</h5>
      <label>${props.price}</label>
      <QuantityPicker></QuantityPicker>
      <AddCart></AddCart>
    </div>
  );
}

export default Product;
