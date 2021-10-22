import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "50px",
        height: "50px",
        position: "absolute",
        top: "50%",
        marginTop: "-25px",
        left: "50%",
        marginLeft: "-25px",
        display: "block",
        backgroundColor: "lightgray",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};
export default Loader;
