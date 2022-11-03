import React, { useEffect, useState } from "react";
import "../Home/body.css";
import Header from "../Header/Header1";
function CartList() {
  let data = Object.values(JSON.parse(localStorage.getItem("previousOrder")));
  console.log(data.time);

  var myDate = new Date();
  let time = myDate.getHours() + ":" + parseInt(myDate.getMinutes());
  console.log(time);
  var prev = "";

  return (
    <div>
      <Header />
      <div className="item">
        {data?.map((item, index) => (
          <>
            {console.log(item.time)}
            {data && prev === item.time ? (
              <>
                <div className="containe">
                  <img className="image" src={item.img} width="30px" />
                  <div className="details ">
                    <div className="part">
                      <span className="head1"> {item.title} </span>
                      <span className="head"> Time:{item.time} </span>
                      <span className="hea"> Date:{item.Date} </span>
                      <div className="count">
                        <span>
                          <div className="h3">
                            {" "}
                            <h2 id="h2">Rs. {item.price} </h2>
                          </div>

                          <div
                            className="h3"
                            style={{
                              position: "relative",
                              bottom: "1pc",
                              right: "9pc",
                            }}
                          >
                            {" "}
                            Quantity {item.quantity}
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="Time">
                  Order ID:{(prev = item.time)}&nbsp;
                  {item.Date}
                </div>
                <div className="containe">
                  <img className="image" src={item.img} width="30px" />
                  <div className="details ">
                    <div className="part">
                      <span className="head1"> {item.title} </span>
                      <span className="head"> Time:{item.time} </span>
                      <span className="hea"> Date:{item.Date} </span>
                      <div className="count">
                        <span>
                          <div className="h3">
                            {" "}
                            <h2 id="h2">Rs. {item.price} </h2>
                          </div>
                          <div
                            className="h3"
                            style={{
                              position: "relative",
                              bottom: "1pc",
                              right: "9pc",
                            }}
                          >
                            {" "}
                            Quantity {item.quantity}
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default CartList;
