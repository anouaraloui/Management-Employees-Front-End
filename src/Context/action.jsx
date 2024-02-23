import { notification } from 'antd';
import { axiosInstance } from "../api";
import axios from 'axios';

export const loginUser = async (loginPayload) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: loginPayload,
  };
  try {
    let response = await axiosInstance('/auth/login', requestOptions)
    let data = response
    if (data) {
      let { token, refreshToken } = response.data
      let user = JSON.stringify(data)
      localStorage.setItem('currentUser', user);
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refreshToken)
      return data
    }
    return data;
  } catch (error) {
    notification.error({
      placement: 'top',
      bottom: 50,
      duration: 3,
      message: error.data.error
    })
  }
};

export const isAuthenticated = async () => {
	const user = localStorage.getItem('currentUser');
	if (!user) {
		return {};
	}
	return JSON.parse(user);
};

export  const logout = async () => {
  localStorage.clear();
};

export  const forgotPassword = async(forgotPayload) => {
  const requestOptions = {
    method: 'POST',
    data: forgotPayload
  };
  try{
    let response = await axiosInstance('/auth/forgotPassword', requestOptions)
    let data = response
    if(data) {
      return data
    }
  }catch(error){
    notification.error({
      placement: 'top',
      bottom: 50,
      duration: 1,
      message: error.data.error
    })
  }
};

export  const resetPassword = async (resetPayload) => {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    data: resetPayload,
  };
  try {
    let response = await axiosInstance('/auth/requestResetPassword', requestOptions)
    let data = response;
    if (data) {
      let userData = JSON.stringify(data);
      return userData;
    }
  } catch (error) {
    notification.error({
      placement: 'top',
      bottom: 50,
      duration: 1,
      message: "Somthing went wrong!"
    })
  };
};

export const setAuthToken = token => {
  if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else
      delete axios.defaults.headers.common["Authorization"];
};
