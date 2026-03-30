import axios, { type InternalAxiosRequestConfig } from "axios";

const BASE_URL: string = "http://nest.tomfoolery.ru";
const CURRENCIES_URL: string =
  "https://v6.exchangerate-api.com/v6/980ace5908bb440b9442de1f/latest";

export const $api = axios.create({
  baseURL: BASE_URL,
});

export const $currencies = axios.create({
  baseURL: CURRENCIES_URL,
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
