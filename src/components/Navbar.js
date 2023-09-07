import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart-icon-brown.svg";
import logowhite from "../Assets/logowhite.png";
import bgleaf from "../Assets/images/package-leaf.png";
import bgredpepper from "../Assets/images/red-pepper-opposite.png";
import bgredtomato from "../Assets/images/red-tomato.png";
import chopstable from "../Assets/images/chopstable.png";
import Totalslist from "../components/Totalslist";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuClick = () => {
    setShowMenu(true);
  };
  const cancelClick = () => {
    setShowMenu(false);
  };
  return (
    <div className="navbar">
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <div className="logo">
          <img src={logo} alt="" />
          </div>
          </Link>

        <Link className="link" to="/checkout">
          <div className="cart mobile">
            <img
              src={cart}
              className="cart-img"
              alt=""
              width={35}
              height={30}
            />
            <div className="cart__order-no">
              <div>{Totalslist[3].total}</div>
            </div>
          </div>
        </Link>  
        <div className="menu" onClick={menuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`mobile-navbar ${showMenu ? "show" : "none"}`}>
        <div className="mobile backgroundBg">
          <img src={chopstable} alt="" className="mainimg" />
          <img src={bgredtomato} alt="" className="tomatoimg" />
          <img src={bgredpepper} alt="" className="pepperimg" />
          <img src={bgleaf} alt="" className="leafimg" />
        </div>
        <div className="mobile top">
          <div className="logo">
            <img className="img" src={logowhite} alt="" />
          </div>
          <div className="cancel" onClick={cancelClick}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar__links">
          <Link className="link" to="/packages">
            <div className="packageslink">Our Menu</div>
          </Link>
          <Link className="link" to="/custompack">
            <div className="custompacklink">
              Build your <span className="desktop">own</span> Meal
            </div>
          </Link>

          <div>Contact</div>
          <div className="navbar__links__buttons">
            <div className="navbar__links__buttons__button btn">Sign in</div>
            <Link className="link" to="/checkout">
              <div className="cart desktop">
                <img
                  src={cart}
                  className="cart-img"
                  alt=""
                  width={35}
                  height={30}
                />
                <div className="cart__order-no">
                  <div>{Totalslist[3].total}</div>
                </div>
              </div>
            </Link>
          </div>
          <Link className="link" to="/checkout">
            <div className="mobile">View Basket</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
