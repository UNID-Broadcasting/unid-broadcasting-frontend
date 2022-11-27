import React, { useEffect, useState } from "react";

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
      <div className="flex justify-center">{/* images here */}</div>
      <p className="text-sm">© {year} UNID</p>
    </footer>
  );
};

export default Footer;
