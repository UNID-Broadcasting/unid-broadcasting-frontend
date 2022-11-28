import React, { useEffect, useState } from "react";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const obtenerVideos = async () => {
      const data = await fetch(
        "https://unid-backend-radioytv.onrender.com/api/videocast"
      );
      const videos = await data.json();
      setVideos(videos);
    };
    obtenerVideos();
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center my-8">Videos</h2>
        <p className="text-center text-gray-600 mb-8">
          Disfruta de los mejores videos producidos por UNID. Estás en el lugar
          ideal para disfrutar de contenido diseñado exclusivamente para ti.
        </p>
        <div className="flex overflow-x-scroll">
          {videos.map((video, id) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
