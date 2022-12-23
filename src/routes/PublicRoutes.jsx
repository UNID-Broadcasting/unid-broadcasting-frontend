import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Singup from "../pages/Singup";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";
import Podcast from "../pages/Podcast";
import Team from "../pages/Team";
import Video from "../pages/Video";
import NotFoundPage from "../pages/NotFoundPage";
import LoadingPage from "../pages/LoadingPage";

const PublicRoutes = () => {
  const [token, setToken] = useState(true);

  /* Creamos una constante que tenga un setimeout y cambie la variable token */

  const showPage = async () => {
    setTimeout(() => {
      setToken(false);
    }, 1000);
  };

  useEffect(() => {
    showPage();
  }, []);

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/video" element={<Video />} />
      <Route path="/nosotros" element={<Team />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<NotFoundPage />} />
      {/* Rutas Privadas */}
      <Route
        path="/admin/dashboard"
        element={token ? <LoadingPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/profile"
        element={token ? <LoadingPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/podcasts"
        element={token ? <LoadingPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/videos"
        element={token ? <LoadingPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/schedule"
        element={token ? <LoadingPage /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;
