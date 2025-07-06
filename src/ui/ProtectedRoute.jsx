import React, { useEffect } from "react";
import useAuthorized from "../features/authentication/useAuthorized";
import { useNavigate } from "react-router-dom";
import Loading from "../ui/Loading";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated, isAuthorized } = useAuthorized();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isLoading, isAuthenticated, isAuthorized, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
