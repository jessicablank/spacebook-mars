import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Used on the Profile Page
function WeatherInfoModal({ onHide }) {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>About the Weather Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The developers of SPACEBOOK decided to use actual data from NASA's
          InSight Mission to imagine what a daily weather report might look like for
          Martians. This data displays seven sols with
          the most recent sol corresponding to about 15 days behind the current
          actual Earth Day.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WeatherInfoModal;
