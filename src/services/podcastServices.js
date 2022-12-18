import axios from "axios";

const baseUrl = "https://unid-backend-radioytv.onrender.com/api";
const url_podcast = `${baseUrl}/podcast`;

export const getPodcastService = async () => {
  const response = await axios.get(url_podcast);
  return response;
};

export const getPodcastByIdService = async (id) => {
  const response = await axios.get(`${url_podcast}/${id}`);
  return response;
};

export const createPodcastService = async (data) => {
  const response = await axios.post(url_podcast, data);
  return response;
};

export const updatePodcastService = async (id, data) => {
  const response = await axios.put(`${url_podcast}/${id}`, data);
  return response;
};

export const deletePodcastService = async (id) => {
  const response = await axios.delete(`${url_podcast}/${id}`);
  return response;
};
