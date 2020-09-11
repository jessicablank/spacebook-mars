import React, { useState, useEffect} from "react";
import "./Home/home.css";
import roverAPI from "../utils/roverAPI";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import RoverModal from "../components/Modal/RoverModal";
import LoadingIndicator from "../components/LoadingIndicator";
import { trackPromise } from "react-promise-tracker";
import "./style.css";

function RoverPhotos() {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadImages();
  }, []);

  //trackPromise sets the loading indicator while data is fetched.
  function loadImages() {
    trackPromise(
      roverAPI.getImages().then((res) => {
        const imagesData = Object.entries(res.data);
        setImages(imagesData[0][1]);
      })
    ).catch((err) => console.log(err));
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
      <LoadingIndicator />
       {/* Check for images, then remove duplicates from the images object */}
       {images.length ? (
         <div>
      {images.filter(
          (v, index, filteredData) =>
            filteredData.findIndex((t) => t.camera.name === v.camera.name) ===
            index
        )
        .map((mappedData) => {
          const index = mappedData.id;
          const image = mappedData.img_src;
          const cameraName = mappedData.camera.full_name;
         
          return (
            <Container key={index}>
              <div className="card container-sm clear-card" id="rover-images">
                <img className="card-img-top"
                  id="roverImages"
                  alt="rover camera images"
                  src={image}
                />
                <div className="card-body">
                  <p className="card-text">{cameraName ? cameraName : "There seems to be an error. Make a task to check the Rover"}</p>
                </div>
              </div>
            </Container>
          ) 
        })}
        </div>
        ) : <h4 className= "center">No Images🤔Add a Task to Check the Rover</h4>}
    </div>
  );
}

export default RoverPhotos;
