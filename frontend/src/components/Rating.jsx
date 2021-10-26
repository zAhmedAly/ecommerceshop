import { Star, StarHalf, StarOutline } from "@material-ui/icons";
import React from "react";

const Rating = ({ value, text, color }) => {
  return (
    <div
      className="rating my-2"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ color, marginRight: "5px" }}>
        <span>
          {value >= 1 ? (
            <Star />
          ) : value >= 0.5 ? (
            <StarHalf />
          ) : (
            <StarOutline />
          )}
        </span>
        <span style={{ color }}>
          {value >= 2 ? (
            <Star />
          ) : value >= 1.5 ? (
            <StarHalf />
          ) : (
            <StarOutline />
          )}
        </span>
        <span style={{ color }}>
          {value >= 3 ? (
            <Star />
          ) : value >= 2.5 ? (
            <StarHalf />
          ) : (
            <StarOutline />
          )}
        </span>
        <span style={{ color }}>
          {value >= 4 ? (
            <Star />
          ) : value >= 3.5 ? (
            <StarHalf />
          ) : (
            <StarOutline />
          )}
        </span>
        <span style={{ color }}>
          {value >= 5 ? (
            <Star />
          ) : value >= 4.5 ? (
            <StarHalf />
          ) : (
            <StarOutline />
          )}
        </span>
      </div>
      <span
        style={{
          textAlign: "start",
        }}
      >
        {text && text}
      </span>
    </div>
  );
};

Rating.defaultProps = {
  color: "gold",
};

export default Rating;
