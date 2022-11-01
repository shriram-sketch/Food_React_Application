import React, { useState } from "react";
import "./Foot.css";
import "../Header/Header1.css";
import twit from "../head_images/twit.webp";
import face from "../head_images/face.webp";
import pin from "../head_images/pin.webp";
import ins from "../head_images/ins.webp";
import play from "../head_images/playstore.webp";
import apple from "../head_images/apple.webp";
function Footer() {
  return (
    <footer className="mainfooter">
      <div className="bottom-footer">
        <div className="toplink">
          <ul className="footernav">
            <li className="footerlink">
              <a href="">About us</a>
            </li>
            <li className="footerlink">
              <a href="">Contact Us</a>
            </li>
            <li className="footerlink">
              <a href="">Terms and Conditions</a>
            </li>
            <li className="footerlink">
              <a href="">Privacy and Cookies</a>
            </li>
            <li className="footerlink">
              <a href="">Privacy Options</a>
            </li>
            <li className="footerlink">
              <a href="">Help</a>
            </li>
            <li className="footerlink">
              <a href="">Redeem Voucher</a>
            </li>
          </ul>
        </div>

        <div className="toplink region">
          <ul className="footernav regionnav">
            <li className="footerlink regionlink">
              <img id="playfoot" src={face} />
            </li>
            <li className="footerlink regionlink">
              <a href="">
                <img id="playfoot" src={pin} />
              </a>
            </li>
            <li className="footerlink regionlink">
              <a href="">
                <img id="playfoot" src={ins} />
              </a>
            </li>
            <li className="footerlink regionlink">
              <a href="">
                <img id="playfoot" src={twit} />
              </a>
            </li>
          </ul>
        </div>
        <div className="toplink copyright">
          <ul className="footernav copyrightnav">
            <li className="footerlink copyrightlink">
              <span>Food Mart Copyrights Reserved</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
