import React from "react";
import "./style.css";
import Container from "../Container";
//Currently not in use, see List Component Folder and TaskPage.js

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
