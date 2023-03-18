import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000
})

const token = localStorage.getItem('token')
const refreshToken = localStorage.getItem('refreshToken')
axiosInstance.interceptors.request.use(config => {
    if(token ) config.headers.authorization = token
    if(refreshToken ) config.headers.authorization = refreshToken
    return config
}, (err) => {
    return Promise.reject(err)
})

axiosInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });