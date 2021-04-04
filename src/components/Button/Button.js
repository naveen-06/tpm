import React from "react";
import "./Button.scss";

function Button({ children, click, ...props }) {
  return (
    <button className="btn" onClick={click} {...props}>
      {children}
    </button>
  );
}

export default Button;
