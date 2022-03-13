import React from "react";
import { Travel } from "../Data/BlogData";
import Card from "./Card";

const SecondComponentHome = () => {
  const travel = Travel;
  return (
    <div className="third">
      <Card data={travel[0]} index="1" />
      <Card data={travel[1]} index="2" />
      <Card data={travel[2]} index="3" />
    </div>
  );
};

export default SecondComponentHome;
