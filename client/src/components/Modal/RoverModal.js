import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Used on the Rover Page
function RoverInfoModal({ onHide }) {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>About Rover Photos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> This page shows actual pictures taken by NASA's Mars Curiosity Rover the Earth day corresponding to day on the SPACEBOOK Profile Page</p>
          The developers of SPACEBOOK imagine that Martians will periodically check in with nearby Rovers to conduct research. 
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

export default RoverInfoModal;