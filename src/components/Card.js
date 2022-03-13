import React from "react";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <Link to={`/article/${data.article}`} className="card-a">
      <div className="card">
        <h1 className="heading-card">{data.title}</h1>
        <div className="image-container">
          <img src={data.image} alt={data.altText} width="100%" height="100%" />
        </div>
        <div className="description-card">{data.Des}</div>
        <div className="footer-card">{`${data.category} / ${data.date}`}</div>
      </div>
    </Link>
  );
};

export default Card;
