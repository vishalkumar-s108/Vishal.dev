import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = true; // TODO: replace with real auth logic

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
