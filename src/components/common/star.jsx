import React from "react";
const Star = ({ clicked, onStarClick, isStarActive }) => {
  return (
    <i
      className={`float-right fa-2x fa fa-star${isStarActive ? "" : "-o"}`}
      onClick={onStarClick}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    ></i>
  );
};

export default Star;
