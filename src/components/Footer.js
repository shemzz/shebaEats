import React from "react";
import { Link } from "react-router-dom";
import footerimg from "../Assets/footer-img.svg";
import withlovefooter from "../Assets/withlovefooter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contents">
        <img src={withlovefooter} alt="" />
        <div className="footer__contents__links pointer">
          <div className="footer-block">
            <Link to="/packages" className="link">
              <div>Packages</div>
            </Link>
            <Link to="/contact" className="link">
              <div>Contact</div>
            </Link>
          </div>
          <div className="footer-block">
            <Link to="/sign" className="link">
              <div>Sign In</div>
            </Link>
            <Link to="/terms" className="link">
              <div>Terms and Conditions</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__image">
        <img src={footerimg} alt="" />
      </div>
    </div>
  );
};

export default Footer;
