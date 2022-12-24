import React, { useState, useEffect, useContext } from "react";
import { PodcastContext } from "../../../context/PodcastContext";
import LoaderSpinner from "../../LoaderSpinner";
import Swal from "sweetalert2";
import {
  createPodcastService,
  getPodcastService,
  getPodcastByIdService,
  updatePodcastService,
  deletePodcastService,
} from "../../../services/podcastServices";

const Podcast = () => {
  const { podcast } = useContext(PodcastContext);
  const [isLoading, setIsLoading] = useState(true);
  const [podcastData, setPodcastData] = useState({
    name: "",
    description: "",
    podcastNumber: "",
    image: "",
    date: "",
    time: "",
    category: "",
  });

  const handleInputChange = (e) => {
    setPodcastData({
      ...podcastData,
      [e.target.name]: e.target.value,
    });
  };

  const createPodcast = (e) => {
    e.preventDefault();
    setIsLoading(false);
    createPodcastService(podcastData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Podcast creado",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Error al crear el podcast",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(true);
      });
  };

  const updatePodcast = (e) => {
    e.preventDefault();
    setIsLoading(false);
    updatePodcastService(podcastData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Podcast actualizado",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      })

      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Error al actualizar el podcast",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      });
  };

  const deletePodcast = (e) => {
    e.preventDefault();
    setIsLoading(false);
    deletePodcastService(podcastData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Podcast eliminado",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Error al eliminar el podcast",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      });
  };

  const findPodcast = (e) => {
    e.preventDefault();
    setIsLoading(false);
    getPodcastByIdService(podcastData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Podcast encontrado",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Error al encontrar el podcast",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const getPodcast = () => {
      getPodcastService(podcast.uid)
        .then((res) => {
          console.log(res);
          setPodcastData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Error al obtener el podcast",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsLoading(false);
        });
    };
    getPodcast();
  }, [podcast.uid]);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <>
      <h1>Podcast</h1>
    </>
  );
};

export default Podcast;
