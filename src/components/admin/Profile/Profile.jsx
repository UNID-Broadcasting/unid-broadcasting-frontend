import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import LoaderSpinner from "../../LoaderSpinner";
import Swal from "sweetalert2";
import {
  getUserService,
  updateUserService,
} from "../../../services/userServices";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({
    name: "",
    lastname: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = (e) => {
    e.preventDefault();
    setIsLoading(false);
    updateUserService(user.uid, userProfile)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Perfil actualizado",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Error al actualizar el perfil",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsLoading(true);
      });
  };

  useEffect(() => {
    const getProfile = () => {
      getUserService(user.uid)
        .then((res) => {
          console.log(res);
          setUserProfile(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    };
    getProfile();
  }, [user.uid]);

  if (isLoading) return <LoaderSpinner />;

  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <h3 className="text-gray-700 text-3xl font-medium">Editar perfil</h3>
          <div className="mt-4">
            <div className="flex flex-wrap -mx-6">
              <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                    <svg
                      className="h-8 w-8 text-white"
                      viewBox="0 0 28 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0ZM14 25.6C7.52 25.6 2.4 20.48 2.4 14C2.4 7.52 7.52 2.4 14 2.4C20.48 2.4 25.6 7.52 25.6 14C25.6 20.48 20.48 25.6 14 25.6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14 9.6C12.32 9.6 11 10.92 11 12.6C11 14.28 12.32 15.6 14 15.6C15.68 15.6 17 14.28 17 12.6C17 10.92 15.68 9.6 14 9.6ZM14 14.4C13.44 14.4 13 13.96 13 13.4C13 12.84 13.44 12.4 14 12.4C14.56 12.4 15 12.84 15 13.4C15 13.96 14.56 14.4 14 14.4Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14 6C16.76 6 19 8.24 19 11C19 13.76 16.76 16 14 16C11.24 16 9 13.76 9 11C9 8.24 11.24 6 14 6ZM14 14.4C15.68 14.4 17 13.08 17 11.4C17 9.72 15.68 8.4 14 8.4C12.32 8.4 11 9.72 11 11.4C11 13.08 12.32 14.4 14 14.4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">
                      Perfil
                    </h4>
                    <div className="text-gray-500">Editar perfil</div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-2/3 sm:mt-0">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <form onSubmit={updateProfile}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                      <div>
                        <label className="text-gray-700" htmlFor="name">
                          Nombre
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Nombre"
                          value={userProfile.name}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="text-gray-700" htmlFor="lastname">
                          Apellido
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="Apellido"
                          value={userProfile.lastname}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="text-gray-700" htmlFor="password">
                          ¿Deseas cambiar tu contraseña?
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Nueva contraseña"
                          value={userProfile.password}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>

                      <div>
                        <label className="text-gray-700" htmlFor="email">
                          Email
                        </label>
                        <input
                          disabled
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          value={userProfile.email}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="text-gray-700" htmlFor="career">
                          Carrera
                        </label>
                        <input
                          disabled
                          type="text"
                          name="career"
                          id="career"
                          placeholder="Carrera"
                          value={userProfile.career}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label className="text-gray-700" htmlFor="role">
                          Rol
                        </label>
                        <input
                          disabled
                          type="text"
                          name="role"
                          id="role"
                          placeholder="Rol"
                          value={
                            userProfile.role === "USER_REGISTERED"
                              ? "Usuario Registrado"
                              : null
                          }
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Guardar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
