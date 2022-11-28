import React from "react";

const Player = () => {
  return (
    <>
      {/* Creamos un reproductor de radio que esté en todas las secciones, tiene que ser un pequeño reproductor que se pueda minimizar y maximizar con tailwind */}
      <div className="bg-gray-800 w-full h-16 fixed bottom-0 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-700">
            <img
              src="https://img.freepik.com/vector-premium/ilustracion-icono-auriculares-musica-telefono-inteligente-concepto-tecnologia-aislado_138676-1107.jpg"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <p className="text-white">Radio</p>
            <p className="text-gray-400"></p>
          </div>
        </div>
        <div className="flex items-center mr-8">
          {/* Escucharemos al servidor 109.169.23.124 y puerto 8399 */}
          <audio
            src="https://Fps3.listen2myradio.com:2199/listen.php?ip=109.169.23.124&port=8399&type=s1"
            controls
            autoPlay
          ></audio>
        </div>
      </div>
    </>
  );
};

export default Player;
