import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import insightAPI from "./../utils/insightAPI";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    loadForecast();
  }, []);

  function loadForecast() {
    insightAPI
      .getForecast()
      .then((res) => {
        const forecastData = Object.entries(res.data);
        console.log("forecast ", forecastData);
        console.log("day", forecastData[0][0]);
        console.log("Earth day", forecastData[0][1].First_UTC);
        console.log("minimum ", forecastData[0][1].AT.mn);
        console.log("maximum ", forecastData[0][1].AT.mx);
        console.log("season ", forecastData[0][1].Season);
        setForecast(forecastData);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <Container>
      <h1>SpaceBook</h1>
      <div className="card">
        <div className="card-body">
          Greetings {username}!<p>Email: {email}</p>
        </div>
      </div>

      <p>Username: {username}</p>
      <button type="button" className="btn btn-primary">
        Forecast
      </button>
      <button type="button" className="btn btn-primary">
        Tasks
      </button>
      {forecast
        .slice(0, 6)
        .reverse()
        .map((data) => {
          const marsDay = data[0];
          const min = data[1].AT?.mn;
          const max = data[1].AT?.mx;
          const season = data[1].Season;
          const earthDay = data[1].First_UTC;

          return (
            <div className="card" key={marsDay}>
              <div className="card-body">
                <p>Season: {season}</p>
                <p>Earth Day: {earthDay}</p>
                <p>Martian Day: {marsDay}</p>
                <p>High Temp: {max}</p>
                <p>Low Temp: {min}</p>
              </div>
            </div>
          );
        })}
      <Link to="/">Go home</Link>
    </Container>
  );
}

export default Profile;
