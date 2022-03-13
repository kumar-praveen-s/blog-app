import React from "react";
import CardC1 from "./cardC1";

const FlexComponentColumn = (props) => {
  const data = props.data;
  return (
    <div className="column-container">
      <CardC1 data={data[0]} />
      <CardC1 data={data[1]} />
      <CardC1 data={data[2]} />
      <CardC1 data={data[3]} />
      <CardC1 data={data[4]} />
      <CardC1 data={data[5]} />
    </div>
  );
};

export default FlexComponentColumn;
