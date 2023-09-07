import React from "react";
import pepper from "../Assets/packagesbg/pepper.png";
import redpepper from "../Assets/packagesbg/red-pepper.png";
import tomato from "../Assets/packagesbg/tomato.png";
import leaf from "../Assets/packagesbg/package-leaf.png";

const Packagebackground = () => {
  return (
    <div className="packagebg">
      <div>
        <img src={pepper} alt="" />
      </div>
      <div>
        <img src={tomato} alt="" />
      </div>
      <div>
        <img src={redpepper} alt="" />
      </div>
      <div>
        <img src={leaf} alt="" />
      </div>
    </div>
  );
};

export default Packagebackground;
