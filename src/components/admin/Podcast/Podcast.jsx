import React, { useState, useEffect, useContext } from "react";
import { PodcastContext } from "../../../context/PodcastContext";
import LoaderSpinner from "../../LoaderSpinner";
import Swal from "sweetalert2";
import {
  createPodcastService,
  getPodcastService,
  /* getPodcastByIdService,
  updatePodcastService,
  deletePodcastService, */
} from "../../../services/podcastServices";

const Podcast = () => {
  const { podcast } = useContext(PodcastContext);
  const [isLoading, setIsLoading] = useState(true);
  const [podcastNumber, setPodcastNumber] = useState([]);
  const [podcastData, setPodcastData] = useState({
    name: "",
    description: "",
    podcastNumber: "",
    image: "",
    date: "",
    time: "",
    category: "",
    url: "",
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
        if (setIsLoading) {
          isLoading ? <LoaderSpinner /> : window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Error al crear el podcast",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      });
  };

  /* const updatePodcast = (e) => {
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
  }; */

  useEffect(() => {
    const getPodcast = () => {
      getPodcastService(podcast.uid)
        .then((res) => {
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

    const getCurrentPodcast = () => {
      getPodcastService(podcast).then((number) => {
        setPodcastNumber(number.data.length + 1);
      });
    };

    getPodcast();
    getCurrentPodcast();
  }, [podcast.uid, podcast, podcastNumber]);

  return (
    <>
      <section className="py-8">
        <div className="mx-auto px-6">
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Crear Podcast
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    En esta secci??n podr??s agregar un podcast a la p??gina
                    principal. Aseg??rate de llenar todos los campos para la
                    creaci??n correcta.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={createPodcast}>
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="podcast-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nombre del podcast
                          </label>
                          <input
                            required
                            type="text"
                            name="name"
                            id="podcast-name"
                            autoComplete="given-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={podcastData.name || ""}
                            onChange={handleInputChange}
                          />
                          <label
                            htmlFor="podcast-description"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Descripci??n del podcast (200 caracteres m??x.)
                          </label>
                          <textarea
                            required
                            type="text"
                            name="description"
                            id="podcast-description"
                            autoComplete="given-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={podcastData.description || ""}
                            onChange={handleInputChange}
                            maxLength="200"
                            minLength="10"
                          />
                          <label
                            htmlFor="podcast-number"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Podcast No.
                          </label>
                          <input
                            required
                            disabled
                            type="number"
                            name="number"
                            id="podcast-number"
                            autoComplete="given-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={podcastNumber}
                            onChange={handleInputChange}
                          />
                          <label
                            htmlFor="podcast-image"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Imagen del podcast
                          </label>
                          <input
                            required
                            placeholder="https://assets.puzzlefactory.pl/puzzle/341/838/original.jpg"
                            type="url"
                            name="image"
                            id="podcast-image"
                            autoComplete="given-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={podcastData.image || ""}
                            onChange={handleInputChange}
                          />
                          <label
                            htmlFor="podcast-url"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            URL del podcast
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                              https://
                            </span>
                            <input
                              required
                              placeholder="www.ejemplo.com"
                              type="url"
                              name="url"
                              id="podcast-url"
                              autoComplete="given-name"
                              className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              value={podcastData.url || ""}
                              onChange={handleInputChange}
                            />
                          </div>
                          <label
                            htmlFor="podcast-date"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Fecha del podcast
                          </label>
                          <input
                            required
                            type="date"
                            name="date"
                            id="podcast-date"
                            autoComplete="given-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={podcastData.date || ""}
                            onChange={handleInputChange}
                          />
                          <label
                            htmlFor="podcast-duration"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Duraci??n del podcast
                          </label>
                          <input
                            required
                            placeholder="10"
                            type="number"
                            name="time"
                            id="podcast-time"
                            autoComplete="given-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={podcastData.time || ""}
                            onChange={handleInputChange}
                          />
                          <label
                            htmlFor="podcast-category"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Categor??a del podcast
                          </label>
                          <select
                            required
                            name="category"
                            id="podcast-category"
                            autoComplete="given-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={podcastData.category || ""}
                            onChange={handleInputChange}
                          >
                            <option value=""></option>
                            <option disabled>Categor??as</option>
                            <option value="Entretenimiento">
                              Entretenimiento
                            </option>
                            <option value="Informaci??n">Informaci??n</option>
                            <option value="Formaci??n">Formaci??n</option>
                            <option value="Entrevista">Entrevista</option>
                            <option value="Periodismo - Investigaci??n">
                              Periodismo - Investigaci??n
                            </option>
                            <option value="Deportes">Deportes</option>
                            <option value="M??sica">M??sica</option>
                            <option value="Tecnolog??a">Tecnolog??a</option>
                            <option value="Ciencia">Ciencia</option>
                            <option value="Historia">Historia</option>
                            <option value="Pol??tica">Pol??tica</option>
                            <option value="Negocios">Negocios</option>
                            <option value="Religi??n">Religi??n</option>
                            <option value="Gastronom??a">Gastronom??a</option>
                            <option value="Cine">Cine</option>
                            <option value="Literatura">Literatura</option>
                            <option value="Arte">Arte</option>
                            <option value="Medicina">Medicina</option>
                            <option value="Psicolog??a">Psicolog??a</option>
                            <option value="Educaci??n">Educaci??n</option>
                            <option value="Viajes">Viajes</option>
                            <option value="Animales">Animales</option>
                            <option value="Juegos">Juegos</option>
                            <option value="Humor">Humor</option>
                            <option value="Otros">Otros</option>
                          </select>

                          <fieldset className="mt-12">
                            <div
                              className="text-base font-medium text-gray-900"
                              aria-hidden="true"
                            >
                              Confirmaci??n de creaci??n de podcast.
                            </div>
                            <div className="mt-4 space-y-4">
                              <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    required
                                    id="confirmation"
                                    name="confirmation"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="confirmation"
                                    className="font-medium text-gray-700"
                                  >
                                    Creaci??n del Podcast
                                  </label>
                                  <p className="text-gray-500">
                                    Estoy conciente que al dar clic en "crear",
                                    una vez llenado el formulario, este ser??
                                    enviado al sitio principal.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    required
                                    id="orthography"
                                    name="orthography"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="orthography"
                                    className="font-medium text-gray-700"
                                  >
                                    Ortograf??a
                                  </label>
                                  <p className="text-gray-500">
                                    He revisado la ortograf??a del formulario. Y
                                    me he asegurado que est?? correctamente de
                                    acuerdo con los est??ndares de la ortograf??a.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <button
                            type="submit"
                            className="bg-unid-yellow hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded mt-4"
                          >
                            Crear
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Podcast;
