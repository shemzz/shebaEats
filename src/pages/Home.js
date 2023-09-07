import React from "react";
import Header from "../components/Header";
import Blurhomebg from "../components/Blurhomebg";
import Special from "../components/Special";
import Homepackages from "../components/Homepackages";
import Buildpack from "../components/Buildpack";
import Homeorder from "../components/Homeorder";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="landing">
        <div className="home__header">
          <Blurhomebg />
          <Header />
        </div>
      </div>
      <Special />
      <Buildpack />
      <Homeorder />
      <Footer />
    </div>
  );
};

export default Home;
