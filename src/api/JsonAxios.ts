import baseAxios from "axios";
import { selectAccessToken } from "slices/authSlice";

export const baseURL = process.env.REACT_APP_API_BASE_URL;

const Axios = baseAxios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
  },
});

Axios.interceptors.request.use((config) => {
  // const accessToken = sessionStorage.getItem("accessToken");
  // config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : null;
  // const accessToken = selectAccessToken;
  config.headers.Authorization = `Bearer ${selectAccessToken}`;
  return config;
});

export default Axios;
