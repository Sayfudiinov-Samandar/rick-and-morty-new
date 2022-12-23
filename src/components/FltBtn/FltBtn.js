import React from "react";

export const FltBtn = ({ text, index, name, setStet }) => {
  return (
    <div>
      <input
        onClick={(e) => setStet(text)}
        type="radio"
        className="btn-check"
        id={`${name}-${index}`}
        name={name}
        autoComplete="off"
      />
      <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
        {text}
      </label>
      <br />
      <br />
    </div>
  );
};
