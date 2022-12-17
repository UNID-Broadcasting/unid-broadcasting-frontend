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
    <footer className="bg-unid-indigo text-white py-10 mt-10 text-center bottom-0">
      <div className="flex justify-center">
        <p className="text-sm text-center">
          Hecho con{" "}
          <FontAwesomeIcon icon={faHeart} className="text-unid-yellow" /> y
          muchas tazas de{" "}
          <FontAwesomeIcon icon={faCoffee} className="text-unid-yellow" /> por
          el equipo de ingenieros de UNID.
        </p>
      </div>
      <p className="text-sm">© {year} UNID</p>
    </footer>
  );
};

export default Footer;
