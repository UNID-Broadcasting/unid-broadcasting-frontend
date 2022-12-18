import React from "react";
import {
  MicrophoneIcon,
  PlayCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const CardsInfo = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full md:w-1/3">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-600">
              <MicrophoneIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-gray-600">Total de Podcasts</p>
              <p className="text-2xl font-bold">10</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full md:w-1/3">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-600">
              <PlayCircleIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-gray-600">Total de Videos</p>
              <p className="text-2xl font-bold">10</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full md:w-1/3">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-600">
              <UsersIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-gray-600">Total de Usuarios</p>
              <p className="text-2xl font-bold">10</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsInfo;
