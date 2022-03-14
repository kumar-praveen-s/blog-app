import React from "react";
import { Link, useParams } from "react-router-dom";
import { Travel, Tech, sports } from "../Data/BlogData";
import "../styling/article.css";

const Article = () => {
  const { id } = useParams();
  let data = Travel[0];
  if (id >= 1 && id <= 6) {
    data = Travel[id - 1];
  } else if (id >= 7 && id <= 12) {
    data = Tech[id - 7];
  } else if (id >= 13 && id <= 18) {
    data = sports[id - 13];
  }

  return (
    <>
      <br />
      <Link to="/" className="icon">
        <i className="fa fa-arrow-left" aria-hidden="true">
          Go Back
        </i>
      </Link>
      <div className="article-page-container">
        <div className="article-container">
          <h1 className="article-heading">{data.title}</h1>
          <img src={data.image} alt={data.date} className="article-img" />
          <p className="article-para">{data.Des}</p>
          <p className="article-para">
            diam volutpat commodo sed egestas egestas fringilla phasellus
            faucibus scelerisque eleifend donec pretium vulputate sapien nec
            sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
            vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo
            eget magna fermentum iaculis eu non diam phasellus vestibulum lorem
            sed risus ultricies tristique
          </p>
          <p className="article-para">
            diam volutpat commodo sed egestas egestas fringilla phasellus
            faucibus scelerisque eleifend donec pretium vulputate sapien nec
            sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
            vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo
            eget magna fermentum iaculis eu non diam phasellus vestibulum lorem
            sed risus ultricies tristique
          </p>
          <p className="article-para">
            diam volutpat commodo sed egestas egestas fringilla phasellus
            faucibus scelerisque eleifend donec pretium vulputate sapien nec
            sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
            vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo
            eget magna fermentum iaculis eu non diam phasellus vestibulum lorem
            sed risus ultricies tristique
          </p>
          <p className="article-para">
            diam volutpat commodo sed egestas egestas fringilla phasellus
            faucibus scelerisque eleifend donec pretium vulputate sapien nec
            sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
            vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo
            eget magna fermentum iaculis eu non diam phasellus vestibulum lorem
            sed risus ultricies tristique
          </p>
          <p className="article-para">
            diam volutpat commodo sed egestas egestas fringilla phasellus
            faucibus scelerisque eleifend donec pretium vulputate sapien nec
            sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
            vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo
            eget magna fermentum iaculis eu non diam phasellus vestibulum lorem
            sed risus ultricies tristique
          </p>
          <p>{`${data.category} / ${data.date}`}</p>
          <br />
        </div>
      </div>
    </>
  );
};

export default Article;
