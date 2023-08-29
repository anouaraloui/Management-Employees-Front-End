import { Button, Modal, message } from 'antd';
import React from 'react'
import FormEdit from './formEdit';
import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { axiosInstance } from '../../../api';

const EditRequest = ({ loadData, record }) => {
    const [editingReq, setEditingReq] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    
    const onFinish = async () => {
        const id = editingReq._id
        await axiosInstance.put(`/daysOff/${id}`, editingReq)
            .then((response) => {
                message.success(response.data.message)
                return loadData()
            }).catch((error) => {
                console.log('error :', error);
                message.error(error.data.error)
            });
    }
    const onUpdate = (record) => {
        
        setEditingReq(record)
    setIsEditing(true)
    }
    console.log("editiing:",editingReq);
   
    const resetEditReq = () => {
        setIsEditing(false)
        
    }
    return (
        <>
            <Button 
            onClick={() => {
                onUpdate(record);
            }} style={{ color: "green" }}>Edit
                <EditOutlined />
            </Button>
            <Modal
                style={{
                    maxWidth: 450,
                }}
                title="Edit Days Off"
                open={isEditing}
                okText="Send"
                onCancel={() => {
                    resetEditReq();
                    setEditingReq([])
                }}
                onOk={() => {
                    onFinish();
                    resetEditReq();
                    setEditingReq([]);
                }}>
                <FormEdit 
                type={editingReq?.type}
                justificationSick={editingReq?.justificationSick}
                startDay={editingReq?.startDay}
                endDay={editingReq?.endDay}
                change={onUpdate}
                />
            </Modal>
        </>
    )
}

export default EditRequest