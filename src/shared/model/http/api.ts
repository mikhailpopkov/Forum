import axios, { type InternalAxiosRequestConfig } from "axios";

interface RefreshType {
  access_token: string;
  refresh_token: string;
}

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

$api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    if (axios.isAxiosError(error)) {
      const originRequest = error.config as CustomAxiosRequestConfig;

      if (error.response?.status == 401 && !originRequest._retry) {
        originRequest._retry = true;

        const refreshToken: string | null =
          localStorage.getItem("RefreshToken");
        if (!refreshToken) {
          window.location.href = "/";
          return Promise.reject(error);
        }

        try {
          const res = await axios.post<RefreshType>(
            "http://nest.tomfoolery.ru/auth/refresh",
            null,
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            },
          );

          localStorage.setItem("AccessToken", res.data.access_token);
          localStorage.setItem("RefreshToken", res.data.refresh_token);

          originRequest.headers.Authorization = `Bearer ${res.data.access_token}`;

          return $api(originRequest);
        } catch (refreshError) {
          if (axios.isAxiosError(refreshError)) {
            if (refreshError.response?.status == 403) {
              localStorage.removeItem("AccessToken");
              localStorage.removeItem("RefreshToken");

              window.location.href = "/";
            }
          }

          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  },
);
