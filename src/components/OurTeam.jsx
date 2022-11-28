import React from "react";

const OurTeam = () => {
  return (
    <>
      {/* Crearemos un grid con imagenes redondas, nombre de las personas y rol con tailwind*/}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center my-8">Radio</h2>
        <p className="text-center text-gray-600 mb-8">
          Conoce al entero equipo de trabajo que está detrás de Radio UNID
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/men/73.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/women/27.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/women/72.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/men/25.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/women/50.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/lego/5.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center my-8">Podcasts</h2>
        <p className="text-center text-gray-600 mb-8">
          Conoce al entero equipo de trabajo que está detrás de Radio UNID
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/men/73.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/women/27.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/women/72.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/men/25.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/women/50.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-32 h-32"
              src="https://randomuser.me/api/portraits/lego/5.jpg"
              alt="team"
            />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
