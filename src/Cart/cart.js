import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cart.css";
import cartLogo from "../Home_Header/cart.png";
import Header from "../Home_Header/Navbar";
import remove from "./delete.png";
import Food from "./food.png";
const Cart = ({ cart, setCart, handleChange }) => {
  localStorage.setItem("cart", JSON.stringify(cart || []));
  var cart1 = Object.values(JSON.parse(localStorage.getItem("cart")));
  let cartProducts = JSON.parse(localStorage.getItem("cart"));
  console.log(cartProducts);
  const handleRemove = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
    handlePrice();
    console.log(id);
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += 1 * item.price));
  };
  function check(id) {
    cart.map((item) => {
      if (item.quantity === 0) {
        if ((item) => item.id !== id) {
          cart.splice(cart.indexOf(item), 1);
        }
      }
    });
  }

  useEffect(() => {
    handlePrice();
  });

  function refreshPage() {
    window.location.reload();
  }
  var amount = localStorage.getItem("total");
  let newCart = JSON.parse(localStorage.getItem("cart"));
  console.log(newCart);
  let totalAmt = 0;
  Object.values(newCart).map((val) => {
    totalAmt = val.quantity * (totalAmt + val.price);

    console.log(totalAmt);
  });
  localStorage.setItem("total", totalAmt);
  var amount = localStorage.getItem("total");
  var qnty = localStorage.getItem("Quantity");
  console.log(qnty + "");
  let packagingFee = Math.floor((amount / 100) * 3);
  let gst = Math.floor((amount / 100) * 9);
  let total = parseInt(amount) + parseInt(packagingFee) + parseInt(gst);
  localStorage.setItem("GST", total);

  return (
    <>
      <Header />{" "}
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
      <div
        className="cart1"
        style={{ position: "relative", bottom: "115px", height: "15px" }}
      ></div>
      {cart.length === 0 ? (
        <div className="empty" style={{ backgroundColor: "#e5e9eb" }}>
          <img
            src="https://img.icons8.com/external-bearicons-flat-bearicons/344/external-NO-FOOD-capsule-hotel-bearicons-flat-bearicons.png"
            style={{ marginTop: "0pc" }}
          />
          &nbsp;<p style={{ marginTop: "10pc" }}>No Food items in cart.</p>{" "}
        </div>
      ) : null}
      <div className="Items">
        Total Items in cart:{cart.length}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total
        Amount to Pay(Not included tax):Rs.{amount}{" "}
      </div>
      <div className="container">
        <div className="main_content">
          {cart.map((item, cartindex) => (
            <div className="contentfull">
              <div className="img_box">
                <img src={item.img} />
              </div>
              <div className="item-text">
                {item.title}

                <div className="count">
                  <div className="button">
                    <div class="total">
                      {/* {
                      if(localStorage.getItem("total")){
                         localStorage.setItem("total", item.price * item.quantity);
                      }
                    }  */}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="incre">
                  <button
                    className="btn2"
                    onClick={() => {
                      const _CART = cart.map((item, index) => {
                        return cartindex === index
                          ? { ...item, quantity: item.quantity + 1 }
                          : item;
                      });
                      setCart(_CART);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn4"
                    onClick={() => {
                      const _CART = cart.map((item, index) => {
                        return cartindex === index
                          ? {
                              ...item,
                              quantity:
                                item.quantity > 1 ? item.quantity - 1 : 0
                            }
                          : item;
                      });
                      setCart(_CART);
                    }}
                  >
                    -
                  </button>
                  <button
                    className="remove"
                    onClick={() => handleRemove(item.id)}
                  >
                    <img src={remove} />
                  </button>
                </div>
                <span
                  style={{ position: "relative", top: "60px", right: "370px" }}
                  onLoad={check()}
                >
                  {" "}
                  {item.quantity}{" "}
                </span>{" "}
                <div className="totalamnt">
                  Rs. {item.price * item.quantity}
                </div>
              </div>
            </div>
          ))}
          <br />
          <br />
          <div className="amn">
            <div className="total">
              <Link to="/delivery">Order To Pay</Link>
              <button className="btn1" onClick={refreshPage}>
                Clear Cart List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
