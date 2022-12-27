import React from "react";
import { Helmet } from "react-helmet";
import Programming from "../../components/admin/Programming/Programming";

const ProgrammingPage = () => {
  return (
    <>
      <Helmet>
        <title>Programación Dashboard - UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Bienvenido al apartado de programación, espacio donde podrás agregar nuevos programas, editarlos o eliminarlos"
        />
      </Helmet>
      <Programming />
    </>
  );
};

export default ProgrammingPage;
