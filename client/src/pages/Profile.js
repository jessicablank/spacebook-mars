import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import insightAPI from "./../utils/insightAPI";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import Task from "../components/Form/taskCard";
import ModalComp from "../components/Modal/Modal";
import "./style.css";

function Profile() {
  const [username, setUsername] = useState("");
  //const [email, setEmail] = useState("");
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
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
      //setEmail(res.data.email);
    });
  }, [user]);

  const handleTaskSaved = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <h1>SpaceBook</h1>

      <div className="card mb-3 text-center clear-card">
        <div className="card-body welcome-banner">
          Greetings <br />
          {username}!{/* <p>Email: {email}</p> */}
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
      <h2>Today's Weather</h2>
      {forecast
        //slice method for displaying most recent forecast date
        .slice(0, 1)
        .map((data) => {
          const marsDay = data[0];
          const min = data[1].AT?.mn;
          const max = data[1].AT?.mx;
          const season = data[1].Season;
          const earthDay = data[1].First_UTC;

          const formatDate = (date) =>
            date.toLocaleDateString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
            });
          const earthDate = formatDate(new Date(earthDay));

          const marsMax = max.toFixed(2);
          const marsMin = min.toFixed(2);

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
