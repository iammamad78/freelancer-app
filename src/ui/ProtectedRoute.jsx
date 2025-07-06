import React from "react";
import useAuthorized from "../features/authentication/useAuthorized";

function ProtectedRoute({ children }) {
  const { user, isLoading, isAuthenticated, isAuthorized } = useAuthorized();

  return children;
}

export default ProtectedRoute;
