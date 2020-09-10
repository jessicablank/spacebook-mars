import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Used on the Profile & Task Page to provide education about why we have this feature. 
function TaskInfoModal({ onHide }) {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>About Martian Tasks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> What do you need to do to sustain your daily life on Mars? Maybe conducting research or connecting with fellow Martians! This feature allows you to create, save, and delete your Martian tasks.  </p>
          <p>Here are some ideas to get you started:</p>
          <ul>
            <li>Clear Dust from Solar Panels</li>
            <li>Check pH Levels in Water Treatment Plant</li>
            <li>Ask Alpha Team if They Are Hosting Lunch Tomorrow</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <p>Learn more about life as a Martian at <a href="https://en.wikipedia.org/wiki/Colonization_of_Mars#:~:text=Human%20survival%20on%20Mars%20would,matter%20of%20days%20without%20it."
            target="_blank" aria-label="Link to Wikipedia entry about Colonization of Mars Takes You to a Wikipedia entry" rel="noopener noreferrer">Wikipedia: Colonization of Mars</a></p>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskInfoModal;
