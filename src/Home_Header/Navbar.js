import React from "react";
import "./navbar.css";
import Logo from "../head_images/Logo.png";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-router-dom";
import cartLogo from "./cart.png";
const Navbar = ({ setShow, size }) => {
  const logo =
    "https://www.freepnglogos.com/uploads/e-logo-transparent-png-20.png";

  return (
    <nav>
      <div className="Logo">
        <img src={Logo} />
      </div>
      <div className="logo-header">
        <li>
          {" "}
          <Link to="/" style={{ color: "white" }}>
            Foodmart
          </Link>
        </li>
      </div>
      <div
        className="nav-brand"
        style={{ color: "white", cursor: "pointer" }}
        onClick={() => setShow(true)}
      >
        Home
      </div>
      <div className="nav-brand">
        <Link to="/view" style={{ color: "white", cursor: "pointer" }}>
          {" "}
          View Orders
        </Link>
      </div>
      <div className="nav-brand1" onClick={() => setShow(true)}></div>
      <div className="cart" to="/cart" onClick={() => setShow(false)}>
        <img src={cartLogo} />
        <p>{size}</p>
      </div>
      <Toggle />
    </nav>
  );
};

export default Navbar;
