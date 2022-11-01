import "./styles.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Main from "./Render/Render";
import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Signup from "./Signin/Signup";
import Footer from "./Footer/Foot";
import Invoice from "./Invoice_Bill/invoice";
import Pay from "./Payment1/pay";
import Cart from "./Cart/Cart2/child";
import View from "./View_Order/View";
import Delivery from "./Delivery_Address/Delivery";
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/view" element={<View />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/payment" element={<Pay />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
