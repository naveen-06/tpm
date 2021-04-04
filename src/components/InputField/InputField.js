import React from "react";
import "./InputField.scss";

function InputField({ label, change, ...props }) {
  return (
    <div className="inputContainer">
      <label className="inputLabel">{label}</label>
      <input
        className="inputField"
        onChange={change}
        {...props}
        autoComplete="off"
      />
    </div>
  );
}

export default InputField;
