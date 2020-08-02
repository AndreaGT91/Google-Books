import React from "react";
import "./style.css";

function Wrapper(props) {
  const wrapperHeight = window.innerHeight - 62; // Full size, minus nav
  return <div className="wrapper" style={{ height: wrapperHeight }}>{props.children}</div>;
}

export default Wrapper;