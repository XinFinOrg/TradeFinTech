import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  return !isLoggedIn ? <Navigate to="/sign-up" replace /> : children;
};

export default ProtectedRoute;
