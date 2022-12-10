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
          content="Bienvenido a Radio UNID, somos una estación de radio universitaria del puerto de Acapulco, Guerrero. Disfruta de nuestra programación en vivo, además de nuestro contenido de video, podcasts, música, noticias, deportes, entretenimiento y mucho más."
        />
      </Helmet>
      <main className="mt-40">
        <PodcastList />
      </main>
    </>
  );
};

export default Podcast;
