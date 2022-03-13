import React from "react";
import "../styling/page.css";
import { Travel as travel } from "../Data/BlogData";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
const Travel = () => {
  return (
    <div className="page-container">
      <div className="page-first-container">
        <h1>Travel</h1>
        <Card4 data={travel[0]} />
        <Card4 data={travel[1]} />
        <Card4 data={travel[2]} />
        <Card4 data={travel[3]} />
        <Card4 data={travel[4]} />
        <Card4 data={travel[5]} />
        <Card4 data={travel[0]} />
        <Card4 data={travel[1]} />
      </div>
      <div className="page-second-container">
        <h1>Top posts</h1>
        <Card5 data={travel[0]} />
        <Card6 data={travel[1]} />
        <Card6 data={travel[2]} />
        <Card6 data={travel[3]} />
        <Card6 data={travel[4]} />
        <div className="adv">Advertisement</div>
      </div>
    </div>
  );
};

export default Travel;
