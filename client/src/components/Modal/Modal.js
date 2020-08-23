import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Used on the Profile Page
function ModalComp({ onHide }) {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Your task was saved!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click Task button to view all of your tasks!</Modal.Body>
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
