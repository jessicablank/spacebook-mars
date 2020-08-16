import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../utils/auth";

function ProtectedRoute(props) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Route {...props} />;
  }
  return <Redirect to="/signup" />;
}

export default ProtectedRoute;
