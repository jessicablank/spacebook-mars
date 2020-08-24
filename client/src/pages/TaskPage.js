import React, { useEffect, useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import taskAPI from "../utils/taskAPI";
import Task from "../components/Form/taskCard";
import TaskModal from "../components/Modal/TaskModal";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { List, ListItem } from "../components/List";
import "./style.css";

function TaskPage() {
  const [tasksData, setTasksData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [singleTaskForModal, setSingleTaskForModal] = useState({});

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

  function setTaskStateAndShowModal(task) {
    setSingleTaskForModal(task);
    setShowModal(true);
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
      <h2>Quickly Add a Task</h2>
      <Task onTaskSaved={handleTaskSaved} />

      {showModal && (
        <TaskModal
          onHide={() => setShowModal(false)}
          task={singleTaskForModal}
        />
      )}

      <h2>Click Task to See Details</h2>
      <Container>
        {tasksData.length ? (
          <List>
            {tasksData.map((task) => (
              <ListItem key={task._id}>
                <link onClick={() => setTaskStateAndShowModal(task)}>
                  {task.title}
                </link>

                <DeleteBtn onClick={() => deleteTask(task._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
          <h4>Martian Tasks Will Display Here. Add some!</h4>
        )}
      </Container>
    </div>
  );
}

export default TaskPage;
