import axios, { type InternalAxiosRequestConfig } from "axios";

const BASE_URL: string = "http://nest.tomfoolery.ru";

export const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("AccessToken");

    if (config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
