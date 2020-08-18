import React from "react";
import "./LoginForm.css";

function InputGroup({ id, labelText, ...inputProps }) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className="roundedInput" id={id} {...inputProps} />
    </>
  );
}

export default InputGroup;
