import "./Catalog.css";
import Product from "../components/Product";

function Catalog() {
  return (
    <div className="catalog">
      <h1>Welcome to the Sonic Foundry</h1>
      <Product title={"Bass"} price={"5"}></Product>
      <Product title={"Drums"} price={"5"}></Product>
      <Product title={"Guitar"} price={"5"}></Product>
      <Product title={"Keyboard"} price={"5"}></Product>
      <Product title={"Drumsticks"} price={"5"}></Product>
    </div>
  );
}

export default Catalog;
