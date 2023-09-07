import React from "react";
import twitter from "../Assets/socialicons/twitter.svg";
import insta from "../Assets/socialicons/instagram.svg";
import facebook from "../Assets/socialicons/facebook.svg";

const Followus = () => {
  return (
    <div className="followus">
      <div className="followus__content">
        <div>
          follow <span>us on</span>
        </div>
        <div className="twitter">
          <img src={twitter} alt="" className="twittericon" />
        </div>
        <div className="insta">
          <img src={insta} alt="" className="instaicon" />
        </div>
        <div className="facebook">
          <img src={facebook} alt="" className="fbicon" />
        </div>
      </div>
    </div>
  );
};

export default Followus;
