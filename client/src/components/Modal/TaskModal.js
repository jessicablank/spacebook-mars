import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import taskAPI from "../../utils/taskAPI";
import "./style.css";

// function TaskModal({ onHide, task }) {
//   const [tasksData, setTasksData] = useState([]);

function updateTask(id) {
  console.log("button works");
}

//Used on the Tasks Page
function TaskModal({ task, onHide }) {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Form>
              <Form.Group controlId="TaskTitleText">
                <Form.Control className = "TaskTitleText" as="textarea" size="lg" rows="1" value={task.title} />
              </Form.Group>
            </Form>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="TaskBodyText">
              <Form.Control
                as="textarea"
                multiple
                value={task.textBody}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
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

export default TaskModal;
