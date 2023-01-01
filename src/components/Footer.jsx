import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
    <footer className="bg-unid-indigo text-white py-10 text-center bottom-0">
      <div className="flex justify-center flex-col">
        <p className="text-sm text-center">
          Av. Costera Miguel Alemán #2701, Deportivo, C.P. 39690 Acapulco de
          Juárez, Gro.{" "}
          <FontAwesomeIcon icon={faPhone} className="text-unid-yellow" />{" "}
          Teléfono: 744 484 5200
        </p>
        <p className="text-sm">© {year} UNID</p>
        <p className="mt-2 text-sm text-center">
          Hecho con{" "}
          <FontAwesomeIcon icon={faHeart} className="text-unid-yellow" /> y
          muchas tazas de{" "}
          <FontAwesomeIcon icon={faCoffee} className="text-unid-yellow" /> por
          el equipo de ingenieros de UNID.
        </p>
      </div>
      <div className="mt-2 flex justify-center flex-row space-x-4">
        <Link
          to="#!"
          target="_blank"
          rel="noreferrer"
          className="mt-1 text-sm text-center"
        >
          Aviso de privacidad
        </Link>
        <Link
          to="#!"
          target="_blank"
          rel="noreferrer"
          className="mt-1 text-sm text-center"
        >
          Términos y condiciones
        </Link>
        <Link to="/contacto" className="mt-1 text-sm text-center">
          Contacto
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
