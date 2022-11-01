import "../card.css";
import React, { useState } from "react";
import Cart from "../cart";

const App = () => {
  var prev = [];

  var [cart, setCart] = useState(
    Object.values(JSON.parse(localStorage.getItem("cart")))
  );

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
      <div className="content">
        {<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
      </div>
    </div>
  );
};

export default App;
