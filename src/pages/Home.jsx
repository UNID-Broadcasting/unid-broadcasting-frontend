import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Horarios from "../components/Horarios";

const Home = () => {
  const [fecha, setFecha] = useState({});

  const obtenerFecha = async () => {
    const data = await fetch(
      "https://unid-backend-radioytv.onrender.com/api/date"
    );
    const fecha = await data.json();
    setFecha(fecha);
  };

  useEffect(() => {
    obtenerFecha();
  }, []);

  return (
    <>
      <main className="pt-20">
        <Hero />
        <div>
          <Horarios day={fecha.day} month={fecha.monthName} year={fecha.year} />
        </div>
      </main>
    </>
  );
};

export default Home;
