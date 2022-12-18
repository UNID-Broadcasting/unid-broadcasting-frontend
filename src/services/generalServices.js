import axios from "axios";

const baseUrl = "https://unid-backend-radioytv.onrender.com/api";
const url_podcast = `${baseUrl}/podcast`;
const url_videocast = `${baseUrl}/videocast`;

export const getAllPodcastTotal = async () => {
  const response = await axios.get(url_podcast);
  return response;
};

export const getAlllVideocastTotal = async () => {
  const response = await axios.get(url_videocast);
  return response;
};
