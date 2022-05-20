import React from "react";

import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  const location = useLocation();


  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
