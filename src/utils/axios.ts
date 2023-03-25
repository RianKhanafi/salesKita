import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { camelizeKeys } from "humps";
import config from "../config";

const axiosApp = axios.create({
  baseURL: config.baseURL,
});

axiosApp.interceptors.response.use(
  (response: AxiosResponse) => {
    if (
      response.data &&
      response.headers["content-type"] === "application/json; charset=utf-8"
    ) {
      response.data = camelizeKeys(response.data);
    }

    return response;
  },
  (err) => {
    Promise.reject(err);
  }
);

axiosApp.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

export { axiosApp };
