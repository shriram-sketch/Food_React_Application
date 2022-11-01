import "./pay.css";
import react from "react";
import { Navigate, useNavigate } from "react-router-dom";
import cartLogo from "../Home_Header/cart.png";

import { Link } from "react-router-dom";
import Header from "../Home_Header/Navbar";

function pay() {
  function form() {
    alert(
      "Thank you for Ordering*****Your Order will placed as soon as possible"
    );

    localStorage.setItem("prev", cart);
  }
  var cart = JSON.parse(localStorage.getItem("cart"));
  const handleValidation = (e) => {
    e.preventDefault();
    var card = document.getElementById("number").value;
    var name = document.getElementById("name").value;

    var error_message = document.getElementById("card_error");
    var error_message1 = document.getElementById("card_error1");
    error_message.style.padding = "10px";
    let formData2 = JSON.parse(localStorage.getItem("formData1")) || [];
    formData2.push({
      card,
      name
    });
    localStorage.setItem("Card Details", JSON.stringify(formData2));

    var text;
    if (isNaN(card) || card.length != 16) {
      text = "Please Enter valid 16 digit Card Number only";
      error_message.innerHTML = text;
      return false;
    }
    if (name.length < 5) {
      text = "Please Enter valid Name";
      error_message1.innerHTML = text;
      return false;
    }

    sessionStorage.setItem("phone", card);
    sessionStorage.setItem("name", name);

    alert("Payment Done Successfully!");
    if (localStorage.getItem("cart")) {
      var previousOrder = [];
      var myDate = new Date();
      if (localStorage.getItem("previousOrder")) {
        Object.values(JSON.parse(localStorage.getItem("previousOrder"))).map(
          (val) => {
            if (val.Date == undefined) {
              val.Date =
                myDate.getDate() +
                "/" +
                parseInt(myDate.getMonth() + 1) +
                "/" +
                myDate.getFullYear();

              val.time =
                myDate.getHours() +
                ":" +
                myDate.getMinutes() +
                ":" +
                myDate.getSeconds();
            }

            previousOrder.push(val);
          }
        );
      }

      let currentItem = JSON.parse(localStorage.getItem("cart"));
      Object.values(currentItem).map((val) => {
        val.Date =
          myDate.getDate() +
          "/" +
          parseInt(myDate.getMonth() + 1) +
          "/" +
          myDate.getFullYear();

        val.time =
          myDate.getHours() +
          ":" +
          myDate.getMinutes() +
          ":" +
          myDate.getSeconds();
        previousOrder.push(val);
        console.log(val);
      });
    }
    localStorage.setItem("previousOrder", JSON.stringify(previousOrder));
    navigate("/home");
    return true;
  };

  let navigate = useNavigate();
  return (
    <>
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

      <div class="align-center">
        <div class="card3">
          <header>
            <h3 class="card-title" style={{ color: "white" }}>
              Payment Details
            </h3>
            <img
              width="128"
              alt="Visa Inc. logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/128px-Visa_Inc._logo.svg.png"
              class="logo"
            />
          </header>
          <form action="" class="form">
            <div class="card-name">
              <label for="name">Name</label>
              <input id="name" type="text" size="40" placeholder="Your Name" />
              <div id="card_error1"></div>
            </div>
            <div class="card-number">
              <label>Card Number</label>
              <input
                id="number"
                type="text"
                size="40"
                placeholder="1234 1234 1234 1234"
              />
              <div id="card_error"></div>
            </div>

            <div class="input-row">
              <div class="select-date">
                <label for="date" style={{ color: "white" }}>
                  Expiration Date(MM/YY)
                </label>
                <select name="" id="date">
                  <option value="00"></option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select name="" id="date">
                  <option value="0000"></option>
                  <option value="2017">2022</option>
                  <option value="2018">2023</option>
                  <option value="2019">2024</option>
                </select>{" "}
                <label for="cvc" style={{ color: "white" }}>
                  CVV
                </label>
                <input
                  id="cvc"
                  type="text"
                  size="5"
                  color="black"
                  placeholder="123"
                  required
                />
              </div>

              <div class="card-cvc"></div>

              <button to="/home" class="buy-button" onClick={handleValidation}>
                Complete Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default pay;
