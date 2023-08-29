
import { notification } from 'antd';
import { axiosInstance } from "../api";
import jwtDecode from 'jwt-decode';
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
}

export const isAuthenticated = async () => {
	const user = localStorage.getItem('currentUser');
	if (!user) {
		return {}
	}
	return JSON.parse(user);
};

export  const logout = async () => {
  localStorage.clear()

}

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

}

export  const resetPassword = async (forgotPayload) => {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    data: forgotPayload,
  };
  try {

    let response = await axiosInstance('/auth/requestResetPassword', requestOptions)


    let data = response
    if (data) {
      let userData = JSON.stringify(data)
      return userData

    }
  } catch (error) {
    console.log({ error: 'Can not change the password !' });
  }
}

export const getAll = async ()=>{ 
  try {
     const token = localStorage.getItem('token')
    const decodedToken = jwtDecode(token)
    const userId = decodedToken.userId
    const admin = decodedToken.role
    console.log('admin :', admin);
    if(admin === "Super Admin")
    console.log('yep');
    const response= axiosInstance.get('/users', 
 )
 return response
  // let data = response
  // console.log(data);
  // if(data){
  //   let usersData = JSON.stringify(data)
  //   console.log('users dara :', usersData);
  //   return usersData
  // }
  } catch (error) {
    console.log({ error: 'Can notdisplay !' });
  }
  
  
}

export const setAuthToken = token => {
  if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  }
  else
      delete axios.defaults.headers.common["Authorization"];
}

export const addUser = async (payload) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: payload,
  };
  try {
    let response = await axiosInstance('/users', requestOptions)
    let data = response
    if (data) {
      
      return data
    }
    return data;
  } catch (error) {
    notification.error({
      placement: 'top',
      bottom: 50,
      duration: 1,
      message: error.data.error
    })
  }
}

