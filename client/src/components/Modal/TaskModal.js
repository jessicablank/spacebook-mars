import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import taskAPI from "../../utils/taskAPI";


function TaskModal({ onHide, task }) {
  const [tasksData, setTasksData] = useState([]);

function updateTask(id) {
  console.log("button works")

}



//Used on the Tasks Page
function TaskModal() {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title><input value={task.title} onChange={(e) => task.titleHandler(e)}/></Modal.Title>
        </Modal.Header>
        <Modal.Body><input className = "module-body" value={task.textBody}/></Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={updateTask}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
}

export default TaskModal;
