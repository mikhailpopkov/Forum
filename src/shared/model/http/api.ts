import axios from "axios";

const BASE_URL: string = "http://nest.tomfoolery.ru";

export const $api = axios.create({
  baseURL: BASE_URL,
});
