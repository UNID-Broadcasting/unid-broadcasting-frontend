import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  MicrophoneIcon,
  PlayCircleIcon,
  CalendarIcon,
  BellAlertIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const links = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: HomeIcon,
    current: false,
  },
  {
    name: "Perfil",
    href: "/admin/profile",
    icon: UserIcon,
    current: false,
  },

  {
    name: "Podcast",
    href: "/admin/podcasts",
    icon: MicrophoneIcon,
    current: false,
  },
  {
    name: "Videos",
    href: "/admin/videos",
    icon: PlayCircleIcon,
    current: false,
  },
  {
    name: "Programación",
    href: "/admin/schedule",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Log out",
    href: "/admin/logout",
    icon: ArrowLeftOnRectangleIcon,
    current: false,
  },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleMenuMobile = () => {
    setMenuMobile(!menuMobile);
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);

  return (
    <header className="bg-unid-indigo mt-32 mb-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0"></div>
            <div className="hidden md:block">
              <div className="flex space-x-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={handleMenu}
                  >
                    <link.icon className="h-6 w-6" aria-hidden="true" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                <span className="sr-only">View notifications</span>
                <BellAlertIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="ml-3 relative">
                <div>
                  <button
                    className="max-w-xs bg-gray-800 flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMenuMobile}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className={`${menuMobile ? "block" : "hidden"} md:hidden`}>
        {/* Los elementos del menú iran centrados */}
        <div className="px-2 pt-2 pb-3 sm:px-3 flex flex-col items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={handleMenuMobile}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex flex-row items-center mt-4"
            >
              <link.icon className="h-6 w-6" aria-hidden="true" />
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
