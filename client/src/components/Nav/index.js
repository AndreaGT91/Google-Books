import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
      <div className="container-fluid">
          <div className="navbar-header">
            <p className="navbar-text" style={{color:"white", fontWeight: "bold"}}>Google Books</p>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/Search">Search</Link>
            </li>
            <li>
              <Link to="/Saved">Saved</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Nav;