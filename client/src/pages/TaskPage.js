import React from "react";
import Task from "../components/Form/taskCard";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import TaskCard from "../components/TasksCards/index";
import "./Profile.css";

function TaskPage() {
  // const [setTasks] = useState([]);

  // useEffect(() => {
  //   loadTasks();
  // }, [loadTasks]);

  // function loadTasks() {
  //   taskAPI.getTasks()
  //     .then(res =>
  //       setTasks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // }

  return (
    <div>
      <Container>
        <h1>Your Tasks</h1>
        <div className="mb-3 row justify-content-around">
          <Link to="/profile">
            <button type="button" className="btn btn-primary btn-lg styledBtn">
              Home
            </button>
          </Link>
          <Link to="/forecast">
            <button type="button" className="btn btn-primary btn-lg styledBtn">
              Forecast
            </button>
          </Link>
        </div>
        <Task />
        <TaskCard />
      </Container>
    </div>
  );
}

export default TaskPage;
