import "../Entry_Page/Entry.css";
import { Link } from "react-router-dom";
import Logo from "../head_images/Logo.png";
import { Navigate, useNavigate } from "react-router-dom";

function Menu() {
  function check() {
    if (localStorage.getItem("formData") != null) {
      navigate("/home");
    } else {
      alert("Kindly Signin");
      navigate("/signin");
    }
  }
  var navigate = useNavigate();
  return (
    <div className="App">
      <div className="Entry">
        <div className="Nav-links">
          <ul>
            <div className="Logo">
              <img src={Logo} />
            </div>
            <div className="logo-header">
              <li>
                {" "}
                <Link to="/">Foodmart</Link>
              </li>
            </div>
            <div className="nav">
              <li>
                {" "}
                <a to="" onClick={check} style={{ cursor: "pointer" }}>
                  Home
                </a>
              </li>
            </div>
            <div className="nav">
              <li>
                {" "}
                <Link to="/signin">Signin</Link>
              </li>
            </div>
            <div className="nav">
              <li>
                <Link to="/signup"> Signup</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Menu;
