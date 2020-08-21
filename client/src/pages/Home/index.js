import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";
import roverAPI from "../../utils/roverAPI";


function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();
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
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  const goToEditProfile = () => history.push("/profile");

  // const roverImages = []

  return (
    <div className="Home">
      <div className="Home-header">
        {/* <img src={logo} className="Home-logo" alt="logo" /> */}
        <h1>Rover Photos</h1>
      </div>
      <p className="Home-intro">
        <button onClick={goToEditProfile}>Go to Profile</button>
        <button style={{ marginLeft: "1em" }} onClick={() => logout()}>
          Logout
        </button>
      </p>

      {images.slice(0, 5).map((data) => {
        // const id = data[0].id
        const image = data.img_src;
        const earthDate = data.earth_date;
        console.log("my images" + images);
        console.log("my data" + data);

        return (
          <div className="card container-sm clear-card">
            <img className="roverImages" alt="rover-camera" src={image} />
            <div className="card-body">
              <p className="card-text">{earthDate}</p>
            </div>
          </div>
        );})
      }
    </div>
  );
}

export default Home;
