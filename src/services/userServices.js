import axios from "axios";

const baseUrl = "https://unid-backend-radioytv.onrender.com/api";
const url_auth = `${baseUrl}/auth/`;
const url_user = `${baseUrl}/user/`;

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

export const getUserService = async (uid) => {
  const response = await axios.get(`${url_user}/${uid}`, ConfigHeader);
  return response.data;
};

export const updateUserService = async (uid, data) => {
  const response = await axios.put(`${url_user}/${uid}`, data, ConfigHeader);
  return response.data;
};

export const verifyTokenService = async () => {
  const response = await axios.get(`${url_auth}`, ConfigHeader);
  return response.data;
};
