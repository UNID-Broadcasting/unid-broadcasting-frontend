import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [year, setYear] = useState(0);
  const obtenerYear = () => {
    const year = new Date().getFullYear();
    setYear(year);
  };
  useEffect(() => {
    obtenerYear();
  }, []);

  return (
    <footer
      className="bg-unid-indigo text-white py-10 mt-10 text-center"
      style={{ position: "fixed", bottom: 0, width: "100%" }}
    >
      <div className="flex justify-center">
        {/* Añadimos los iconos de facebook, spotify y youtube */}
        <a
          href="https://www.facebook.com/unid.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size="2x"
            className="text-white"
          />
        </a>
        <a
          href="https://www.youtube.com/user/unidtv"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={["fab", "youtube"]}
            size="2x"
            className="text-white"
          />
        </a>
        <a
          href="https://open.spotify.com/user/unidmx"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={["fab", "spotify"]}
            size="2x"
            className="text-white"
          />
        </a>

        <p className="text-sm">
          Hecho con <FontAwesomeIcon icon={faHeart} className="text-red-500" />{" "}
          y muchas tazas de{" "}
          <FontAwesomeIcon icon={faCoffee} className="text-yellow-200" /> por{" "}
          por el equipo de ingenieros de UNID
        </p>
      </div>
      <p className="text-sm">© {year} UNID</p>
    </footer>
  );
};

export default Footer;
