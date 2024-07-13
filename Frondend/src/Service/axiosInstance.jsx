import axios from "axios";
import { serverUrl } from "./baseUrl";

const adminApi = axios.create({
  baseURL: `${serverUrl}/admin`,
});

adminApi.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('admin-token'));
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default adminApi;
