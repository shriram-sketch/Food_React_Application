import React from "react";
import Data from "./Data";
import List from "./Cart1/img";

const Card = ({ handleClick }) => {
  return (
    <div className="food-item">
      {Data.map((item) => (
        <List key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Card;
