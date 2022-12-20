import React from "react";
import { Routes, Route } from "react-router-dom";
import Singup from "../pages/Singup";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";
import Podcast from "../pages/Podcast";
import Team from "../pages/Team";
import Video from "../pages/Video";

const PublicRoutes = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/video" element={<Video />} />
      <Route path="/nosotros" element={<Team />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;
