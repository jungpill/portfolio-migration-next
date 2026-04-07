import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://jungpilportfolio.shop/",
    headers: {
      'X-Custom-Header': 'foobar',
      'Content-Type': 'application/json',
    }
  });