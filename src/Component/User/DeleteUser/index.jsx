import React from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm, message } from 'antd';
import { axiosInstance } from '../../../api';

const DeleteUser = ({ loadData, record }) => {
  const handeDelete = async () => {
    const id = record._id;
    axiosInstance.delete(`users/${id}`)
      .then((response) => {
        message.success(response.data.message);
        return loadData();
      }).catch((error) => {
        message.error(error.data.message);
      });
  };
  return (
    <>
      <Popconfirm
        title='Are you sure, you want to delete this user'
        okText="Yes"
        okType="danger"
        onConfirm={() => handeDelete()}
      >
        <Button style={{ color: "red" }}>
          Delete
          <DeleteOutlined />
        </Button>
      </Popconfirm>
    </>
  )
}
export default DeleteUser