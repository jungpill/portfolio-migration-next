import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://jungpillportfolio2.shop/",
    headers: {
      'X-Custom-Header': 'foobar',
      'Content-Type': 'application/json',
    }
  });