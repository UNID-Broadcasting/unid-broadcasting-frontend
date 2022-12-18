import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Player from "../components/Player";
import Home from "../pages/Home";
import Podcast from "../pages/Podcast";
import Team from "../pages/Team";
import Video from "../pages/Video";
import Cookies from "../components/Cookies";
import Singup from "../pages/Singup";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import DashboardHome from "../pages/admin/DashboardHome";
import Profile from "../pages/admin/Profile";
import PodcastAdmin from "../pages/admin/PodcastAdmin";
import VideoAdmin from "../pages/admin/VideoAdmin";
import ProgrammingPage from "../pages/admin/ProgrammingPage";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/video" element={<Video />} />
        <Route path="/nosotros" element={<Team />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* Rutas privadas */}
        <Route path="/admin/dashboard" element={<DashboardHome />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/podcasts" element={<PodcastAdmin />} />
        <Route path="/admin/videos" element={<VideoAdmin />} />
        <Route path="/admin/schedule" element={<ProgrammingPage />} />
        <Route path="/admin/logout" element={<Navigate to="/" />} />
      </Routes>
      <Cookies />
      <Footer />
      <Player />
    </Router>
  );
};

export default AppRouter;
