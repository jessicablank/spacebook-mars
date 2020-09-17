import React, { useState } from "react";
import Container from "../components/Container";
import { Form, InputGroup } from "../components/LoginForm";
import { Link, Redirect, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../utils/auth";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";

const loginStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "20rem",
  margin: "0 auto",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  const notify = () => toast.warn("Incorrect Username or Password!", { delay: 1000 });

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/profile"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={loginStyle}>
      <h1>SPACEBOOK</h1>
      <Container>
        <div className="card container-sm clear-card">
          <div className="card-body">
            <h4>Greetings Martian!</h4>
            <p className="card-text">Please Log-in</p>
          </div>
        </div>
      </Container>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup
          id="email"
          labelText="Email"
          placeholder="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup
          id="password"
          labelText="Password"
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          className="roundedBtn" 
          type="submit"
          onClick={isLoggedIn ? <Redirect to="/" /> : notify}>
          Submit
        </button>
        <ToastContainer />
      </Form>
      <Link
        style={{
          marginTop: "1.5rem",
          textAlign: "center",
        }}
        to="/signup"
      >
        <button className="roundedBtn btnWidth" type="button">
          Not a Martian yet?
        </button>
      </Link>
    </div>
  );
}

export default Login;
