import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Guard({ children }) {
  const {
    authContext: { isAuthenticated },
  } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return <div>{children}</div>;
}

export default Guard;
