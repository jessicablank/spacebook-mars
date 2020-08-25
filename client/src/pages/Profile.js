import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import insightAPI from "./../utils/insightAPI";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import Task from "../components/Form/taskCard";
import ModalComp from "../components/Modal/Modal";
import WeatherInfoModal from "../components/Modal/WeatherInfo";
import "./style.css";

function Profile() {
  const [username, setUsername] = useState("");
  //const [email, setEmail] = useState("");
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    loadForecast();
  }, []);

  function loadForecast() {
    insightAPI
      .getForecast()
      .then((res) => {
        const forecastData = Object.entries(res.data);
        setForecast(forecastData);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
    });
  }, [user]);

  const handleWeatherModal = () => {
    setShowWeatherModal(true);
  };

  const handleTaskSaved = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <h1>SPACEBOOK</h1>

      <div className="card mb-3 text-center clear-card">
        <div className="card-body welcome-banner">
          Greetings <br />
          {username}!
        </div>
      </div>
      <div className="mb-3 row justify-content-around">
        <Link to="/forecast">
          <button type="button" className="btn btn-primary btn-sm styledBtn">
            Forecast
          </button>
        </Link>
        <Link to="/task">
          <button type="button" className="btn btn-primary btn-sm styledBtn">
            Tasks
          </button>
        </Link>
        <Link to="/roverphotos">
          <button type="button" className="btn btn-primary btn-sm styledBtn">
            Rover
          </button>
        </Link>
      </div>

      {showWeatherModal && (
        <WeatherInfoModal onHide={() => setShowWeatherModal(false)} />
      )}

      <h2>
        Today's Weather{" "}
        <button
          type="button"
          className="btn btn-dark"
          onClick={(event) => {
            handleWeatherModal();
            event.preventDefault();
          }}
        >
          ?
        </button>
      </h2>
      {forecast.slice(0, 1).map((data) => {
        const marsDay = data[0];
        const min = data[1].AT?.mn;
        const max = data[1].AT?.mx;
        const season = data[1].Season;
        const earthDay = data[1].First_UTC;
        console.log("data:"+ data);

        const formatDate = (date) =>
          date.toLocaleDateString(undefined, {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
        const earthDate = formatDate(new Date(earthDay));

        const marsMax = max ? max.toFixed(2) : "N/A";
        const marsMin = min ? min.toFixed(2) : "N/A";

        const marsMaxF = ((marsMax * 9) / 5 + 32).toFixed(2);
        const marsMaxC = ((marsMin * 9) / 5 + 32).toFixed(2);

        return (
          <div className="card mb-3 clear-card" key={marsDay}>
            <div className="card-body">
              <p>Season: {season}</p>
              <p>Earth Day: {earthDate}</p>
              <p>Martian Sol: {marsDay}</p>
              <p>
                High Temp: {marsMax} °C | {marsMaxF} °F
              </p>
              <p>
                Low Temp: {marsMin} °C | {marsMaxC} °F
              </p>
            </div>
          </div>
        );
      })}
      <h2>Quickly Add a Task</h2>
      <Task onTaskSaved={handleTaskSaved} />
      {showModal && <ModalComp onHide={() => setShowModal(false)} />}
    </Container>
  );
}

export default Profile;
