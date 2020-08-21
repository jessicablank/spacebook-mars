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
        .then(res => window.location.reload())
        .catch((err) => console.log(err));
    }
  }

  //style={{ marginLeft: -16, width: 450 }}
  
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
