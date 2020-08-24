import React from "react";
import "./style.css";
import Container from "../Container";

//currently not in use


function TaskCard() {
  return (
    <Container>
      <div className="card container-sm clear-card">
        <div className="card-body">
          <h3>Your Tasks:</h3>
        </div>
      </div>
    </Container>
  );

}

export default TaskCard;
