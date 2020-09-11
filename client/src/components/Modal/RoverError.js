import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Used on the Rover Page
function RoverError({ onHide }) {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Error Receiving Rover Images </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <span role="img" aria-label="thinking person">🤔
        </span>Suggestion: Add a task to check the rover?
        </Modal.Body>
        <Modal.Footer>
          <p>Learn more about NASA's Mar's Curiosity Rover at <a href="https://mars.nasa.gov/msl/home/"
            target="_blank" aria-label="Link to NASA's Curiosity Rover Takes You to Another Website" rel="noopener noreferrer">Mars Curiosity Rover</a></p>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RoverError;
