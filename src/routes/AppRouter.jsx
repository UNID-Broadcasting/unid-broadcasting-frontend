import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Player from "../components/Player";
import Home from "../pages/Home";
import Podcast from "../pages/Podcast";
import Team from "../pages/Team";
import Video from "../pages/Video";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/video" element={<Video />} />
        <Route path="/nosotros" element={<Team />} />
      </Routes>
      <Footer />
      <Player />
    </Router>
  );
};

export default AppRouter;
