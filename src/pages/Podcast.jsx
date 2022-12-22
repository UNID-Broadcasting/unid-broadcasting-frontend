import React from "react";
import PodcastList from "../components/PodcastList";
import { Helmet } from "react-helmet";

const Podcast = () => {
  return (
    <>
      <Helmet>
        <title>Podcast - UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Disfruta de una serie de contenido diseño exclusivamente por estudiantes de la UNID."
        />
      </Helmet>
      <main className="mt-5">
        <PodcastList />
      </main>
    </>
  );
};

export default Podcast;
