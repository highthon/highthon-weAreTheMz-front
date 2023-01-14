import axios from "axios";

const api = axios.create({
  baseURL: `http://172.20.67.54:8080/`,
  timeout: 3000,
});

api.interceptors.request.use(
  function (config) {
    // 로그인 되있을 때 access_token
    const accessToken = localStorage.getItem("Authorization");
    if (accessToken) {
      config.headers = {
        Authorization: accessToken,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
