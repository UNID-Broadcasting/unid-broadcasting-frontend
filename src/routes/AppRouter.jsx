import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Player from "../components/Player";
import Cookies from "../components/Cookies";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const { user, verifyingToken } = useContext(UserContext);

  useEffect(() => {
    verifyingToken();
  }, [verifyingToken]);

  return (
    <Router>
      <Header />
      {user.role === "USER_REGISTERED" ? <PrivateRoutes /> : <PublicRoutes />}
      <Cookies />
      <Footer />
      <Player />
    </Router>
  );
};

export default AppRouter;
