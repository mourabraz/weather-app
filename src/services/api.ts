import axios from 'axios';

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

export { api, apiGeo };
