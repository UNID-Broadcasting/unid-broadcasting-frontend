import React, { useState, useEffect } from "react";

const Horarios = ({ day, month, year }) => {
  const [programacion, setProgramacion] = useState([]);
  const obtenerProgramacion = async () => {
    const data = await fetch(
      "https://unid-backend-radioytv.onrender.com/api/programming"
    );
    const programacion = await data.json();
    setProgramacion(programacion);
  };

  useEffect(() => {
    obtenerProgramacion();
  }, []);

  return (
      <>
        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto ">
          <div className="mb-48 w-full">
            <h1 className="text-center font-bold text-xl md:text-3xl text-gray-900 leading-tight">
              Programación
            </h1>
            <p className="text-center font-bold text-xl md:text-2xl text-gray-900 leading-tight">
              {day} de {month} de {year}
            </p>
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
              <table className="min-w-full bg-white">
                <thead className="bg-unid-yellow text-white">
                  <tr>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                      Evento
                    </th>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                      Fecha y Hora
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {/* Mostraremos los programas entre el día de hoy y los próximos 7 días */}
                  {programacion
                    .filter(
                      (programa) =>
                        new Date(programa.date).getDate() >= day &&
                        new Date(programa.date).getDate() <= day + 7
                    )
                    /* Se va a mapear en orden */
                    .sort((a, b) => {
                      return new Date(a.date) - new Date(b.date);
                    })
                    .map((programa) => (
                      <tr key={programa.id}>
                        <td className="w-1/3 text-left py-3 px-4">
                          {programa.name}
                        </td>
                        <td className="w-1/3 text-left py-3 px-4">
                          {new Date(programa.date).toLocaleDateString("es-MX")}{" "}
                          {new Date(programa.date).toLocaleTimeString("es-MX", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>

  );
};

export default Horarios;
