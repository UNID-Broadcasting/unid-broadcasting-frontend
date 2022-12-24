import { useState } from "react";
import { PodcastContext } from "./PodcastContext";

const PodcastProvider = ({ children }) => {
  const [podcast, setPodcast] = useState({
    id: null,
    name: null,
    description: null,
    podcastNumber: null,
    image: null,
    date: null,
    time: null,
    category: null,
    url: null,
    isLoadingData: true,
  });

  const createPodcast = (data) => {
    try {
      if (data.ok === true) {
        setPodcast({
          id: data.data.id,
          name: data.data.name,
          description: data.data.description,
          podcastNumber: data.data.podcastNumber,
          image: data.data.image,
          date: data.data.date,
          time: data.data.time,
          category: data.data.category,
          url: data.data.url,
          isLoadingData: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPodcast = (data) => {
    try {
      if (data.ok === true) {
        setPodcast({
          id: data.data.id,
          name: data.data.name,
          description: data.data.description,
          podcastNumber: data.data.podcastNumber,
          image: data.data.image,
          date: data.data.date,
          time: data.data.time,
          category: data.data.category,
          url: data.data.url,
          isLoadingData: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPodcastById = (data) => {
    try {
      if (data.ok === true) {
        setPodcast({
          id: data.data.id,
          name: data.data.name,
          description: data.data.description,
          podcastNumber: data.data.podcastNumber,
          image: data.data.image,
          date: data.data.date,
          time: data.data.time,
          category: data.data.category,
          url: data.data.url,
          isLoadingData: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatePodcast = (data) => {
    try {
      if (data.ok === true) {
        setPodcast({
          id: data.data.id,
          name: data.data.name,
          description: data.data.description,
          podcastNumber: data.data.podcastNumber,
          image: data.data.image,
          date: data.data.date,
          time: data.data.time,
          category: data.data.category,
          url: data.data.url,
          isLoadingData: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePodcast = (data) => {
    try {
      if (data.ok === true) {
        setPodcast({
          id: data.data.id,
          name: data.data.name,
          description: data.data.description,
          podcastNumber: data.data.podcastNumber,
          image: data.data.image,
          date: data.data.date,
          time: data.data.time,
          category: data.data.category,
          url: data.data.url,
          isLoadingData: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PodcastContext.Provider
      value={{
        podcast,
        createPodcast,
        getPodcast,
        getPodcastById,
        updatePodcast,
        deletePodcast,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export default PodcastProvider;
