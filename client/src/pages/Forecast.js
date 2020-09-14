import React, { useState, useEffect } from "react";
import insightAPI from "./../utils/insightAPI";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { trackPromise} from "react-promise-tracker";
import LoadingIndicator from "../components/LoadingIndicator";
import WeatherInfoModal from "../components/Modal/WeatherInfo";
import "./style.css";

function ForecastPage() {
  const [forecast, setForecast] = useState([]);
  const [showWeatherModal, setShowWeatherModal] = useState(false);

  useEffect(() => {
    loadForecast();
  }, []);

  //trackPromise sets the loading indicator while data is fetched. 
  function loadForecast() {
    trackPromise(insightAPI
      .getForecast()
      .then((res) => {
        const forecastData = Object.entries(res.data);
        setForecast(forecastData);
      }))
      .catch((err) => console.log(err));
  }

  //Info Modal
  const handleWeatherModal = () => {
    setShowWeatherModal(true);
  };

  return (
    <Container>
      <h1>EXTENDED FORECAST</h1>
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
        Next Seven Sols{" "}
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

      {forecast.slice(0, 6).map((data) => {
        const marsDay = data[0];
        const min = data[1].AT?.mn;
        const max = data[1].AT?.mx;
        const earthDay = data[1].First_UTC;

        const formatDate = (date) =>
          date.toLocaleDateString(undefined, {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
        const earthDate = earthDay
          ? formatDate(new Date(earthDay))
          : "Data Currently Unavailable";
        const marsMax = max ? max.toFixed(2) : "N/A";
        const marsMin = min ? min.toFixed(2) : "N/A";

        const marsMaxF = max ? ((marsMax * 9) / 5 + 32).toFixed(2) : "N/A";
        const marsMaxC = min ? ((marsMin * 9) / 5 + 32).toFixed(2) : "N/A";

        return (
          <div className="card mb-3 clear-card" key={marsDay}>
            <div className="card-body">
              <LoadingIndicator />
              <p>Earth Day: {earthDate}</p>
              <p>Martian Sol: {marsDay ? marsDay : "N/A"}</p>
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
    </Container>
  );
}

export default ForecastPage;
