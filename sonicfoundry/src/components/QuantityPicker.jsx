import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    let value = quantity + 1;
    setQuantity(value);
    props.onChange(value); //call the parent function
  }

  function handleDecrease() {
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
