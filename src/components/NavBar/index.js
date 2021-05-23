import React from "react";
import { Link } from "react-router-dom";
// import logo from '../logo.svg'
export default function Navbar({ sticky }) {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            src="https://2.bp.blogspot.com/-TzV3KQfBNf4/WYMd7WRQgcI/AAAAAAAAC78/g9A4YWRZ5V8B7aWYMLJga1Gzgl-jlNR3ACLcBGAs/s1600/tmdb-logo.jpg"
            alt="cocktail db logo"
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
