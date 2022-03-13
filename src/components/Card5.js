import React from "react";
import { Link } from "react-router-dom";

const Card5 = (props) => {
  const data = props.data;
  return (
    <Link to={`/article/${data.article}`} className="card-link">
      <div className="card5-container">
        <div className="box5">
          <img src={data.image} alt={data.altText} />
        </div>
        <div className="box6">
          <h1>{data.title}</h1>
          <h2>{data.id}</h2>
        </div>
        <div className="box7">{`${data.category} / ${data.date}`}</div>
      </div>
    </Link>
  );
};

export default Card5;
