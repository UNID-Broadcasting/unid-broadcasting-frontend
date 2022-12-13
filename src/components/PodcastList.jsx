import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);

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
            <Link
              key={id}
              onClick={() => {
                setModal(true);
                setModalData(podcast);
              }}
            >
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
      <PureModal
        header={modalData ? modalData.name : ""}
        footer={
          <div>
            <button>
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200,h_362/https://www.xookaudio.com/wp-content/uploads/2021/06/escuchar-en-espotify.png"
                alt="Spotify"
                className="mx-auto w-48"
              />
            </button>
          </div>
        }
        isOpen={modal}
        onClose={() => setModal(false)}
        className="w-1/2 mx-auto sm:w-full"
      >
        <img
          src={modal ? modalData.image : ""}
          alt={`Podcast${modal ? modalData.name : ""}`}
          className="w-1/2 mx-auto"
        />
        <p className="mt-4">{modal ? modalData.description : ""}</p>
      </PureModal>
    </>
  );
};

export default PodcastList;
