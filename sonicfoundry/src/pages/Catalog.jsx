import "./Catalog.css";
import Product from "../components/Product";
import { catalog as products } from "../services/DataService";
import { categories } from "../services/DataService";

function Catalog() {
  return (
    <div className="catalog page">
      <h1>Check Out Our Catalog</h1>
      <div className={"catBtn"}>
        {categories.map((cat) => (
          <button className={"btn btn-lg btn-primary"}>{cat}</button>
        ))}
      </div>
      {products.map((prod) => (
        <Product data={prod}></Product>
      ))}
    </div>
  );
}

export default Catalog;
