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

        const programmingEvents = programmingData.map((programming) => {
          const date = programming.date.split("T")[0].split("-").join("/");
          const time = programming.date.split("T")[1].split(":");
          const hour = time[0];
          const minutes = time[1];

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
  }, [programmingData, events, setProgrammingData]);

  return (
    <>
      <div className="container mx-auto mt-4 mb-4 p-10 md:p-2">
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <Scheduler events={events} view="month" />
        )}
      </div>
    </>
  );
};

export default Programming;
