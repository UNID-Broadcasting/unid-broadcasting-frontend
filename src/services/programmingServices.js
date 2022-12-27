import axios from "axios";

const baseUrl = "https://unid-backend-radioytv.onrender.com/api";
const url_programming = `${baseUrl}/programming`;

export const getProgrammingService = async () => {
  const response = await axios.get(url_programming);
  return response;
};
