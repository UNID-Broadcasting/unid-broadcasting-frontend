import React from "react";
import SignUpForm from "../components/SignUpForm";
import { Helmet } from "react-helmet";

const Singup = () => {
  return (
    <>
      <Helmet>
        <title>Regístrate - UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Regístrate en UNID Radio y Televisión, accede a contenido exclusivo y disfruta de la mejor programación."
        />
      </Helmet>
      <div className="m-4 mt-8">
        <SignUpForm />
      </div>
    </>
  );
};

export default Singup;
