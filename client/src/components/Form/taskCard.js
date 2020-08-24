import React, { useState } from "react";
import Container from "../Container";
import { Input, TextArea, FormBtn } from "./index";
import taskAPI from "../../utils/taskAPI";

function Task({ onTaskSaved }) {
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    taskAPI
      .saveTask({ title, textBody })
      .then((response) => {
        setTitle("");
        setTextBody("");
      })
      .then((response)=>{
        onTaskSaved();
        setIsPending(false);
      })
      .catch((error) => {
        alert("You must have a title. Try Again 👽");
        console.log(error);
        setIsPending(false);
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
              id="title"
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
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Task;
