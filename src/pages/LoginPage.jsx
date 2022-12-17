import React from "react";
import Login from "../components/Login";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar Sesión - UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Inicia sesión en UNID Radio y Televisión, accede a contenido exclusivo y disfruta de la mejor programación."
        />
      </Helmet>
      <div>
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
