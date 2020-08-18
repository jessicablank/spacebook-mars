import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <h1>On the profile page!</h1>
      <Card>
        <Card.Body>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <Link to="/">Go home</Link>
        </Card.Body>
      </Card>
      <Row>
        <Col>
          <button className="roundedBtn" type="submit">
            Submit
          </button>
        </Col>
        <Col>
          <button className="roundedBtn" type="submit">
            Submit
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
