import React, { useState, useEffect, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
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
        text: "El correo no puede contener caracteres especiales.",
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

    /* email only has to have numbers, no letters, max 10 before @ */
    if (!user.email.match(/^[0-9]{1,10}@[a-zA-Z0-9.-]{1,10}.[a-zA-Z]{2,4}$/)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El correo no puede contener letras. Debe ser tu correo institucional",
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

  const onLoad = () => {
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (captchaToken) {
      console.log(captchaToken);
    }
  }, [captchaToken]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded"
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
              className="border border-gray-400 p-2 rounded"
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
              className="border border-gray-400 p-2 rounded"
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
              className="border border-gray-400 p-2 rounded"
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
              className="border border-gray-400 p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="career">Carrera</label>
            <select
              name="career"
              id="career"
              value={user.career}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded"
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
            </select>
          </div>
          <HCaptcha
            sitekey="326c8c0f-c7bf-439d-9bde-c8faa7e85b47"
            onLoad={onLoad}
            onVerify={setCaptchaToken}
            ref={captchaRef}
          />
          <div className="flex flex-col">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
