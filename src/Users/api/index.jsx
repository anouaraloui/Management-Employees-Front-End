import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000
})


axiosInstance.interceptors.request.use((request)=> {
    const token = localStorage.getItem('token')
if(token ) {
    request.headers.Authorization = `Bearer ${token}`
}
return request
}, (err) => {
    return Promise.reject(err)
})

axiosInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error.response);
  });
  
  

