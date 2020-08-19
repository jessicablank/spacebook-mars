import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import insightAPI from "./../utils/insightAPI";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import Task from "../components/Form/taskCard"

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    insightAPI.getForecast().then((res) => {
      setForecast(res.data);
      console.log(res.data);
    });
  }, []);

  console.log(forecast);

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <Container>
      <h1>SpaceBook</h1>.
      <div className="card">
        <div className="card-body">
          Greetings {username}!<p>Email: {email}</p>
        </div>
      </div>
      <h1>On the profile page!</h1>
      <p>Username: {username}</p>
      <button type="button" className="btn btn-primary">
        Forecast
      </button>
      <button type="button" className="btn btn-primary">
        Tasks
      </button>

      {/* {forecast.map((sol)=>{
        return(
        <div className="card">
        <div className="card-body">
          <p>Season:</p>
          <p>Earth Day:</p>
          <p>Martian Day:{sol.sol_keys}</p>
          <p>High Temp:</p>
          <p>Low Temp:</p>
        </div>
      </div>
}) )} */}
      
      <div className="card">
        <div className="card-body">
          <p>Season:</p>
          <p>Earth Day:</p>
          <p>Martian Day:{forecast.sol_keys}</p>
          <p>High Temp:</p>
          <p>Low Temp:</p>
        </div>
      </div>
      <Task />
      <Link to="/">Go home</Link>
    </Container>
  );
}

export default Profile;
