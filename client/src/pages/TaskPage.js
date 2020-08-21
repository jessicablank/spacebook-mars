import React, { useEffect, useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import taskAPI from "../utils/taskAPI";
import Task from "../components/Form/taskCard";
import { Link } from "react-router-dom";
//import TaskCard from "../components/TasksCards/index";
import Container from "../components/Container";
import { List, ListItem } from "../components/List";
import Logout from "../components/Logout/Logout";
import "./style.css";

function TaskPage() {
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  function loadTasks() {
    taskAPI
      .getTasks()
      .then((res) => setTasksData(res.data))
      .catch((err) => console.log(err));
  }

  function deleteTask(id) {
    taskAPI
      .deleteTask(id)
      .then((res) => loadTasks())
      .catch((err) => console.log(err));
  }

  function handleTaskSaved() {
    loadTasks();
  }

  return (
    <div>
      <Container>
        <h1>Your Tasks</h1>
        <div className="mb-3 row justify-content-around">
          <Link to="/profile">
            <button type="button" className="btn btn-primary btn-sm styledBtn">
              Home
            </button>
          </Link>
          <Link to="/forecast">
            <button type="button" className="btn btn-primary btn-sm styledBtn">
              Forecast
            </button>
          </Link>
          <Link to="/roverphotos">
            <button type="button" className="btn btn-primary btn-sm styledBtn">
              Rover
            </button>
          </Link>
        </div>
      </Container>
      <Task onTaskSaved={handleTaskSaved} />

      <Container>
        {tasksData.length ? (
          <List>
            {tasksData.map((task) => (
              <ListItem key={task._id}>
                <Link onClick={() => alert(task.textBody)}>{task.title} </Link>

                <DeleteBtn onClick={() => deleteTask(task._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>Martian Will Tasks Display Here</h3>
        )}
      </Container>
      <div className="mb-3 row justify-content-around">
        <Logout />
      </div>
    </div>
  );
}

export default TaskPage;
