import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import LoaderSpinner from "../../LoaderSpinner";
import Swal from "sweetalert2";
import {
  getUserService,
  updateUserService,
} from "../../../services/userServices";
import { uploadFile } from "../../../firebase/config";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [userProfile, setUserProfile] = useState({
    name: "",
    lastname: "",
    password: "",
    imageProfileURL: "",
  });

  const handleInputChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(false);
    try {
      const result = await uploadFile(file);
      userProfile.imageProfileURL = result;
    } catch (error) {
      console.log(error);
    }
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
                    <img
                      className="h-24 rounded-full  mx-auto"
                      src={userProfile.imageProfileURL}
                      alt={`profile-${userProfile.name}`}
                    />
                  </div>
                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">
                      {userProfile.name} {userProfile.lastname}
                    </h4>
                    <div className="text-gray-500">{userProfile.career}</div>
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
                        <label className="text-gray-700" htmlFor="photo">
                          Foto de perfil
                        </label>
                        <input
                          type="file"
                          name="photo"
                          id="photo"
                          placeholder="Foto de perfil"
                          onChange={(e) =>
                            console.log(e) + setFile(e.target.files[0])
                          }
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
