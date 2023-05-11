import { Modal, message, notification } from "antd";
import { axiosInstance } from "../../../api";
import axios from "axios";



export  const deleteUser = (id) => {
 
      axiosInstance.delete(`users/${id}`)
        .then((response) => {
          message.success(response.data.message)
          
        }).catch((error) => {
          message.error(error.data.message)
        });
};

export const toggleUser = (id) => {
  axiosInstance.patch(`/users/toggle-enable/${id}`)
    .then((response) => {
      message.success(response.data.message)
      
    }).catch((error) => {
      message.error(error.data.message)
    });
}

export const updateUser = async (id, payloadData) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data: payloadData,
  };
  await axiosInstance(`users/${id}`, requestOptions)
    .then((response) => {
      message.success(response.data.message)
    }).catch((error) => {
      message.error(error.data.message)
    });
}