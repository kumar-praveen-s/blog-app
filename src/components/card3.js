import React from "react";
import { Link } from "react-router-dom";

const CardC3 = (props) => {
  const data = props.data;
  return (
    <Link to={`/articles/${data.article}`} className="card-a">
      <div className="cardc3-cotainer">
        <img src={data.image} alt={data.altText} className="cardc1-img" />
        <div className="cardc3-heading">
          <h1>{data.title}</h1>
          <h2>{data.id}</h2>
        </div>
        <h6 className="cardc3-category">{`${data.category} / ${data.date}`}</h6>
      </div>
    </Link>
  );
};

export default CardC3;
