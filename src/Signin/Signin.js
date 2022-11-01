import React, { useState } from "react";
import "./Signin.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Foot from "../Footer/Foot";
import Header from "../Header/Header1";

const Signin = (props) => {
  function errorMessage(e) {
    return (
      <div className="errorMessage" style={{ fontSize: "10px" }}>
        {e}
      </div>
    );
  }

  const handleValidation = (e) => {
    e.preventDefault();
    var pass = document.getElementById("pass").value;
    //let data = sessionStorage.getItem("userDetails");
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";
    let formData = JSON.parse(localStorage.getItem("formData")) || [];

    let exist =
      formData.length &&
      JSON.parse(localStorage.getItem("formData")).some(
        (data) => data.email == email && data.pass == pass
      );

    var text;
    if (email.indexOf("@") == -1 || email.length < 6) {
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if (pass.length < 10) {
      text = "Password must contain Atleast 10 characters";
      error_message.innerHTML = text;
      return false;
    }

    if (!exist) {
      text = "Invalid";
      error_message.innerHTML = text;
      return false;
    } else {
      alert("Successfully login...");
      navigate("/home");
      return true;
    }
  };
  let navigate = useNavigate();
  return (
    <div className="">
      <Header />
      <div className="wrapper1">
        <div></div>
        <div id="error_message"></div>
        <form className="Form" action="" onSubmit={handleValidation}>
          <div className="Wrapper">
            <p className="New">
              New to Foodmart?
              <Link
                to="/signup"
                style={{ fontSize: "15px", marginLeft: "5px" }}
              >
                Signup
              </Link>{" "}
            </p>
            <div className="input_field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                id="email"
                className="Signin"
              />
            </div>
            <div className="input_field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="pass"
                className="inputSign"
                onSubmit={handleValidation}
                style={{ position: "relative", bottom: ".5pc" }}
              />
            </div>
          </div>
          <div class="btn10">
            <input type="submit" />
          </div>
        </form>
      </div>
      <Foot />
    </div>
  );
};

export default Signin;
