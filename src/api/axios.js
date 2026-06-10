import axios from "axios";

const BASE_URL = "http://localhost/api";

const api = axios.create({ baseURL: BASE_URL });

/* 인터셉터 */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
