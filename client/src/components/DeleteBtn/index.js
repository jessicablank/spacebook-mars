import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <span title="Click to Delete Task" className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
