import React from "react";
import Task from "../components/Form/taskCard";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import TaskCard from "../components/TasksCards/index";

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
        <TaskCard />
      </Container>
    </div>
  );
}

export default TaskPage;
