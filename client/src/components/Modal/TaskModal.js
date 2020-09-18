import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Input, TextArea } from "./index";
import Modal from "react-bootstrap/Modal";
import taskAPI from "../../utils/taskAPI";

//Used on the Tasks Page

function TaskModal({ onHide, task }) {
  const [textBody, setTextBody] = useState("");

  function handleUpdateTask(id) {
    alert("button works!")
    console.log(textBody);
    taskAPI
      .updateTask(id)
      .then((response) => {
        setTextBody("");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{task.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {task.textBody}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => handleUpdateTask(task._id)}>
          Save Changes
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskModal;
