import "./admin.css";
import { useState } from "react";

function Admin() {
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    image: "",
    price: "",
    category: "",
  });

  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  function handleProduct(e) {
    const name = e.target.name;
    const text = e.target.value;

    const copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);
    const copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }

  function handleCoupon(e) {
    const name = e.target.name;
    const text = e.target.value;

    const copy = { ...coupon };
    copy[name] = text;
    setCoupon(copy);
  }

  function saveCoupon() {
    console.log(coupon);
    const copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  return (
    <div className="admin page">
      <h1>Admin</h1>
      <div className="entry-forms">
        <div className="form-product">
          <div className="form">
            <h3>Register Product</h3>
            <div className={"mb-3"}>
              <label htmlFor="productTitle" className={"form-label"}>
                Product Title
              </label>
              <input
                type="text"
                className={"form-control"}
                id={"productTitle"}
                onBlur={handleProduct}
                name={"title"}
              />
            </div>
            <div className={"mb-3"}>
              <label htmlFor="productImage" className={"form-label"}>
                Product Image
              </label>
              <input
                type="text"
                className={"form-control"}
                id={"productImage"}
                onBlur={handleProduct}
                name={"image"}
              />
            </div>
            <div className={"mb-3"}>
              <label htmlFor="productPrice" className={"form-label"}>
                Product Price
              </label>
              <input
                type="number"
                className={"form-control"}
                id={"productPrice"}
                onBlur={handleProduct}
                name={"price"}
              />
            </div>
            <div className={"mb-3"}>
              <label htmlFor="productCategory" className={"form-label"}>
                Product Category
              </label>
              <input
                type="text"
                className={"form-control"}
                id={"productCategory"}
                onBlur={handleProduct}
                name={"category"}
              />
            </div>
            <div className="controls">
              <button
                type="submit"
                className="controls btn btn-primary"
                onClick={saveProduct}
              >
                Save Product
              </button>
            </div>
            {allProducts.map((pr) => (
              <li className={"prod"}>
                <img src={pr.image} alt="" />
                <h5>{pr.title}</h5>
                <label htmlFor="">${pr.price}</label>
              </li>
            ))}
          </div>
        </div>
        <div className="form-coupon">
          <div className={"form"}>
            <h3>Register Coupon</h3>
            <div className="mb-3">
              <label htmlFor="couponCode" className="form-label">
                Coupon Code
              </label>
              <input
                type="text"
                className="form-control"
                id="couponCode"
                onBlur={handleCoupon}
                name={"code"}
              />
              <div id="" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="couponDiscount" className="form-label">
                Coupon Discount
              </label>
              <input
                type="number"
                className="form-control"
                id="couponDiscount"
                onBlur={handleCoupon}
                name={"discount"}
              />
            </div>
            <div className="controls">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={saveCoupon}
              >
                Save Coupon
              </button>
            </div>
            {allCoupons.map((cp) => (
              <div className={"coupon"}>
                <span>
                  {cp.code} - {cp.discount}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
