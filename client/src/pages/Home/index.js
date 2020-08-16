import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/profile");

  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>Welcome {user.email}</h2>
      </div>
      <p className="Home-intro">
        <button onClick={goToEditProfile}>Go to Profile</button>
        <button style={{ marginLeft: "1em" }} onClick={() => logout()}>
          Logout
        </button>
      </p>
    </div>
  );
}

export default Home;
