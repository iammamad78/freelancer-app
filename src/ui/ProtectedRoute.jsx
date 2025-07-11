import React, { useEffect } from "react";
import useAuthorized from "../features/authentication/useAuthorized";
import { useNavigate } from "react-router-dom";
import Loading from "../ui/Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated, isAuthorized, isVerified } =
    useAuthorized();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error(
        "حساب کاربری شما تایید نشده است. لطفا منتظر تایید حساب خود باشید."
      );
     navigate("/not-access", { replace: true })
    }

    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isLoading, isAuthenticated, isAuthorized, isVerified, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
