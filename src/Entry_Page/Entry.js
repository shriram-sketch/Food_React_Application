import "./Entry.css";
import Logo from "../head_images/Logo.png";
import react, { useState } from "react";
import { Link } from "react-router-dom";
import Food from "../head_images/Foods.jpeg";
import L1 from "../head_images/L1.webp";
import L2 from "../head_images/L3.webp";
import L3 from "../head_images/L2.webp";
import Header from "../Header/Header1";
import phone from "../head_images/phone.webp";
import phone1 from "../head_images/phone1.webp";
import play from "../head_images/playstore.webp";
import apple from "../head_images/apple.webp";

export default function App() {
  return (
    <div>
      <div>
        <Header />

        <div className="main">
          <div className="content">
            <h1>Hungry?</h1>
            <h3>Order Favourite Foods from near you</h3>
            <input className="search_food" type="text" />
            <button className="btn" style={{ backgroundColor: "#fc8019" }}>
              Find Food
            </button>
            <br />
            <h3>Popular Cities in India</h3>
            <p>
              Chennai,Bangalore,Mumbai,Hyderbad,Tiruvananthapuram,Ahemadabad,New
              Delhi.
            </p>
          </div>

          <div className="pic">
            <img src={Food} />
          </div>
        </div>
        <div className="services">
          <div className="img1">
            <img src={L1} />
            <div className="para">
              <p>No Minimum order</p>{" "}
            </div>
          </div>
          <div className="img2">
            <img src={L2} />
            <div className="para">
              <p>Live Order Tracking</p>{" "}
            </div>
          </div>
          <div className="img3">
            <img src={L3} />
            <div className="para">
              <p>Lightning Fast Delivery</p>{" "}
            </div>
          </div>
        </div>
        <div className="res">
          <div className="res1">
            <h1>Restaurants in your pocket</h1>
            <p>
              Order from your favorite restaurants & track on the go, with the
              all-new Swiggy app.
            </p>
            <img src={apple} />
            <img src={play} />
          </div>
          <div className="res2">
            <img src={phone} />
            <img src={phone1} />
          </div>
        </div>
      </div>
    </div>
  );
}
