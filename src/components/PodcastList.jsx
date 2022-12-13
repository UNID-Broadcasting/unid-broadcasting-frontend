import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [modal, setModal] = useState(false);
=======

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [showModal, setShowModal] = useState(false);
>>>>>>> deployment
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
<<<<<<< HEAD
      <div className="container mx-auto px-4" background="#e2e8f0">
=======
      <div className="container mx-auto px-4">
>>>>>>> deployment
        <h2 className="text-2xl font-bold text-center my-8">Podcasts</h2>
        <p className="text-center text-gray-600 mb-8">
          Disfruta de los mejores podcasts en un solo lugar. Estás en el lugar
          ideal para disfrutar de contenido diseñado exclusivamente para ti.
        </p>
<<<<<<< HEAD
        <div
          className="flex overflow-x-scroll"
          style={{ border: "1px solid #e2e8f0", borderRadius: "0.5rem" }}
        >
=======
        <div className="flex overflow-x-scroll">
>>>>>>> deployment
          {podcasts.map((podcast, id) => (
            <Link
              key={id}
              onClick={() => {
<<<<<<< HEAD
                setModal(true);
                setModalData(podcast);
              }}
            >
              <div className="flex-shrink-0 m-8">
=======
                setShowModal(true);
                setModalData(podcast);
              }}
            >
              <div className="flex-shrink-0 m-8" key={id}>
>>>>>>> deployment
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
<<<<<<< HEAD
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
=======
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {modalData ? modalData.name : ""}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {modalData ? modalData.description : ""}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex justify-between items-center"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Escuchalo en spotify
                    <img
                      className="h-6 w-6 rounded-lg object-cover ml-2"
                      src="https://cdn-icons-png.flaticon.com/512/152/152756.png"
                      alt="Spotify"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
>>>>>>> deployment
    </>
  );
};

export default PodcastList;
