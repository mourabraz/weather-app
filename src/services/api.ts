import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const apiGeo = axios.create({
  baseURL: `${process.env.REACT_APP_API_GEO}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/*
 * add delay for all requests, only for development purposes
 */
if (process.env.NODE_ENV !== 'production') {
  const delay = (config: AxiosRequestConfig): Promise<AxiosRequestConfig> =>
    new Promise(resolve => setTimeout(() => resolve(config), 500));
  api.interceptors.request.use(delay);
  apiGeo.interceptors.request.use(delay);
}

export { api, apiGeo };
