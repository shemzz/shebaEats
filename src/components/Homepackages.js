import React, { useEffect, useRef } from "react";
import Packageslist from "./Packageslist";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import samosa from "../Assets/blurbgimages/samosa.png";
import blursamosa from "../Assets/blurbgimages/blur-samosa.png";
import springroll from "../Assets/blurbgimages/springroll.png";
import blurspringroll from "../Assets/blurbgimages/blur-springroll.png";

const Homepackages = () => {
  const packref = useRef(null);
  useEffect(() => {
    gsap.fromTo(packref.current, { scale: 1 }, { scale: 1 });
  }, [packref]);
  return (
    <div className="homepacks">
      <div className="homepacks__top">
        <div className="homepacks__top__background">
          <div>
            <img src={samosa} alt="" />
          </div>
          <div>
            <img src={blursamosa} alt="" />
          </div>
          <div>
            <img src={springroll} alt="" />
          </div>
          <div>
            <img src={blurspringroll} alt="" />
          </div>
        </div>
        <div className="homepacks__top__texts">
          <div className="heading">Choose one of our packages</div>
          <div className="mini-text">
            Scroll left to right to see all our packages. From pack to platter,
            find the perfect one!
          </div>
        </div>
      </div>
      <div className="homepacks__packages">
        <div className="scroll">Scroll sideways</div>
        {Packageslist.map((pack) => {
          return (
            <div className="pack" key={pack?.id}>
              <Link to="/packages" className="link" state={{ newid: pack.id }}>
                <div className="packimg">
                  <img
                    src={pack?.pimg}
                    alt=""
                    ref={packref}
                    className="pacimage"
                  />
                </div>
              </Link>
              <div className="packname">
                <span>{pack?.pname}</span>
              </div>
              <div className="price">₦ {pack?.price}</div>
            </div>
          );
        })}
      </div>
      <div className="allpackages">
        <Link to="/packages" className="link">
          <div className="packbtn">
            <div>View all packages</div>
          </div>
        </Link>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Homepackages;
