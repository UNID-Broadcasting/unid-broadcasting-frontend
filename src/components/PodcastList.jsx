import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PodcastModal from "./PodcastModal";

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    const obtenerPodcasts = async () => {
      const data = await fetch(
        "https://unid-backend-radioytv.onrender.com/api/podcast"
      );
      const podcasts = await data.json();
      setPodcasts(podcasts);
      console.log(podcasts);
    };
    obtenerPodcasts();
  }, []);

  const getIdByPodcast = (id) => {
    setModal(true);
    showModal(id);
    return id;
  };

  const showModal = (id) => {
    return (
      <PodcastModal
        id={id}
        name={podcasts[id].name}
        description={podcasts[id].description}
        image={podcasts[id].image}
        modal={modal}
        setModal={setModal}
      />
    );
  };

  return (
    <>
      <div className="container mx-auto px-4" background="#e2e8f0">
        <h2 className="text-2xl font-bold text-center my-8">Podcasts</h2>
        <p className="text-center text-gray-600 mb-8">
          Disfruta de los mejores podcasts en un solo lugar. Estás en el lugar
          ideal para disfrutar de contenido diseñado exclusivamente para ti.
        </p>
        <div
          className="flex overflow-x-scroll"
          style={{ border: "1px solid #e2e8f0", borderRadius: "0.5rem" }}
        >
          {podcasts.map((podcast, id) => (
            <Link key={id} onClick={() => getIdByPodcast(id)}>
              <div className="flex-shrink-0 m-8">
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PodcastList;
