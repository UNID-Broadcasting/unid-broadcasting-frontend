import axios from "axios";

const baseUrl = "https://unid-backend-radioytv.onrender.com/api";
const url_auth = `${baseUrl}/auth`;

const ConfigHeader = {
  headers: {
    "x-token": localStorage.getItem("token"),
  },
};

export const loginService = async (data) => {
  const response = await axios.post(`${url_auth}/login`, data);
  return response;
};

export const registerService = async (data) => {
  const response = await axios.post(`${url_auth}/register`, data);
  return response;
};

export const verifyTokenService = async () => {
  const response = await axios.get(`${url_auth}`, ConfigHeader);
  console.log(`Esta es la respuesta del servicio: ${response}`);
  return response;
};
