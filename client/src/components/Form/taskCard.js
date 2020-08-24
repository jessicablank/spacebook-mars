import React, { useState } from "react";
import Container from "../Container";
import { Input, TextArea, FormBtn } from "./index";
import taskAPI from "../../utils/taskAPI";

function Task({ onTaskSaved }) {
  const [formObject, setFormObject] = useState({});
  const [isPending, setIsPending] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (formObject.title && !isPending) {
      setIsPending(true);
      taskAPI
        .saveTask({
          title: formObject.title,
          textBody: formObject.textBody,
        })
        .then(() => setFormObject({
          title: formObject.title = "",
          textBody: formObject.textBody = "",
        }))
        .then((res) => {
          if (onTaskSaved) {
            onTaskSaved();
          }
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          console.log(err);
        });
    }
  }

  return (
    <Container>
      <div className="card container-sm clear-card">
        <div className="card-body">
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Task Title (Required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="textBody"
              placeholder="Plan your day on Mars!"
            />

            <FormBtn
              disabled={isPending || !formObject.title}
              onClick={handleFormSubmit}
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
