import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import blurleaf from "../Assets/blurbgimages/blur-leaf.png";
import blurpuff from "../Assets/blurbgimages/blur-puff-puff.png";
import blursamosa from "../Assets/blurbgimages/blur-samosa.png";
import blurchicken from "../Assets/blurbgimages/chicken-blur.png";

const Blurhomebg = () => {
  const blurleafRef = useRef(null);
  const samosaRef = useRef(null);
  const puffpuffRef = useRef(null);
  const chickenRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      blurleafRef.current,
      {
        x: -10,
        y: 0,
      },
      {
        x: -15,
        y: -10,
        duration: 6,
        yoyo: true,
        repeat: -1,
      }
    );
  }, [blurleafRef]);

  useEffect(() => {
    gsap.fromTo(
      samosaRef.current,
      {
        x: 10,
        y: 10,
      },
      {
        x: -15,
        y: -10,
        duration: 6,
        yoyo: true,
        repeat: -1,
      }
    );
  }, [samosaRef]);

  useEffect(() => {
    gsap.fromTo(
      puffpuffRef.current,
      { x: -20, y: -5 },
      { x: 30, y: 5, duration: 7, yoyo: true, repeat: -1 }
    );
  }, [puffpuffRef]);

  useEffect(() => {
    gsap.fromTo(
      chickenRef.current,
      { x: -10, y: 10 },
      { x: 0, y: -25, duration: 7, yoyo: true, repeat: -1 }
    );
  }, [chickenRef]);

  return (
    <div className="blurhomebg">
      <img src={blurleaf} alt="" className="blurleafimg" ref={blurleafRef} />
      <img src={blurpuff} alt="" className="blurpuffimg" ref={puffpuffRef} />
      <img src={blursamosa} alt="" className="blursamosaimg" ref={samosaRef} />
      <img
        src={blurchicken}
        alt=""
        className="blurchickenimg"
        ref={chickenRef}
      />
    </div>
  );
};

export default Blurhomebg;
