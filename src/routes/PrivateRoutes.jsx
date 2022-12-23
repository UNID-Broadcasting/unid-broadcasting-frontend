import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Singup from "../pages/Singup";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import DashboardHome from "../pages/admin/DashboardHome";
import PodcastAdmin from "../pages/admin/PodcastAdmin";
import VideoAdmin from "../pages/admin/VideoAdmin";
import ProgrammingPage from "../pages/admin/ProgrammingPage";
import Home from "../pages/Home";
import Podcast from "../pages/Podcast";
import Team from "../pages/Team";
import Video from "../pages/Video";
import ProfilePage from "../pages/admin/ProfilePage";

const PrivateRoutes = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/video" element={<Video />} />
      <Route path="/nosotros" element={<Team />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/login" element={<Navigate to="/admin/dashboard" />} />

      {/* Rutas privadas */}
      <Route path="/admin/dashboard" element={<DashboardHome />} />
      <Route path="/admin/profile" element={<ProfilePage />} />
      <Route path="/admin/podcasts" element={<PodcastAdmin />} />
      <Route path="/admin/videos" element={<VideoAdmin />} />
      <Route path="/admin/schedule" element={<ProgrammingPage />} />
      <Route path="/admin/logout" element={<Navigate to="/" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PrivateRoutes;
