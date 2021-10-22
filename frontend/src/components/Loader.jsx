import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "50%",
        marginTop: "-50px",
        left: "50%",
        marginLeft: "-50px",
        // margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};
export default Loader;
