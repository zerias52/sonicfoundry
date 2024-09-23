import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    console.log("Increase");
    let value = quantity + 1;
    setQuantity(value);
    props.onChange();
  }

  function handleDecrease() {
    console.log("Decrease");
    if (quantity > 1) {
      let value = quantity - 1;
      setQuantity(value);
      props.onChange();
    }
  }
  return (
    <div className="qt-picker">
      <button
        disabled={quantity === 1}
        onClick={handleDecrease}
        className={"btn btn-sm btn-outline-primary"}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={handleIncrease}
        className={"btn btn-sm btn-outline-primary"}
      >
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
