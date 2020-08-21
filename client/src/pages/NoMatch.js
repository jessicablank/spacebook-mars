import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";

function NoMatch() {
  return (
    <Container>
      <h1>404 Page Not Found</h1>
      <List>
        <p>Sorry Martian. Do you want to go home?</p>
      <span role="img" aria-label="earth emogi">
        🌎
      </span>
      <Link to="/profile">
        <button type="button" className="btn btn-primary btn-lg styledBtn">
          Home
        </button>
      </Link>
      </List>
    </Container>
  );
}

export default NoMatch;
