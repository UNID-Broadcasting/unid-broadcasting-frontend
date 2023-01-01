import { useContext, useState } from "react";
import logoImg from "../assets/logo-unid.png";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user, logout } = useContext(UserContext);

  let Links = [
    { name: "INICIO", link: "/" },
    { name: "PODCAST", link: "/podcast" },
    { name: "VIDEO", link: "/video" },
    { name: "NOSOTROS", link: "/nosotros" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full fixed  z-[6666] top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-unid-indigo py-5 md:px-10 px-4 border-b-2 md:border-none">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
            <span className="text-3xl text-unid-yellow mr-1 pt-2">
              <Link to="/">
                <img
                  src={logoImg}
                  className="w-40 rounded-lg shadow-lg"
                  alt="UNID-RadioTV"
                />
              </Link>
            </span>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-white text-3xl absolute right-4 top-12 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`shadow md:shadow-none md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-unid-indigo md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-4 transition-all duration-200 ease-in ${
              open ? "top-20 mt-8" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="text-white md:ml-8 md:my-0 py-1">
                <Link
                  to={link.link}
                  className='"text-sm md:text-sm font-semibold hover:text-unid-yellow mb-1'
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {user.authStatus ? (
              <div className="flex justify-between border-t-2 py-2 md:border-none text-sm font-bold">
                <p className="text-white py-3 md:ml-8  uppercase">
                  {user ? `Hola: ${user.username}` : ""}
                </p>
                <Link
                  className="bg-red-600 text-white py-1 px-2 rounded md:ml-8 hover:bg-red-500 duration-500 uppercase inline-flex space-x-2 items-center justify-center"
                  to="/login"
                >
                  <button
                    onClick={logout}
                    className="bg-red-600 text-white py-1 px-2 rounded md:ml-8 hover:bg-red-500 duration-500 uppercase inline-flex space-x-2 items-center justify-center"
                    // onClick={handleCerrarSesion}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinejoin="round"
                        strokelinejoinn="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>

                    <span>Cerrar Sesión</span>
                  </button>
                </Link>
              </div>
            ) : (
              <Link
                className="bg-unid-yellow text-white py-1 px-2 rounded md:ml-8 hover:bg-yellow-400 duration-500 uppercase inline-flex space-x-2 items-center justify-center"
                to="/login"
              >
                <button
                  className="bg-unid-yellow text-white rounded hover:bg-yellow-400 duration-500 uppercase inline-flex space-x-2 items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinejoin="round"
                      strokelinejoinn="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  <span className="m-2">Iniciar Sesión</span>
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
