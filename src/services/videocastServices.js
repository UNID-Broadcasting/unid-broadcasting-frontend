import axios from "axios";

const baseUrl = "https://unid-backend-radioytv.onrender.com/api";
const url_videocast = `${baseUrl}/videocast`;

export const getAllVideocast = async () => {
  const response = await axios.get(url_videocast);
  return response;
};

export const getVideocastById = async (id) => {
  const response = await axios.get(`${url_videocast}/${id}`);
  return response;
};

export const createVideocast = async (data) => {
  const response = await axios.post(url_videocast, data);
  return response;
};

export const updateVideocast = async (id, data) => {
  const response = await axios.put(`${url_videocast}/${id}`, data);
  return response;
};

export const deleteVideocast = async (id) => {
  const response = await axios.delete(`${url_videocast}/${id}`);
  return response;
};

export const getAlllVideocastTotal = async () => {
  const response = await axios.get(url_videocast);
  return response;
};
