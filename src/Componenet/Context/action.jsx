
import { notification } from 'antd';
import { axiosInstance } from "../api";



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
      duration: 1,
      message: error.response.data.error
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
      message: error.response.data.error
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