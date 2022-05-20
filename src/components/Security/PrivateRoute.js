import React from "react";
import { Spinner } from "react-bootstrap";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
