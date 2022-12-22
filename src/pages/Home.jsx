import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Horarios from "../components/Horarios";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Bienvenido a Radio UNID, somos una estación de radio universitaria del puerto de Acapulco, Guerrero. Disfruta de nuestra programación en vivo, además de nuestro contenido de video, podcasts, música, noticias, deportes, entretenimiento y mucho más."
        />
      </Helmet>
      <main>
        <Hero />
        <div>
          <Horarios
            dayName={fecha.dayName}
            day={fecha.day}
            month={fecha.monthName}
            year={fecha.year}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
