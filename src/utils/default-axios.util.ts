import { API_URL } from '@env';
import axios from 'axios';

export const defaultAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
