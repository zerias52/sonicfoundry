import "./AddCart.css";

function AddCart() {
  function add() {
    console.log("Adding to cart");
  }
  return (
    <div className="AddCart">
      <button className={"btn btn-primary btn-sm"} onClick={add}>
        Add To Cart
      </button>
    </div>
  );
}

export default AddCart;
