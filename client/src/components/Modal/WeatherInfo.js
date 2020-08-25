import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//Used on the Profile Page & Weather Page
function WeatherInfoModal({ onHide }) {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>About Today's Weather</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> The developers of SPACEBOOK decided to use actual data from NASA's
          InSight Mars Lander to imagine what a daily weather report might look like for
          Martians in the future.
          </p><p> The InSight API returns seven sols of weather data corresponding to seven days on Earth. As you can imagine, 
          this data is always a little delayed due to space travel. 
          </p>SPACEBOOK is displaying the oldest data from the NASA Insight API first so Martians can see the historical weather data as a forecast. 
        </Modal.Body>
        <Modal.Footer>
          <p>Learn more about NASA's Insight Mission at <a href="https://www.nasa.gov/mission_pages/insight/main/index.html"
            target="_blank" aria-label="Link to Nasa's Insight Mission Takes You to Another Website" rel="noopener noreferrer">NASA InSight</a></p>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WeatherInfoModal;
