import React, { useEffect, useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import taskAPI from "../utils/taskAPI";
import Task from "../components/Form/taskCard";
import TaskModal from "../components/Modal/TaskModal";
import TaskInfoModal from "../components/Modal/TaskInfoModal";
import LoadingIndicator from "../components/LoadingIndicator";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { List, ListItem } from "../components/List";
import { trackPromise } from "react-promise-tracker";
import "./style.css";

function TaskPage() {
  const [tasksData, setTasksData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [singleTaskForModal, setSingleTaskForModal] = useState({});
  const [showTaskInfoModal, setShowTaskInfoModal] = useState(false);  

  useEffect(() => {
    loadTasks();
  }, []);

  function loadTasks() {
    trackPromise(
      taskAPI
        .getTasks()
        .then((res) => setTasksData(res.data))
        .catch((err) => console.log(err))
    );
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

  const handleTaskInfoModal = () => {
    setShowTaskInfoModal(true);
  };

  //these variables set the task counter data
  const tasksNoun = tasksData.length !== 1 ? "Tasks" : "Task";
  const headingText = `${tasksData.length} ${tasksNoun} Remaining`;

  return (
    <div>
      <Container>
        <h1>YOUR TASKS</h1>
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

      {showTaskInfoModal && (
        <TaskInfoModal onHide={() => setShowTaskInfoModal(false)} />
      )}
      <h2>
        {" "}
        Quickly Add a New Task{" "}
        <button
          type="button"
          className="btn btn-dark"
          title="More information"
          onClick={(event) => {
            handleTaskInfoModal();
            event.preventDefault();
          }}
        >
          ?
        </button>
      </h2>
      <Task onTaskSaved={handleTaskSaved} />

      {showModal && (
        <TaskModal
          onHide={() => setShowModal(false)}
          task={singleTaskForModal}
        />
      )}

      <h2>Click to See Details</h2>

      <Container>
        <LoadingIndicator />
        {tasksData.length ? (
          <List>
            <p>{headingText}</p>
            {tasksData.map((task) => (
              <ListItem key={task._id}>
                <a
                  id="taskTitleLink"
                  href="#taskTitleLink"
                  title="Clickable Task Title to Task Details"
                  onClick={(event) => {
                    setTaskStateAndShowModal(task);
                    event.preventDefault();
                  }}
                >
                  {task.title}
                </a>
                <DeleteBtn onClick={() => deleteTask(task._id)} />
               
              </ListItem>
            ))}
          </List>
        ) : (
          <h4>Saved Martian Tasks Will Display Here.</h4>
        )}
      </Container>
    </div>
  );
}

export default TaskPage;
