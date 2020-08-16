import React from "react";

function InputGroup({ id, labelText, ...inputProps }) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} {...inputProps} />
    </>
  );
}

export default InputGroup;
