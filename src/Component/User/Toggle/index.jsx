import React from 'react'
import { Button, Popconfirm, message } from 'antd';
import { axiosInstance } from '../../../api';

const Toggle = ({loadData, record}) => {
    const onToggle = async () => {
        const id = record._id;
        axiosInstance.patch(`/users/toggle-enable/${id}`)
          .then((response) => {
            message.success(response.data.message);
            return loadData();
          }).catch((error) => {
            message.error(error.data.message);
          });    
      };
    return (
        <>
        <Popconfirm title='Are you sure, you want to change the status of this user'
              okText="Yes"
              okType="danger"
              onConfirm={() => {
                onToggle()
              }}
            >
              <Button >
                {record.isActive ?
                  <span style={{ color: 'red' }}>
                    Disable
                  </span>
                  :
                  <span style={{ color: 'green' }}>
                    Active
                  </span>
                }
              </Button>
            </Popconfirm>       
        </>
    )
}
export default Toggle;