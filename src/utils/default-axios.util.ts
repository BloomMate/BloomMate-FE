import axios from 'axios';

export const defaultAxios = axios.create({
  baseURL: 'http://3.34.14.96:8000/',
  withCredentials: true,
});
