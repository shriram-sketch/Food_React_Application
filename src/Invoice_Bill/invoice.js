import "./invoice.css";
import Header from "../Home_Header/Navbar";
import Foot from "../Footer/Foot";
import { Link } from "react-router-dom";
import cartLogo from "../Home_Header/cart.png";
function invoice() {
  var amount = localStorage.getItem("total");
  let newCart = JSON.parse(localStorage.getItem("cart"));
  let Delivery = JSON.parse(localStorage.getItem("Delivery"));
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
  // amount=totalAmt;
  var min = 10;
  var max = 20;
  var random = Math.floor(Math.random() * (+max - +min) + +min);
  let Discount = Math.floor(amount / 100) * random;
  let packagingFee = Math.floor((amount / 100) * 3);
  let gst = Math.floor((amount / 100) * 9);
  // console.log(totalAmt + "amt");
  // console.log(amount + 1);
  let total = parseInt(amount) + parseInt(packagingFee) + parseInt(gst);
  let total1 =
    parseInt(amount) +
    parseInt(packagingFee) +
    parseInt(gst) -
    parseInt(Discount);
  localStorage.setItem("GST", total);
  var myDate = new Date();

  let Date1 =
    myDate.getDate() +
    "/" +
    parseInt(myDate.getMonth() + 1) +
    "/" +
    myDate.getFullYear();

  let time =
    myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
  var cart = Object.values(JSON.parse(localStorage.getItem("cart")));
  return (
    <div>
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
            width: "200px",
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
          color: "white",
        }}
      >
        {cart.length}
      </p>
      <center>
        <h3 style={{ marginLeft: "40px" }}>Invoice Bill</h3>
      </center>
      <div className="invoice">
        {Delivery.map((item, index) => (
          <table class="meta">
            <tr>
              <th>
                <span contenteditable>Name</span>
              </th>
              <td>
                <span contenteditable>{item.name}</span>
              </td>
            </tr>
            <tr>
              <th>
                <span contenteditable>Order ID</span>
              </th>
              <td>
                <span contenteditable>
                  {time} {Date1}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span contenteditable>Date</span>
              </th>
              <td>
                <span contenteditable>{Date1}</span>
              </td>
            </tr>
            <tr>
              <th>
                <span contenteditable>Time</span>
              </th>
              <td>
                <span contenteditable>{time}</span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Phone Number</span>
              </th>
              <td>
                <span id="prefix" contenteditable>
                  {item.phone}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Email</span>
              </th>
              <td>
                <span id="prefix" contenteditable>
                  {item.email}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span contenteditable>City</span>
              </th>
              <td>
                <span id="prefix" contenteditable>
                  {item.city}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span contenteditable>Address</span>
              </th>
              <td>
                <span id="prefix" contenteditable>
                  {item.address}
                </span>
              </td>
            </tr>
          </table>
        ))}
        <table className="table">
          <th>Items in Orders</th>
          <th>Price of the Item</th>
          {newCart.map((item, index) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>
        <div>
          <table className="table">
            <tr className="check">
              <td className="ch">
                Total Price :<span class="space"></span>{" "}
                &emsp;&emsp;&nbsp;&emsp;Rs {totalAmt}
              </td>
              <td className="ch">
                Packaging Fee:<span class="space"></span>&emsp;&emsp; Rs{" "}
                {packagingFee}
              </td>
              <td className="ch">
                GST (5%):&emsp;&emsp;&nbsp;<span class="space"></span> &emsp;Rs{" "}
                {gst}
              </td>
              <td className="ch">
                {" "}
                Total amount to Pay
                <span class="space"></span>
                <b> Rs {total}</b>
              </td>
            </tr>
          </table>
        </div>
        <table className="table">
          <tr className="check">
            <b>
              <td className="ch">
                Discount :<span class="space"></span> &emsp;&emsp;&nbsp;&emsp;
                {random}%
              </td>
            </b>{" "}
            <td className="ch" style={{ fontSize: "12px" }}>
              <b>
                {" "}
                Amount to Pay :{total1}
                <span class="space"></span> &emsp;&emsp;&nbsp;&emsp;
              </b>
            </td>
          </tr>
        </table>
      </div>
      <Link className="Cash" to="/home">
        <button>Cash on Delivery</button>
      </Link>
      <Link className="payment" to="/payment">
        <button>Proceed to Payment</button>
      </Link>
      <Foot />
    </div>
  );
}
export default invoice;
