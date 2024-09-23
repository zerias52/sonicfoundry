import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Navbar() {
  const user = useContext(DataContext).user;

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          The Sonic Foundry
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/catalog"
              >
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/admin"
              >
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <label className="btn btn-outline-light">{user.name}</label>

            <Link
              className="btn btn-outline-light ms-2"
              type="submit"
              to="/cart"
            >
              View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
