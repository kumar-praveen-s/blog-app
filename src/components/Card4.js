import React from "react";
import { Link } from "react-router-dom";

const Card4 = (props) => {
  const data = props.data;
  return (
    <Link to={`/article/${data.article}`} className="card-link">
      <div className="card4-container">
        <div className="box1">
          <img src={data.image} alt={data.altText} />
        </div>
        <div className="box2">
          <h1>{data.title}</h1>
          <h2>{data.id}</h2>
        </div>
        <div className="box3">{data.Des}</div>
        <div className="box4">{`${data.category} / ${data.date}`}</div>
      </div>
    </Link>
  );
};

export default Card4;
