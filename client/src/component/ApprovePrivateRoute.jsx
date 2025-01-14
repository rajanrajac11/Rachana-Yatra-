import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ApprovePrivateRoute({ children }) {
  const { currentUser } = useSelector((state) => state.persistedReducer.user);
  return currentUser.adminStatus ? children : <Navigate to="/" />;
}

export default ApprovePrivateRoute;
