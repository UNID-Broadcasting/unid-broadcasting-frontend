import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoaderSpinner from "./LoaderSpinner";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const obtenerVideos = async () => {
    const data = await fetch(
      "https://unid-backend-radioytv.onrender.com/api/videocast"
    );
    const videos = await data.json();
    setVideos(videos);
    setIsLoading(true);
  };

  useEffect(() => {
    obtenerVideos();
  }, []);

  return (
    <>
      <div>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center my-8">Videos</h2>
          <p className="text-center text-gray-600 mb-8">
            Disfruta de los mejores videos producidos por UNID. Estás en el
            lugar ideal para disfrutar de contenido diseñado exclusivamente para
            ti.
          </p>
          {isLoading ? (
            <div className="flex overflow-x-scroll">
              {videos.map((video, id) => (
                <Link
                  key={id}
                  onClick={() => {
                    setShowModal(true);
                    setModalData(video);
                  }}
                >
                  <div className="flex-shrink-0 m-8" key={id}>
                    <img
                      className="h-48 w-48 rounded-lg object-cover"
                      src={video.image}
                      alt="Podcast"
                    />
                    <div className="mt-2">
                      <p className="text-lg text-gray-900 w-48">{video.name}</p>
                      <p className="text-gray-600 text-sm w-48">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <LoaderSpinner />
          )}
        </div>
      </div>
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
                    className="bg-red-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex justify-between items-center"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Míralo en YouTube
                    <img
                      className="h-6 w-6 rounded-lg object-cover ml-2"
                      src="https://cdn-icons-png.flaticon.com/512/48/48968.png"
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
    </>
  );
};

export default VideoList;
