import React from "react";
import { Helmet } from "react-helmet";
import Videos from "../../components/admin/Videos/Videos";

const VideoAdmin = () => {
  return (
    <>
      <Helmet>
        <title>Videos Dashboard - UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Bienvenido al apartado de videos, espacio donde podrás agregar nuevos videos, editarlos o eliminarlos"
        />
      </Helmet>
      <Videos />
    </>
  );
};

export default VideoAdmin;
