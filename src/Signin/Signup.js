import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Signin.css";
import Header from "../Header/Header1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { NavLink } from "react-bootstrap";
import { render } from "react-dom";
const Signup = (props) => {
  function errorMessage(e) {
    return (
      <div className="errorMessage" style={{ fontSize: "10px" }}>
        {e}
      </div>
    );
  }

  const handleValidation = (e) => {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");
    var confirm = document.getElementById("confirm").value;
    error_message.style.padding = "10px";
    let formData = JSON.parse(localStorage.getItem("formData")) || [];
    formData.push({
      name,
      pass,
      phone,
      email,
      confirm,
    });
    localStorage.setItem("formData", JSON.stringify(formData));

    var text;
    if (name.length < 5) {
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if (pass.length < 10) {
      text = "Please Enter password atleast 10 characters";
      error_message.innerHTML = text;
      return false;
    }
    if (pass != confirm) {
      text = "Password does not match";
      error_message.innerHTML = text;
      return false;
    }

    if (isNaN(phone) || phone.length != 10) {
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    } //const obj = {
    //name,
    // pass,
    //   phone,
    //   email
    // };
    // sessionStorage.setItem("userDetails", JSON.stringify(obj));
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("pass", pass);
    alert("Form Submitted Successfully!");
    navigate("/signin");
    location.reload();
    return true;
    console.log("userDetails");
  };
  let navigate = useNavigate();
  return (
    <div id="">
      <>
        <Header />
        <div className="head"></div>
        <div className="">
          <div id="logo"></div>
        </div>
        <div className="wrapper">
          <div className="formcard1">
            <div className="formhead">
              <h2
                style={{
                  color: "rgb(5,52,123)",
                  fontSize: "1.3em",
                  fontWeight: "300",
                  marginLeft: "12px",
                  marginTop: "0px",
                  marginBottom: "5px",
                }}
              >
                Create a Foodmart Account
              </h2>
            </div>{" "}
            <div id="error_message"></div>
            <form className="inputFormWrapper" onSubmit={handleValidation}>
              <br />
              <div className="input_field">
                <label>Username</label>
                <span className="break b1" />
                <input
                  type="text"
                  name="fname"
                  id="name"
                  className="supinputSign inputSign"
                />
              </div>
              <div className="input_field">
                <label>Phone No</label>
                <span className="break b1" />
                <input type="text" name="lname" id="phone" className="" />
              </div>
              <span className="break b1" />
              <div className="input_field">
                <label
                  style={{
                    marginLeft: "7pc",
                  }}
                >
                  Email
                </label>
                <span className="break b1" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="supinputSign inputSign"
                  style={{ position: "relative", bottom: "1pc" }}
                />
              </div>
              <br />
              <div className="input_field">
                <label>Password</label>
                <span className="break b1" />
                <input
                  type="password"
                  name="password"
                  id="pass"
                  style={{ position: "relative", bottom: "1pc" }}
                  className="supinputSign inputSign"
                />
              </div>
              <br />
              <div className="input_field">
                <label>Confirm </label>
                <span className="break b1" />
                <input
                  type="password"
                  name="password"
                  id="confirm"
                  style={{ position: "relative", bottom: "1pc" }}
                  className="supinputSign inputSign"
                />
              </div>
              <div className="btn10">
                <input type="submit" id="submitButton" className="btn" />
              </div>
              <br />
              Already Account having?<Link to="/signin">Signin</Link>
            </form>{" "}
          </div>
        </div>
      </>
    </div>
  );
};
export default Signup;
