import React from "react";
import Card from "./Card";

const FlexComponentRow = (props) => {
  console.log(props.data);
  const travel = props.data;
  return (
    <div className="third">
      <Card data={travel[0]} />
      <Card data={travel[1]} />
      <Card data={travel[2]} />
    </div>
  );
};

export default FlexComponentRow;
