import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Used on the Profile Page
function ModalComp({ onHide }) {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Your Task was Saved!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click Tasks Button to View All of Your Tasks!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComp;
