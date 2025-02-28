import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

api.interceptors.request.use(
  (config) => {
    console.log("API Request:", config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
