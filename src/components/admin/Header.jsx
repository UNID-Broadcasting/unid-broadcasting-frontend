import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  MicrophoneIcon,
  PlayCircleIcon,
  CalendarIcon,
  BellAlertIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-unid-indigo">
      <div className="flex items-center justify-center h-20 text-white bg-gray-900 mt-40">
        <span className="text-2xl font-semibold">Admin</span>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <nav>
          <Link
            to="/admin/dashboard"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white"
          >
            <HomeIcon className="w-6 h-6 mx-4" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link
            to="/admin/profile"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white"
          >
            <UserIcon className="w-6 h-6 mx-4" />
            <span className="mx-4 font-medium">Perfil</span>
          </Link>
          <Link
            to="/admin/podcasts"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white"
          >
            <MicrophoneIcon className="w-6 h-6 mx-4" />
            <span className="mx-4 font-medium">Podcasts</span>
          </Link>
          <Link
            to="/admin/videos"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white"
          >
            <PlayCircleIcon className="w-6 h-6 mx-4" />
            <span className="mx-4 font-medium">Videos</span>
          </Link>
          <Link
            to="/admin/schedule"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white"
          >
            <CalendarIcon className="w-6 h-6 mx-4" />
            <span className="mx-4 font-medium">Programación</span>
          </Link>
          <Link
            to="/admin/notifications"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white"
          >
            <BellAlertIcon className="w-6 h-6 mx-4" />
            <span className="mx-4 font-medium">Notificaciones</span>
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-end px-6 py-4">
          <Link
            to="/admin/logout"
            className="flex items-center px-6 py-2 text-gray-400 hover:text-white"
          >
            <ArrowLeftOnRectangleIcon className="w-6 h-6 mx-4" />
            <span className="mx-4 font-medium">Cerrar Sesión</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
