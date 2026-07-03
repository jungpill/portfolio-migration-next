import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://api.jungpilportfolio.shop",
    headers: {
      'X-Custom-Header': 'foobar',
      'Content-Type': 'application/json',
    }
  });