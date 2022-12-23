import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Headers = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container ">
    <Link to={"/"} className="navbar-brand" href="#">
        Rick and Morty
    </Link>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={"/"}  className="nav-link active" aria-current="page" href="#">
          Characte
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/location"}  className="nav-link" href="#">
            Location
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/episode"} className="nav-link" href="#">
            Episode
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
};
