import React from "react";
import FlexComponentRow from "../components/FlexComponentRow";
import Slider from "../components/Slider";
import FlexComponentColumn from "../components/FlexComponentColumn";
import "../styling/Home.css";
import { Travel, Tech } from "../Data/BlogData";
import { Link } from "react-router-dom";
import CardC2 from "../components/CardC2";
import CardC3 from "../components/card3";

const Home = () => {
  return (
    <div className="home-container">
      <Slider />
      <div className="second">
        <h2 className="hs2">The Latest</h2>
      </div>
      <FlexComponentRow data={Travel} />
      <div className="second">
        <h2 className="hs2">Top Latest</h2>
      </div>
      <div className="third-container">
        <div className="third-first-children">
          <FlexComponentColumn data={Tech} />
          <Link to="/article/1" className="card-a">
            <div className="img-class">
              <img
                src={Travel[0].image}
                alt="travel"
                width="100%"
                height="300px"
              />
              <div className="pos-title">
                <h1>Title Of Vertical gallery</h1>
                <h3>{`${Travel[0].category} / ${Travel[0].date}`}</h3>
              </div>
            </div>
          </Link>
        </div>
        <div className="third-second-children">
          <div className="tsc-first">
            <h2>Top Posts</h2>
            <CardC2 data={Travel[0]} />
            <CardC3 data={Travel[1]} />
            <CardC3 data={Travel[2]} />
            <CardC3 data={Travel[3]} />
          </div>
          <div className="ad">Advertisement</div>
        </div>
      </div>
      <div className="second">
        <h2 className="hs2">Top Latest</h2>
      </div>
      <FlexComponentRow data={Travel} />
    </div>
  );
};

export default Home;
