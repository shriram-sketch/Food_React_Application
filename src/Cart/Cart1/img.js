import React from "react";
import "../card.css";

const Rows = ({ item, handleClick }) => {
  const { price, category, title, img } = item;

  return (
    <div className="food-item br-rd">
      <div className="coba">
        <div className="real_content">
          <div className="img_box">
            <img className="br-rd" src={img} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{category}</p>
            <h3>Rs.{price}</h3>
            <button className="btn1" onClick={() => handleClick(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rows;
