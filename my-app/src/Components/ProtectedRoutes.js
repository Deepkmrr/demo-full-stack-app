import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let accesstoken = Cookies.get("name");
  return !accesstoken ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoutes;
