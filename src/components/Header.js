import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import plateOfRice from "../Assets/animationimg/plateOfRice.png"; // Make sure you have an image for the plate of rice

const Header = () => {
  const plateRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const plateAnimation = gsap.timeline();

    plateAnimation.fromTo(
      plateRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 1 }
    );

    // Add hover effect
    plateAnimation.to(plateRef.current, {
      y: -17, // Adjust this value to control the hover distance
      repeat: -1, // Infinite repeat
      yoyo: true, // Yoyo back and forth
      ease: "power1.inOut", // Use any easing function you prefer
    });
  }, [plateRef]);

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
        <img
          src={plateOfRice}
          alt="Plate of Rice"
          ref={plateRef}
          className="plateOfRice"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Header;
