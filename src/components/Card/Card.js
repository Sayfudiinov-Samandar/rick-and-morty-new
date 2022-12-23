import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ image, name, location, status }) => {
  return (
    <div className="card position-relative" style={{ width: "18rem" }}>
      {(function () {
        if (status === "Alive") {
          return (
            <div
              style={{ top: "10px", right: "10px" }}
              className="position-absolute badge bg-success">
              {status}
            </div>
          );
        }

         else if (status === "Dead") {
          return (
            <span
              style={{ top: "10px", right: "10px" }}
              className="position-absolute badge bg-danger">
              {status}
            </span>
          );
        } else {
          <span
            style={{ top: "10px", right: "10px" }}
            className="position-absolute badge bg-primary">
            {status}
          </span>;
        }
      })()}

      {/* <div
        style={{ top: "10px", right: "10px" }}
        className="position-absolute badge bg-success">
        {status}
      </div> */}

      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title fs-4">{name}</h5>
        <p className="card-text m-0 text-primary fs-5">Last location</p>
        <p className="card-text ">{location}</p>

        <Link to="/" className="btn btn-primary">
          More info
        </Link>
      </div>
    </div>
  );
};
