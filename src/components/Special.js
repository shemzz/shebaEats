import React from "react";
import { Link } from "react-router-dom";

import Followus from "./Followus";
import Treats from "./Treats";

import bigbowl from "../Assets/specialimages/Big-Bowl.png";
import bowlfries from "../Assets/specialimages/bowl-fries.png";
import ketchup from "../Assets/specialimages/ketchup.png";
import picnicmat from "../Assets/specialimages/picnic-mat.png";
import redpepper from "../Assets/images/red-pepper-opposite.png";

const Special = () => {
  return (
    <div className="special">
      <div className="followsection">
        <Followus />
      </div>
      <div className="special__contents">
        <div className="special__contents__main-contents">
          <div className="special__contents__main-contents__texts">
            <div className="heading">
              Or would you like something <span> extraordinary?</span>
            </div>
            <div className="mini-text">
            Our special packages are perfect for those special moments when you want something exceptional. You can order them as gifts for yourself or someone special as they come with additional content.
            </div>
          </div>
          <div className="special__contents__main-contents__images">
            <div className="bgimages">
              <img src={bowlfries} alt="" className="friesimg" />
              <img src={ketchup} alt="" className="ketchupimg" />
              <img src={picnicmat} alt="" className="matimg" />
              <img src={redpepper} alt="" className="pepperimg" />
            </div>
            <div className="mainimg">
              <img src={bigbowl} alt="" className="bigbowl" />
            </div>
          </div>
        </div>
        <div className="special__contents__treat">
          <div className="special__contents__treat__head">
            <div className="head">
              <div>special Packages</div>
            </div>
            <div className="line"></div>
          </div>
          <Treats />
          <div className="special__contents__treat__head">
          <Link to="/" className="packbtn">
            <div>View all packages</div>
          </Link>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
