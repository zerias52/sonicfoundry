import "./AddCart.css";

function AddCart() {
  function add() {
    console.log("Adding to cart");
  }
  return (
    <div className="AddCart container">
      <button onClick={add}>Add To Cart</button>
    </div>
  );
}

export default AddCart;
