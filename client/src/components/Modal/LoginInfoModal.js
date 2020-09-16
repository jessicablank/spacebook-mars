import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./style.css";

//Used on the Profile & Task Page to provide education about why we have this feature. 
function LoginInfoModal({ onHide }) {
  return (
    <>
      <Modal show={true} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to SPACEBOOK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Imagine the year is 2099. You are a human living on a colony on Mars. You want to see a weather forecast, view nearby rover images, and manage your tasks for the day.  </p>
          <p> The developers of SPACEBOOK created an application just for Martians like you!</p>
          <ul>
            <li><span className="Login-Info">Martian Name: </span>Get creative with your Martian username. </li>
            <li><span className="Login-Info">Email: </span>SPACEBOOK will never email you or share your email.</li>
            <li><span className="Login-Info">Password: </span>Your password is encrypted and will never be shared. </li>
          </ul>
          <p>After creating a user account, you can login using your email and password to view your saved tasks. </p>
          <p className="Login-Info">Get in touch with the developers of SPACEBOOK:</p>
          <ul>
            <li>Jessica Blankemeier:<a href="https://github.com/jessicablank"
              target="_blank" aria-label="Link to SPACEBOOK developer Jessica Blankemeier's github repo" rel="noopener noreferrer"> GitHub |</a>
            <a href="https://www.linkedin.com/in/jessicablankemeier/"
              target="_blank" aria-label="Link to SPACEBOOK developer Jessica Blankemeier's LinkedIn" rel="noopener noreferrer"> LinkedIn</a></li>
            <li>Timothy Lam:<a href="https://github.com/tlam1288"
              target="_blank" aria-label="Link to SPACEBOOK developer Timothy Lam's github repo" rel="noopener noreferrer"> GitHub |</a>
            <a href="https://www.linkedin.com/in/timothy-lam-8551b315/"
              target="_blank" aria-label="Link to SPACEBOOK developer Timonthy Lam's LinkedIn" rel="noopener noreferrer"> LinkedIn</a></li>
            <li>Lisbeth Machado: <a href="https://github.com/lisbethmachado"
              target="_blank" aria-label="Link to SPACEBOOK developer Lisbeth Machado's github repo" rel="noopener noreferrer"> GitHub |</a>
            <a href="https://www.linkedin.com/in/lisbethdmachado/"
              target="_blank" aria-label="Link to SPACEBOOK developer Lisbeth Machado's LinkedIn" rel="noopener noreferrer"> LinkedIn</a></li>
            
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <p className="Login-Info">You can see <a href="https://github.com/jessicablank/spacebook-mars"
            target="_blank" aria-label="Link to SPACEBOOK github repository" rel="noopener noreferrer"> the source code on Github </a> </p>
          
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginInfoModal;
