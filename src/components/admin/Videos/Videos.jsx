import React, { useState, useEffect } from "react";
import LoaderSpinner from "../../LoaderSpinner";
import Swal from "sweetalert2";
import {
  createVideocast,
  getAlllVideocastTotal,
} from "../../../services/videocastServices";

const Videos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoNumber, setVideoNumber] = useState([]);
  const [videoData, setVideoData] = useState({
    name: "",
    description: "",
    author: "",
    videoCastNumber: "",
    image: "",
    date: "",
    duration: "",
    category: "",
    url: "",
  });

  const handleInputChange = (e) => {
    setVideoData({
      ...videoData,
      [e.target.name]: e.target.value,
    });
  };

  const createVideo = async (e) => {
    e.preventDefault();
    setIsLoading(false);
    try {
      const response = await createVideocast(videoData);
      if (response.data.message === "VideoCast creado correctamente") {
        Swal.fire({
          icon: "success",
          title: "Video creado correctamente",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      if (setIsLoading) {
        isLoading ? <LoaderSpinner /> : window.location.reload();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error al crear el video",
        text: "Algo salió mal, contacta al administrador del sistema",
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getVideoNumber = () => {
      getAlllVideocastTotal().then((response) => {
        setVideoNumber(response.data.length + 1);
        setIsLoading(false);
      });
    };
    getVideoNumber();
  }, [videoNumber]);

  return (
    <>
      <section className="py-8">
        <div className="mx-auto px-6">
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-normal leading-6 text-gray-900">
                    Crear Video
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    En esta sección podrás agregar un video a la página
                    principal. Asegúrate de llenar todos los campos para la
                    creación correcta.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={createVideo}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="name"
                            className="block text-sm font-normal text-gray-700"
                          >
                            Nombre del video
                          </label>
                          <input
                            required
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="given-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="author"
                            className="block text-sm font-normal text-gray-700"
                          >
                            Autor del video
                          </label>
                          <input
                            required
                            type="text"
                            name="author"
                            id="author"
                            autoComplete="family-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="description"
                            className="block text-sm font-normal text-gray-700"
                          >
                            Descripción del video
                          </label>
                          <textarea
                            required
                            type="text"
                            name="description"
                            id="description"
                            autoComplete="family-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleInputChange}
                            maxLength="200"
                            minLength="10"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="videoCastNumber"
                            className="block text-sm font-normal text-gray-700"
                          >
                            Número de video
                          </label>
                          <input
                            required
                            disabled
                            type="number"
                            name="videoCastNumber"
                            id="videoCastNumber"
                            autoComplete="family-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleInputChange}
                            value={videoNumber}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="image"
                            className="block text-sm font-normal text-gray-700"
                          >
                            Imagen del video
                          </label>
                          <input
                            required
                            type="url"
                            name="image"
                            id="image"
                            autoComplete="family-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="video"
                            className="block text-sm font-normal text-gray-700"
                          >
                            URL del video (YouTube)
                          </label>
                          <input
                            required
                            type="url"
                            name="video"
                            id="video"
                            autoComplete="family-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="date"
                            className="block text-sm font-normal text-gray-700"
                          >
                            Fecha de publicación
                          </label>
                          <input
                            required
                            type="date"
                            name="date"
                            id="date"
                            autoComplete="family-name"
                            className="p-1 mt- focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleInputChange}
                          />

                          <label
                            htmlFor="duration"
                            className="mt-4 block text-sm font-normal text-gray-700"
                          >
                            Duración del video
                          </label>
                          <input
                            required
                            type="number"
                            placeholder="10"
                            name="duration"
                            id="duration"
                            autoComplete="family-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleInputChange}
                          />

                          <label
                            htmlFor="category"
                            className="mt-4 block text-sm font-normal text-gray-700"
                          >
                            Categoría del video
                          </label>
                          <select
                            required
                            name="category"
                            id="category"
                            autoComplete="given-name"
                            className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleInputChange}
                          >
                            <option value=""></option>
                            <option disabled>Categorías</option>
                            <option value="Entretenimiento">
                              Entretenimiento
                            </option>
                            <option value="Información">Información</option>
                            <option value="Formación">Formación</option>
                            <option value="Entrevista">Entrevista</option>
                            <option value="Periodismo - Investigación">
                              Periodismo - Investigación
                            </option>
                            <option value="Deportes">Deportes</option>
                            <option value="Música">Música</option>
                            <option value="Tecnología">Tecnología</option>
                            <option value="Ciencia">Ciencia</option>
                            <option value="Historia">Historia</option>
                            <option value="Política">Política</option>
                            <option value="Negocios">Negocios</option>
                            <option value="Religión">Religión</option>
                            <option value="Gastronomía">Gastronomía</option>
                            <option value="Cine">Cine</option>
                            <option value="Literatura">Literatura</option>
                            <option value="Arte">Arte</option>
                            <option value="Medicina">Medicina</option>
                            <option value="Psicología">Psicología</option>
                            <option value="Educación">Educación</option>
                            <option value="Viajes">Viajes</option>
                            <option value="Animales">Animales</option>
                            <option value="Juegos">Juegos</option>
                            <option value="Humor">Humor</option>
                            <option value="Otros">Otros</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-normal rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Crear
                      </button>
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

export default Videos;
