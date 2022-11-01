import React from "react";
import "./del.css";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Home_Header/Navbar";
import cartLogo from "../Home_Header/cart.png";
function delivery(props) {
  var cart = Object.values(JSON.parse(localStorage.getItem("cart")));
  function errorMessage(e) {
    return <div style={{ fontSize: "10px" }}></div>;
  }

  const handleValidation = (e) => {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var error_message = document.getElementById("errorMessage");
    var error_message1 = document.getElementById("errorMessage1");
    var error_message2 = document.getElementById("errorMessage2");
    var error_message3 = document.getElementById("errorMessage3");
    error_message.style.padding = "10px";
    let formData1 = JSON.parse(localStorage.getItem("formData1")) || [];
    formData1.push({
      name,
      address,
      email,
      phone,
      city
    });
    localStorage.setItem("Delivery", JSON.stringify(formData1));

    var text;
    if (name.length < 5) {
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
      text = "Please enter valid email address";
      error_message1.innerHTML = text;
      return false;
    }
    if (isNaN(phone) || phone.length != 10) {
      text = "Please Enter valid Phone Number";
      error_message2.innerHTML = text;
      return false;
    }
    if (address.length < 5) {
      text = "Please Enter valid Email";
      error_message3.innerHTML = text;
      return false;
    }
    sessionStorage.setItem("name", name);
    error_message.innerHTML = "";
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("address", address);
    alert("******Delivery Address Verified Successfully*****");
    navigate("/invoice");
    return true;
  };
  let navigate = useNavigate();
  return (
    <div>
      <Header />
      <div
        className="h"
        style={{ position: "relative", bottom: "0px", height: "2px" }}
      >
        <Link
          to="/home"
          className="nav1"
          style={{ position: "relative", left: "27px", width: "10px" }}
        >
          Home
        </Link>{" "}
        <Link
          to="/cart"
          className="nav2"
          style={{
            position: "relative",
            left: "100px",
            top: "-7px",
            height: "30px",
            width: "200px"
          }}
        >
          <img
            width="20%"
            style={{ position: "relative", bottom: "1vh" }}
            src={cartLogo}
          />
        </Link>
      </div>
      <p
        style={{
          position: "relative",
          bottom: "5pc",
          left: "59%",
          color: "white"
        }}
      >
        {cart.length}
      </p>
      <div className="container5">
        <h1>Delivery Information</h1>
        <p>Please enter your Food Delivery address</p>
        <hr />
        <div className="form1">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" for="firstname">
                Full Name
              </span>
              <input className="field__input" type="text" id="name" />{" "}
              <div
                className="errorMessage"
                id="errorMessage"
                style={{ fontSize: "10px" }}
              ></div>
            </label>
          </div>

          <label className="field">
            <span className="field__label" for="country">
              Email
            </span>
            <input className="field__input" type="text" id="email" />
            <div
              className="errorMessage1"
              id="errorMessage1"
              style={{ fontSize: "10px" }}
            ></div>
          </label>
          <label className="field">
            <span className="field__label" for="country">
              Phone Number
            </span>
            <input className="field__input" type="text" id="phone" />
            <div
              className="errorMessage2"
              id="errorMessage2"
              style={{ fontSize: "10px" }}
            ></div>
          </label>
          <label className="field">
            <span className="field__label" for="address">
              Address
            </span>
            <input className="field__input" type="text" id="address" />
            <div
              className="errorMessage3"
              id="errorMessage3"
              style={{ fontSize: "10px" }}
            ></div>
          </label>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" for="city">
                City
              </span>
              <input className="field__input" type="text" id="city" />
            </label>
          </div>
        </div>
        <hr />
        <button className="button3" onClick={handleValidation}>
          Continue
        </button>
      </div>
    </div>
  );
}
export default delivery;
