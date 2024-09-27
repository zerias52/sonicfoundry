import "./Catalog.css";
import Product from "../components/Product";
import { catalog as products } from "../services/DataService";
import { categories } from "../services/DataService";
import { useState } from "react";

function Catalog() {
  const [filter, setFilter] = useState("");
  return (
    <div className="catalog page">
      <h1>Check Out Our Catalog</h1>
      <div className={"catBtn"}>
        <button
          className={`btn btn-lg ${filter === "" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setFilter("")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            className={`btn btn-lg ${filter === cat ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {products
        .filter((prod) => filter === "" || prod.category === filter)
        .map((prod) => (
          <Product data={prod}></Product>
        ))}
    </div>
  );
}

export default Catalog;
