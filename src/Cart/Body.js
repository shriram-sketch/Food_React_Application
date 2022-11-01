import "./card.css";
import React, { useState } from "react";
import Apply from "./Apply";
import Navbar from "../Home_Header/Navbar";
import Cart from "./Cart1/Cartitem";
const App = () => {
  var prev = [];
  var [show, setShow] = useState(true);
  var [cart, setCart] = useState([]);
  const [view, setView] = useState(localStorage.getItem(cart));

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].total += d;

    if (arr[index].total === 0) arr[index].total = 1;
    setCart([...arr]);
  };

  return (
    <div className="food-items">
      <Navbar setShow={setShow} size={cart.length} />
      <div className="content">
        {show ? (
          <Apply handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )}
      </div>
    </div>
  );
};

export default App;
