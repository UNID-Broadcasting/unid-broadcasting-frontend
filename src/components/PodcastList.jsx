import React, { useEffect, useState } from "react";

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const obtenerPodcasts = async () => {
      const data = await fetch(
        "https://unid-backend-radioytv.onrender.com/api/podcast"
      );
      const podcasts = await data.json();
      setPodcasts(podcasts);
    };
    obtenerPodcasts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center my-8">Podcasts</h2>
      <p className="text-center text-gray-600 mb-8">
        Disfruta de los mejores podcasts en un solo lugar. Estás en el lugar
        ideal para disfrutar de contenido diseñado exclusivamente para ti.
      </p>
      <div className="flex overflow-x-scroll">
        {podcasts.map((podcast, id) => (
          <div className="flex-shrink-0 m-8" key={id}>
            <img
              className="h-48 w-48 rounded-lg object-cover"
              src={podcast.image}
              alt="Podcast"
            />
            <div className="mt-2">
              <p className="text-lg text-gray-900 w-48">{podcast.name}</p>
              <p className="text-gray-600 text-sm w-48">
                {podcast.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastList;
