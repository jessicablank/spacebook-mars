import React, { useState, useEffect } from "react";
import taskAPI from "../utils/taskAPI";
import Task from "../components/Form/taskCard";
import TaskCard from "../components/TasksCards/index"

function TaskPage() {
  const [setTasks] = useState([])

  useEffect(() => {
    loadTasks()
  }, [])

  function loadTasks() {
    taskAPI.getTasks()
      .then(res =>
        setTasks(res.data)
      )
      .catch(err => console.log(err));
  };
  return (
    <div>
      <h1>Your Tasks</h1>
      <Task />
      <TaskCard />
    </div>
  );
}

export default TaskPage;
