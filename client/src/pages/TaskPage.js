import React from "react";
import Task from "../components/Form/taskCard";
import { Link } from "react-router-dom";
import Container from "../components/Container";

function TaskPage() {
  return (
    <Container>
      <h1>Your Tasks</h1>
      <Link to="/profile">
        <button type="button" className="btn btn-primary">
          Home
        </button>
      </Link>
      <Link to="/forecast">
        <button type="button" className="btn btn-primary">
          Forecast
        </button>
      </Link>

      <Task />
    </Container>
  );
}

export default TaskPage;
