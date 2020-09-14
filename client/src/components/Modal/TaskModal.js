import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import taskAPI from "../../utils/taskAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function TaskModal({ onHide, onTaskUpdated, task }) {
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");
  

  const notify = () => toast.warn("You cannot save an empty task!");  

 const updateTask=(event)=> {
    console.log("updateTask button works");
    event.preventDefault();
    
    taskAPI
      .updateTask({ title, textBody })
      .then((response) => {
        setTitle("");
        setTextBody("");
      })
      .then((response) => {
        onTaskUpdated();
      })
      .catch((error) => {
        console.log(error);
        notify();
      });
  }

  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Form>
              <Form.Group controlId="TaskTitleText">
                <Form.Control
                  className="TaskTitleText"
                  type="text"
                  as="textarea"
                  size="lg"
                  rows="1"
                  value={task.title ? task.title : ""}
                  onChange={(event)=> setTitle(event.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="TaskBodyText">
              <Form.Control
              type="text"
                as="textarea"
                multiple
                value={task.textBody}
                onChange={(event)=> setTextBody(event.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={updateTask}
          >
            Save Changes
            <ToastContainer />
          </Button>
          <Button variant="secondary"
           onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskModal;
