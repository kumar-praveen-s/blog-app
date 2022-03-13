import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/navBar.css";

const NavBar = () => {
  const [view, changeView] = useState(false);
  const handleClick = () => {
    changeView(view ? false : true);
  };
  return (
    <>
      <div className="navbar">
        <h1 className="heading">Blog</h1>
        <ul className="container">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/tech">
            <li>Technology</li>
          </Link>
          <Link to="/sports">
            <li>Sports</li>
          </Link>
          <Link to="/travel">
            <li>Travel</li>
          </Link>
        </ul>
        <div className="mobile">
          <button onClick={handleClick}>
            <i className="icon fa fa-bars"></i>
          </button>
        </div>
      </div>
      {view && (
        <ul className="mobile-ul">
          <Link to="/">
            <li className="mobile-li">
              <button onClick={handleClick}>Home</button>
            </li>
          </Link>
          <Link to="/tech">
            <li className="mobile-li">
              <button onClick={handleClick}>Technology</button>
            </li>
          </Link>
          <Link to="/sports">
            <li className="mobile-li">
              <button onClick={handleClick}>Sports</button>
            </li>
          </Link>
          <Link to="/travel">
            <li className="mobile-li">
              <button onClick={handleClick}>Travel</button>
            </li>
          </Link>
        </ul>
      )}
    </>
  );
};

export default NavBar;
