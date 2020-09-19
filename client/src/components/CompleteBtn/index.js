import React from "react";
import "./style.css";

function CompleteBtn(props) {
  return (
    <span className="complete-btn" {...props} role="button" tabIndex="0">
      ✔
    </span>
  );
}

export default CompleteBtn;
