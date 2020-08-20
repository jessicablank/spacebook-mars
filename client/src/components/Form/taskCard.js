import React, { useState } from "react";
import taskAPI from "../../utils/taskAPI";
import Container from "../Container";
import { Input, TextArea, FormBtn } from "./index";

function Task() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      taskAPI
        .saveTask({
          title: formObject.title,
          textBody: formObject.textBody,
        })
        // .then(res => loadBooks())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container>
      <div style={{ marginLeft: -16, width: 450 }} className="card">
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
              placeholder="Plan your day on mars!"
            />
            <FormBtn disabled={!formObject.title} onClick={handleFormSubmit}>
              Submit Task
            </FormBtn>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Task;
