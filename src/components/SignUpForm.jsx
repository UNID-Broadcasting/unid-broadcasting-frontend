import React, { useState, useEffect, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Link } from "react-router-dom";
const Swal = require("sweetalert2");
const uriel = require("../assets/lobo-uriel/Uriel-UNID_100x132.png");

const SignUpForm = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    career: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.name === "" ||
      user.lastname === "" ||
      user.email === "" ||
      user.username === "" ||
      user.password === "" ||
      user.career === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
      return;
    }
    if (captchaToken === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes completar el captcha",
      });
      return;
    } else if (!user.name.match(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,40}$/)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre no puede contener números o caracteres especiales.",
      });
      return;
    } else if (
      /* El campo de correo solo debe admitir digitos, máximo 10 antes del @ */
      !user.email.match(
        /^[a-zA-Z0-9._-]{1,10}@[a-zA-Z0-9.-]{1,10}.[a-zA-Z]{2,4}$/
      )
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo no puede contener caracteres especiales. Se compone de tu ID de alumno seguido de @red.unid.mx",
      });
      return;
    } else if (!user.lastname.match(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{1,40}$/)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El apellido no puede contener números o caracteres especiales.",
      });
      return;
    } else if (user.username.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre de usuario debe tener al menos 6 caracteres.",
      });
      return;
    }

    if (!user.email.match(/^[0-9]{1,10}@[a-zA-Z0-9.-]{1,10}.[a-zA-Z]{2,4}$/)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo no puede contener caracteres especiales. Se compone de tu ID de alumno seguido de @red.unid.mx",
      });
      return;
    } else if (!user.email.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo debe contener un @",
      });
      return;
    } else if (!user.email.includes("red.unid.mx")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo debe contener un dominio red.unid.mx",
      });
      return;
    } else if (user.password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La contraseña debe tener al menos 8 caracteres.",
      });
      return;
    } else if (!user.email.includes("@red.unid.mx")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo debe ser de la institución @red.unid.mx",
      });
      return;
    } else if (user.career === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes seleccionar una carrera.",
      });
      return;
    }

    setUsers([...users, user]);
    setUser({
      name: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      career: "",
    });

    fetch("https://unid-backend-radioytv.onrender.com/api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (
          data.message ===
          "El correo ya está registrado, si se trata de un error, por favor contacte al administrador del sistema"
        )
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El correo ya está registrado, si se trata de un error, por favor contacte al administrador del sistema.",
          });
        else if (
          data.message ===
          "El nombre de usuario ya está registrado, si se trata de un error, por favor contacte al administrador del sistema"
        )
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El nombre de usuario ya está registrado, si se trata de un error, por favor contacte al administrador del sistema.",
          });
        else if (data.message === "Error al registrar el usuario")
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al registrar el usuario, contacte al administrador del sistema.",
          });
        else if (data.message === "Usuario registrado correctamente")
          Swal.fire({
            imageUrl: uriel,
            icon: "success",
            title: "Registro exitoso",
            text: "Bienvenido a Radio y TV UNID, " + data.data.name + ".",
          });
      });
  };

  useEffect(() => {
    if (captchaToken) {
      console.log(captchaToken);
    }
  }, [captchaToken]);

  return (
    <>
      <div className="mt-48">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Registro de usuario
        </h2>
      </div>
      <div className="flex justify-center items-center mt-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={handleChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">Apellido</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={user.lastname}
              onChange={handleChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Correo Institucional</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username">Nombre de Usuario</label>
            <input
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={handleChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="career">Carrera</label>
            <select
              name="career"
              id="career"
              value={user.career}
              onChange={handleChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option value=""></option>
              <option value="Ingeniería en Sistemas">
                Ingeniería en Sistemas
              </option>
              <option value="Ciencias y Técnicas de la Comunicación">
                Ciencias y Técnicas de la Comunicación
              </option>
              <option value="Diseño Gráfico Digital">
                Diseño Gráfico Digital
              </option>
              <option value="Mercadotécnia">Mercadotécnia</option>
              <option value="Mercadotécnia">Psicología Organizacional</option>
              <option value="Mercadotécnia">Administración de Empresas</option>
              <option value="Mercadotécnia">
                Derecho y Ciencias Jurídicas
              </option>
            </select>
          </div>
          <div className="mt-4">
            <HCaptcha
              sitekey="326c8c0f-c7bf-439d-9bde-c8faa7e85b47"
              onVerify={setCaptchaToken}
              ref={captchaRef}
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Crear cuenta
            </button>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              ¿Ya tienes una cuenta?
              <Link
                to="/login"
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
