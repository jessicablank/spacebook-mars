import React, { useState } from "react";
import API from "./../utils/API";
import Container from "../components/Container";
import { Form, InputGroup } from "../components/LoginForm";
import LoginInfoModal from "../components/Modal/LoginInfoModal";
import { Link, Redirect, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../utils/auth";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";

const signupStyles = {
  maxWidth: "20rem",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showLoginInfoModal, setShowLoginInfoModal] = useState(false);

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  const notify = () => toast.warn("Account already exists! Please Login");

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then((res) => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    //Info Modal
    const handleLoginInfoModal = () => {
      setShowLoginInfoModal(true);
    };

  return (
    <div style={signupStyles} className="Signup">
      <h1>SPACEBOOK</h1>
      <Container>
        <div className="card container-md clear-card">
          <div className="card-body">
            <h4>Greetings Earthling!</h4>
            <p className="card-text">
              Imagine daily life as a Martian by creating an account.{" "}
            </p>
          </div>
        </div>
      </Container>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup
          id="username"
          labelText="Choose a Martian Name"
          placeholder="Mr. Martian XLF-12"
          name="username"
          type="text"
          onChange={handleChange}
        />
        
        <InputGroup
          id="email"
          labelText="Email"
          placeholder="Mars.Rocks@email.com"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <InputGroup
          id="pwd"
          labelText="Password"
          placeholder="p@ssw0Rd!"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button
          className="roundedBtn"
          type="submit"
          onClick={isLoggedIn ? <Redirect to="/" /> : notify}
        >
          Submit
        </button>
        <ToastContainer />
      </Form>

      {showLoginInfoModal && (
        <LoginInfoModal onHide={() => setShowLoginInfoModal(false)} />
      )}

      <Link
        style={{
          marginTop: "1.5rem",
          textAlign: "center",
        }}
        to="/login"
      >
        <button className="roundedBtn btnWidth" type="button">
          Already a Martian?
        </button>
      </Link>
      <button className="roundedBtn btnWidth btn-dark" type="button" style={{
          marginTop: "1.5rem",
          textAlign: "center",
        }}  onClick={(event) => {
          handleLoginInfoModal();
          event.preventDefault();
        }}>
          More Information
        </button>
    </div>
  );
}

export default Signup;
