import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

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
      <div className="card">
        <div className="card-body">
          <p>Season:</p>
          <p>Earth Day:</p>
          <p>Martian Day:</p>
          <p>High Temp:</p>
          <p>Low Temp:</p>
        </div>
      </div>
      <Link to="/">Go home</Link>
    </Container>
  );
}

export default Profile;
