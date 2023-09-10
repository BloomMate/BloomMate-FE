import axios from 'axios';

// TODO : Fix the baseURL

export const defaultAxios = axios.create({
  baseURL: 'https://naver.com',
  withCredentials: true,
});
