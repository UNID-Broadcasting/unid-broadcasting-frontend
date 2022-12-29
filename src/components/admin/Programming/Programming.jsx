import React, { useState, useEffect } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { getProgrammingService } from "../../../services/programmingServices";
import LoaderSpinner from "../../LoaderSpinner";

const Programming = () => {
  const [programmingData, setProgrammingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getProgrammingData = async () => {
      try {
        const response = await getProgrammingService();
        setProgrammingData(response.data);

        const programmingEvents = programmingData.map(async (programming) => {
          const date = await programming.date
            .split("T")[0]
            .split("-")
            .join("/");
          const timeEvent = await programming.date.split("T")[1].split(":");
          const hour = timeEvent[0];
          const minutes = timeEvent[1];

          programming.date = `${date} ${hour}:${minutes}`;

          events.push({
            event_id: programming.uid,
            title: programming.name,
            start: new Date(programming.date),
            end: new Date(programming.date),
          });

          return programming;
        });

        setEvents(programmingEvents);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProgrammingData();
  }, [programmingData, events]);

  return (
    <>
      <div className="container mx-auto mt-4 mb-4 p-10 md:p-2">
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <Scheduler
            translations={{
              navigation: {
                month: "Mes",
                week: "Semana",
                day: "Día",
                today: "Hoy",
              },
              form: {
                addTitle: "Añadir evento",
                editTitle: "Editar evento",
                confirm: "Confirmar",
                delete: "Borrar",
                cancel: "Cancelar",
              },
              event: {
                title: "Título",
                start: "Inicia",
                end: "Termina",
                allDay: "Todo el día",
              },
            }}
            events={events}
            eventRenderer={events}
            view="month"
            day={{
              startHour: 0,
              endHour: 23,
              step: 60,
            }}
            week={{
              weekDays: [0, 1, 2, 3, 4, 5],
              weekStartOn: 1,
              startHour: 0,
              endHour: 23,
              step: 60,
            }}
            getRemoteEvents={events}
          />
        )}
      </div>
    </>
  );
};

export default Programming;
