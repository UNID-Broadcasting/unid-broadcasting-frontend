import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      </Routes>
      <Cookies />
      <Footer />
      <Player />
    </Router>
  );
};

export default AppRouter;
