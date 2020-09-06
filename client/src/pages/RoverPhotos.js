import React, { useState, useEffect } from "react";
import "./Home/home.css";
import roverAPI from "../utils/roverAPI";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import RoverModal from "../components/Modal/RoverModal";

function RoverPhotos() {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadImages();
  }, []);


  //TODO: create universal objects for each camera
  //display one image from each camera each day

  function loadImages() {
    roverAPI
      .getImages()
      .then((res) => {
        const imagesData = Object.entries(res.data);
        //retrieve each image src from individual camera
        console.log(imagesData[0][1][0].img_src)

        setImages(imagesData[0][1]);
        
        //name and angle from each camera 
        console.log(imagesData[0][1][0].camera.full_name)
        console.log(imagesData[0][1][2].camera.full_name)
        console.log(imagesData[0][1][4].camera.full_name)

      })
      .catch((err) => console.log(err));
  }

  const handleRoverModal = () => {
    setShowModal(true);
  };

  return (
    <div className="Rover-Photos">
      <Container>
        <div className="Rover-header">
          <h1>ROVER PHOTOS</h1>
        </div>
        <div className="mb-3 row justify-content-around">
          <Link to="/profile">
            <button type="button" className="btn btn-primary btn-sm styledBtn">
              Home
            </button>
          </Link>
          <Link to="/task">
            <button type="button" className="btn btn-primary btn-sm styledBtn">
              Tasks
            </button>
          </Link>
          <Link to="/forecast">
            <button type="button" className="btn btn-primary btn-sm styledBtn">
              Forecast
            </button>
          </Link>
        </div>
      </Container>
      {showModal && <RoverModal onHide={() => setShowModal(false)} />}

      <h2>
        Curiosity Rover{" "}
        <button
          type="button"
          className="btn btn-dark"
          onClick={(event) => {
            handleRoverModal();
            event.preventDefault();
          }}
        >
          ?
        </button>
      </h2>
      {images
        .filter((data) => data.id % 2 === 0)
        .slice(0, 3)
        .map((filteredData) => {
          const index = filteredData.id;
          const image = filteredData.img_src;
          const cameraName = filteredData.camera.full_name;

          return (
            <Container key={index}>
              <div className="card container-sm clear-card">
                <img className="roverImages" alt="rover-camera" src={image} />
                <div className="card-body">
                  <p className="card-text">{cameraName}</p>
                </div>
              </div>
            </Container>
          );
        })}
    </div>
  );
}

export default RoverPhotos;
