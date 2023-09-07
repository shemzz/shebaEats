import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chicken from "../Assets/animationimg/chicken.png";
import fries from "../Assets/animationimg/fries.png";
import wings from "../Assets/animationimg/wings.png";
import redpepper from "../Assets/animationimg/redpepper.png";
import yellowpepper from "../Assets/animationimg/yellowpepper.png";
import pepper from "../Assets/animationimg/pepper.png";

import { useRef, useEffect } from "react";

const Header = () => {
  const leftopenRef = useRef(null);
  const mainopenRef = useRef(null);
  const rightopenRef = useRef(null);
  const opentipRef = useRef(null);
  const coverRef = useRef(null);
  const covertipRef = useRef(null);
  const wingsRef = useRef(null);
  const redpepperRef = useRef(null);
  const pepperRef = useRef(null);
  const yellowpepperRef = useRef(null);
  const friesRef = useRef(null);
  const chickenRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  /*Animation of the opened cover*/
  useEffect(() => {
    gsap.fromTo(
      coverRef.current,
      {
        borderBottom: "6vw solid rgb(238,238,238)",
        height: 0,
      },
      {
        borderBottom: "0vw solid rgb(238,238,238)",
        height: 0,
        duration: 0.8,
        delay: 0.4,
      }
    );
    gsap.fromTo(
      covertipRef.current,
      { height: "2rem" },
      { height: "0rem", duration: 0.8, delay: 0.4 }
    );
  }, [coverRef, covertipRef]);
  /*Animation of the closed cover*/
  useEffect(() => {
    gsap.fromTo(
      mainopenRef.current,
      { borderTop: "0vw solid rgb(238,238,238)" },
      { borderTop: "5.2vw solid rgb(238,238,238)", duration: 1, delay: 1.1 }
    );
    gsap.fromTo(
      opentipRef.current,
      { height: 0 },
      { height: "20%", duration: 0.8, delay: 1.1 }
    );
    gsap.fromTo(
      leftopenRef.current,
      {
        transform: " rotate(101deg) translateX(-1.6vw) translateY(-5.3vw)",
        width: 0,
        height: 0,
      },
      {
        transform: " rotate(121deg) translateX(-3.6vw) translateY(-3.3vw)",
        duration: 0.8,
        delay: 1.1,
        height: "8.5vw",
        width: "1.3rem",
      }
    );
    gsap.fromTo(
      rightopenRef.current,
      {
        transform: " rotate(-101deg) translateX(1.6vw) translateY(-5.3vw)",
        width: 0,
        height: 0,
      },
      {
        transform: " rotate(-121deg) translateX(3.6vw) translateY(-3.3vw)",
        duration: 0.8,
        delay: 1.1,
        height: "8.5vw",
        width: "1.3rem",
      }
    );
  }, [mainopenRef, opentipRef, leftopenRef, rightopenRef]);

  /*animation for the contents/*/
  useEffect(() => {
    gsap.fromTo(
      chickenRef.current,
      {
        right: "20%",
        transform: "rotate(65deg)",
      },
      {
        right: "-9%",
        delay: 1.9,
        duration: 0.4,
        transform: "rotate(15deg)",
        y: "-10rem",
      }
    );
    gsap.to(chickenRef.current, {
      transform: "rotate(0deg)",
      duration: 0.6,
      delay: 2.2,
      top: "-200%",
      right: "-20%",
    });
    gsap.fromTo(
      yellowpepperRef.current,
      {
        right: "12%",
      },
      {
        right: "-9%",
        delay: 1.9,
        duration: 0.4,
        y: "-10rem",
      }
    );
    gsap.to(yellowpepperRef.current, {
      duration: 0.6,
      delay: 2.2,
      top: "-120%",
      right: "-20%",
    });
    gsap.fromTo(
      friesRef.current,
      {
        right: "45%",
        transform: "rotate(-25deg)",
        top: "30%",
      },
      {
        right: "15%",
        delay: 1.9,
        duration: 0.4,
        transform: "rotate(-65deg)",
        top: "25%",
      }
    );
    gsap.to(friesRef.current, {
      duration: 0.6,
      delay: 2.2,
      transform: "rotate(0deg)",
      right: "-20%",
      top: "0%",
    });
    gsap.fromTo(
      wingsRef.current,
      {
        left: "30%",
        transform: "rotate(-90deg)",
      },
      {
        left: "5%",
        delay: 1.9,
        duration: 0.4,
        top: "-7%",
      }
    );
    gsap.to(wingsRef.current, {
      duration: 0.6,
      delay: 2.2,
      transform: "rotate(0deg)",
      left: "-10vw",
      top: "-50%",
    });
    gsap.fromTo(
      pepperRef.current,
      {
        transform: "rotate(-35deg)",
      },
      {
        left: "0",
        delay: 1.9,
        duration: 0.4,
        transform: "rotate(0deg)",
        top: "25%",
      }
    );
    gsap.to(pepperRef.current, {
      duration: 0.6,
      delay: 2.2,
      transform: "rotate(0deg)",
      left: "-10vw",
      top: "-190%",
    });
    gsap.fromTo(
      redpepperRef.current,
      {
        left: "20%",
      },
      {
        left: "-10%",
        delay: 1.9,
        duration: 0.4,
        top: "25%",
      }
    );
    gsap.to(redpepperRef.current, {
      duration: 0.6,
      delay: 2.2,
      left: "-20%",
      top: "30%",
    });
  }, [
    chickenRef,
    friesRef,
    wingsRef,
    redpepperRef,
    yellowpepperRef,
    pepperRef,
  ]);
  return (
    <div className="header">
      <Navbar />
      <div className="header__text">
        Order Home made Meals for <br /> today, tomorrow or <br /> whenever!
      </div>
      <Link to="/packages" className="link">
        <div className="header__btn">Order Now</div>
      </Link>
      <div className="header__animation">
        <div className="openup">
          <div className="opened">
            <div className="leftopen" ref={leftopenRef}></div>
            <div className="mainopen" ref={mainopenRef}></div>
            <div className="rightopen" ref={rightopenRef}></div>
          </div>
          <div className="opentip" ref={opentipRef}></div>
        </div>
        <div className="relatived">
          <div className="top">
            <div className="cover" ref={coverRef}></div>
            <div className="covertip" ref={covertipRef}></div>
          </div>
          <div className="middle">
            <div className="left"></div>
            <div className="mid"></div>
            <div className="right"></div>
          </div>
        </div>
        <div className="bottom"></div>
        <div className="header__animation__contents">
          <img src={chicken} alt="" ref={chickenRef} className="chicken" />
          <img src={fries} alt="" ref={friesRef} className="fries" />
          <img src={wings} alt="" ref={wingsRef} className="wings" />
          <img
            src={redpepper}
            alt=""
            ref={redpepperRef}
            className="redpepper"
          />
          <img
            src={yellowpepper}
            alt=""
            ref={yellowpepperRef}
            className="yellowpepper"
          />
          <img src={pepper} alt="" ref={pepperRef} className="pepper" />
        </div>
      </div>
    </div>
  );
};

export default Header;
