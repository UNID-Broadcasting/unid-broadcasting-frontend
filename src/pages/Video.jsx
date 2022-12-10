import React from "react";
import VideoList from "../components/VideoList";
import { Helmet } from "react-helmet";

const Video = () => {
  return (
    <>
      <Helmet>
        <title>Video - UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Disfruta del contenido de video de UNID Radio y Televisión."
        />
      </Helmet>
      <main className="mt-40">
        <VideoList />
      </main>
    </>
  );
};

export default Video;
