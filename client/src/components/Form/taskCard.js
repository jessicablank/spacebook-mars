import React, { useState } from "react";
import Container from "../Container";
import { Input, TextArea, FormBtn } from "./index";
import taskAPI from "../../utils/taskAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Task({ onTaskSaved }) {
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  const notify = () => toast.warn("You cannot save an empty task!");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    taskAPI
      .saveTask({ title, textBody })
      .then((response) => {
        setTitle("");
        setTextBody("");
      })
      .then((response) => {
        onTaskSaved();
        setIsPending(false);
      })
      .catch((error) => {
        console.log(error);
        setIsPending(false);
        notify();
      });
  };

  return (
    <Container>
      <div className="card container-sm clear-card">
        <div className="card-body">
          <form onSubmit={handleSubmit} disabled={isPending}>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              value={title}
              name="title"
              placeholder="Task Title (Required)"
            />
            <TextArea
              onChange={(e) => setTextBody(e.target.value)}
              type="text"
              id="textBody"
              value={textBody}
              name="textBody"
              placeholder="Plan your day on Mars!"
            />

            <FormBtn
              value={isPending ? "Saving..." : "Submit"}
              onClick={handleSubmit}
            >
              Save
            </FormBtn>
            <ToastContainer />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Task;
