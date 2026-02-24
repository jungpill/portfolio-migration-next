import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://jungpillportfolio.shop/",
    headers: {
      'X-Custom-Header': 'foobar',
      'Content-Type': 'application/json',
    }
  });