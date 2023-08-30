import React from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm, message } from 'antd';
import { axiosInstance } from '../../../api';

const DeleteAll = ({ loadData }) => {
  const handeDelete = async () => {
    axiosInstance.delete('/daysOff')
      .then((response) => {
        message.success(response.data.message);
        return loadData();
      }).catch((err) => {
        message.error(err.data.message);
      })
  }
  return (
    <>
      <Popconfirm
        title='Are you sure, you want to delete all requests'
        okText="Yes"
        okType="danger"
        onConfirm={() => {
          handeDelete().then(() => {
            return loadData()
          })
        }}
      >
        <Button style={{
          color: "red",
          margin: '0 20px 0 20px'
        }}>
          Delete All
          <DeleteOutlined />
        </Button>
      </Popconfirm>
    </>
  )
}

export default DeleteAll