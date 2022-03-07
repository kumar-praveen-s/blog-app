import * as React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <h1 className="heading">Blog</h1>
      <ul className="container">
        <li>
          <Link to="/" className="a-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/tourism" className="a-link">
            Tourism
          </Link>
        </li>
        <li>
          <Link to="/fitness" className="a-link">
            Fitness
          </Link>
        </li>
        <li>
          <Link to="/technology" className="a-link">
            Technology
          </Link>
        </li>
        <li>
          <Link to="/food" className="a-link">
            Food
          </Link>
        </li>
        {/* <li>Health</li> */}
      </ul>
    </>
  );
};
export default Header;
