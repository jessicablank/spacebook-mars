import React from "react";
import "./style.css";
import Container from "../Container";

function TaskCard() {
 return (
    <Container>
      <div className="card container-sm clear-card">
        <div className="card-body">Your Tasks:</div>
      </div>
    </Container>
  );

}

export default TaskCard;