import React, { useState, useEffect } from "react";
import "./Home/home.css";
import roverAPI from "../utils/roverAPI";
import { Link } from "react-router-dom";
import Container from "../components/Container";
//import Logout from "../components/Logout/Logout";

function RoverPhotos() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  function loadImages() {
    roverAPI
      .getImages()
      .then((res) => {
        const imagesData = Object.entries(res.data);
        console.log("images ", imagesData[0][1]);
        setImages(imagesData[0][1]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="Rover-Photos">
      <Container>
        <div className="Rover-header">
          <h1>Rover Photos</h1>
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
      {images.slice(0, 5).map((data) => {
        // const id = data[0].id
        const image = data.img_src;
        const earthDate = data.earth_date;
        console.log("my images" + images);
        console.log("my data" + data);

        return (
          <Container>
            <div className="card container-sm clear-card">
              <img className="roverImages" alt="rover-camera" src={image} />
              <div className="card-body">
                <p className="card-text">{cameraName}</p>
              </div>
            </div>
          </Container>
        );
      })}
      {/* <div className="mb-3 row justify-content-around">
        <Logout />
      </div> */}
    </div>
  );
}

export default RoverPhotos;
