import React from "react";
import { Link } from "react-router-dom";

const Homeorder = () => {
  return (
    <div className="homeorder">
      <div className="homeorder__section homeevent">
        <div className="image-sect">

        </div>
        <div className="mini-text">
        ShebaEats sends realtime notifications about your order to your Whatsapp when you order online using your Whatsapp number.
        </div>
        <Link className="link" to="/">
          <div className="redirect point">ORDER FROM YOUR PLACE OF WORK</div>
        </Link>
      </div>
      <div className="homeorder__section">
        <div className="image-sect">

        </div>
        <div className="mini-text">
        ShebaEats delivers the perfect blend of flavors to offices, whether for a single order or a corporate gathering.
        </div>
        <Link className="link" to="/">
          <div className="redirect point">Place an Order</div>
        </Link>
      </div>
    </div>
  );
};

export default Homeorder;
