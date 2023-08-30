import React from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm, message } from 'antd';
import { axiosInstance } from '../../../api';

const DeleteOne = ({ loadData, record }) => {
  const handeDelete = async () => {
    const id = record._id;
    await axiosInstance.delete(`/daysOff/${id}`)
      .then((response) => {
        message.success(response.data.message);
        return loadData();
      }).catch((error) => {
        message.error(error.data.error);
      });
  }
  return (
    <>
      <Popconfirm
        title='Are you sure, you want to delete this requests'
        okText="Yes"
        okType="danger"
        onConfirm={() => handeDelete()}
      >
        <Button style={{
          color: "red",
          margin: '0 20px 0 20px'
        }}>Delete
          <DeleteOutlined />
        </Button>
      </Popconfirm>
    </>
  )
}

export default DeleteOne