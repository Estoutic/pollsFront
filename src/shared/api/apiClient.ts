/* eslint-disable no-param-reassign */
import axios from "axios";


const createHttpClient = (url: string) => {
  const httpClient = axios.create({
    baseURL: url,
  });

  httpClient.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return httpClient;
};

export default createHttpClient;
