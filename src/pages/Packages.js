import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Packageslist from "../components/Packageslist";
import cartwhite from "../Assets/cart-icon-white.svg";
import arrow from "../Assets/right-arrow-brown.svg";
import Packagebackground from "../components/Packagebackground";
import Drinks from "../components/Drinks";
import Totalslist from "../components/Totalslist";
const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [number, setNumber] = useState(0);
  const addnumber = () => {
    if (number < Packageslist.length - 1) {
      setNumber(number + 1);
    } else if (number === Packageslist.length - 1) {
      setNumber(0);
    }
  };
  const subtractnumber = () => {
    if (number === 0) {
      setNumber(Packageslist.length - 1);
    } else {
      setNumber(number - 1);
    }
  };

  const location = useLocation();
  const { newid } = location.state ? location.state : 0;
  useEffect(() => {
    if (newid <= Packageslist.length || newid === 0) {
      setNumber(newid);
    } else {
      setNumber(0);
    }
  }, [newid]);
  const [list, setList] = useState();

  useEffect(() => {
    setList(
      Packageslist?.filter((numberlist) => {
        return numberlist.id === number;
      })
    );
  }, [number]);
  const imageRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, [imageRef, list]);

  /*quantity state*/
  const [Totals, setTotals] = useState(Totalslist);
  const addquantity = (index) => {
    const newList = [...list];
    const newTotal = [...Totals];
    newList[index].unit++;
    newList[index].total += newList[index].price;
    newTotal[3].total++;

    setList(newList);
    setTotals(newTotal);
  };
  const minusquantity = (index) => {
    const newList = [...list];
    const newTotal = [...Totals];
    if (newList[index].unit > 0) {
      newList[index].unit--;
      newList[index].total -= newList[index].price;
      newTotal[3].total--;
    }
    setList(newList);
    setTotals(newTotal);
  };
  return (
    <div className="packages package-section">
      <Navbar />
      <div className="arrows">
        <div className="arrows-section ">
          <div className="arrow noselect" onClick={addnumber}>
            <img src={arrow} alt="" />
          </div>
          <div className="arrow noselect" onClick={subtractnumber}>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      {list?.map((eachpack, index) => {
        return (
          <div className="packages__box" key={eachpack.id}>
            <div className="packages__box__description">
              <div className="packagebackground">
                <Packagebackground />
              </div>
              <div className="question">
                What Package Do You Feel Like Enjoying Today?
              </div>
              <div className="package-name head">{eachpack?.pname}</div>
              <div className="package-image">
                <img
                  src={eachpack?.pimg}
                  alt=""
                  className="pimg"
                  ref={imageRef}
                />
              </div>
              <div className="details-box">
                <div className="price-section">
                  <div className="price">
                    ₦ {eachpack?.price}
                    <span>per pack</span>
                  </div>
                </div>
                <div
                  className="sign minus noselect"
                  onClick={() => minusquantity(index)}
                >
                  -
                </div>
                <div className="quantity">{eachpack?.unit}</div>
                <div
                  className="sign plus noselect"
                  onClick={() => addquantity(index)}
                >
                  +
                </div>
                <div className="cart">
                  <Link to="/checkout" className="link">
                    <img src={cartwhite} alt="" />
                  </Link>
                </div>
              </div>
              <div className="custom-drinks bigscreen">
                <Drinks className="package-drink" />
              </div>
            </div>
            <div className="packages__box__content">
              <div className="content-section">
                <div className="content-heading head">Content</div>
                <div className="packages-content">
                  {eachpack?.content.map((content, index) => {
                    return (
                      <div className="each-content" key={index}>
                        <div className="content-img">
                          {content.img && <img src={content.img} alt="" />}
                        </div>
                        <div className="circle-line">
                          <div className="line"></div>
                          <div className="circle">
                            <div className="inner-circle"></div>
                          </div>
                          <div className="line bottom"></div>
                        </div>
                        <div className="content-quantity">
                          <span className="piece">{content.pieces}</span>{" "}
                          {content.cname}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="custom-drinks smallscreen">
                <Drinks />
              </div>
              <div className="checkout">
                <div className="checkquestion">
                  Done Selecting your package?
                </div>
                <Link to="/checkout" className="link">
                  <div className="btn">Checkout</div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Packages;
