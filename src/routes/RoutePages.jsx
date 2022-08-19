import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { ProtectedRoutes } from "./ProtectedRoutes";

const RoutePages = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default RoutePages;
