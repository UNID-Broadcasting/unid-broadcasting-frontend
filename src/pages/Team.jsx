import React from "react";
import OurTeam from "../components/OurTeam";
import { Helmet } from "react-helmet";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros - UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Conoce a todos los involucrados en el proyecto de Radio y Televisión UNID."
        />
      </Helmet>
      <main className="mt-40">
        <OurTeam />
      </main>
    </>
  );
};

export default Team;
