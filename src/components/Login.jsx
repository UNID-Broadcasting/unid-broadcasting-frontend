import React, { useState, useContext } from "react";
import { loginService } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import LoaderSpinner from "./LoaderSpinner";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Swal = require("sweetalert2");

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(UserContext);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLogin(true);
    e.preventDefault();

    if (user.username === "" || user.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
      setIsLogin(false);
      return;
    }

    try {
      const response = await loginService(user);
      login(response.data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.data.username)
        );
        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          text: "Has iniciado sesión correctamente",
        });
        navigate("/admin/dashboard");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El usuario o la contraseña son incorrectos",
      });
    }
    setIsLogin(false);
  };

  return (
    <>
      <section className="h-screen mt-10">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                {/* Username input */}
                <div className="mb-6">
                  <input
                    type="text"
                    name="username"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Nombre de Usuario"
                    onChange={handleInputChange}
                    value={user.username}
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Contraseña"
                    onChange={handleInputChange}
                    value={user.password}
                  />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Recuérdame
                    </label>
                  </div>
                  <a href="#!" className="text-gray-800">
                    ¿No puede iniciar sesión?
                  </a>
                </div>
                <div className="text-center lg:text-left">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Iniciar Sesión
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    ¿No tienes una cuenta?
                    <Link
                      to="/signup"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Regístrate
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div
        className="fixed top-20 left-0 w-full h-full bg-black bg-opacity-50 z-50"
        style={{ display: isLogin ? "block" : "none" }}
      >
        <div className="mt-44">{isLogin && <LoaderSpinner />}</div>
      </div>
    </>
  );
};

export default Login;
