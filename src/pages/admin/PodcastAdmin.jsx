import React from "react";
import { Helmet } from "react-helmet";
import Podcast from "../../components/admin/Podcast/Podcast";

const PodcastAdmin = () => {
  return (
    <>
      <Helmet>
        <title>Podcast - UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Bienvenido al apartado de podcast, espacio donde podrás agregar nuevos podcast, editarlos o eliminarlos"
        />
      </Helmet>
      <Podcast />
    </>
  );
};

export default PodcastAdmin;
