import React from "react";
import SecondComponentHome from "../components/SecondComponentHome";
import Slider from "../components/Slider";
import ThirdComponentHome from "../components/ThirdComponentHome";
import "../styling/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Slider />
      <div className="second">
        <h2 className="hs2">Top Travel Stories</h2>
      </div>
      <SecondComponentHome />
      <div className="second">
        <h2 className="hs2">Top Tech NEWS</h2>
      </div>
      <ThirdComponentHome />
    </div>
  );
};

export default Home;
