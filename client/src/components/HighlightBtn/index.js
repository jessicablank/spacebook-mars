import React from "react";
import "./style.css";

function HighlightBtn(props) {
  return (
    <span className="highlight-btn" {...props} role="button" tabIndex="0">
      ✔
    </span>
  );
}

export default HighlightBtn;
