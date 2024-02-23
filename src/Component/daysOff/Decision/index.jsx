import React, { useState } from 'react'
import { Button, Card, Form, Modal, Select, message } from 'antd';
import { axiosInstance } from '../../../api';
import TextArea from 'antd/es/input/TextArea';
import jwtDecode from 'jwt-decode';
const Decision = ({ loadData, record }) => {
    const [openDecision, setOpenDecision] = useState(false);
    const [form] = Form.useForm();
    const [isDisable, setDisable] = useState(true);
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;
    const role = decodedToken.role;

    const onFinish = (values) => {
        form.validateFields()
            .then(async (values) => {
                const id = record._id;
                await axiosInstance.patch(`/daysOff/decision/${id}`, { ...values, userId })
                    .then((response) => {
                        message.success(response.data.message);
                        form.resetFields();
                        setTimeout(() => {
                            setOpenDecision(false);
                        }, 1000)
                        return loadData();
                    }).catch((error) => {
                        message.error(error.data.error);
                    });
            })
    }

    const openModal = () => {
        setOpenDecision(true);
    }
    const resetDecision = () => {
        setOpenDecision(false);
    }
    return (
        <>
            <Button onClick={openModal}
                disabled={
                    role === 'Super Admin'
                }>
                Decision
            </Button>
            <Modal
                style={{ width: 200 }}
                open={openDecision}
                okText="Confirm"
                cancelText="Cancel"
                onOk={() => {
                    onFinish();
                }}
                onCancel={() => {
                    resetDecision();
                }}
            >
                <Card
                    style={{
                        position: 'relative',
                        alignItems: 'center',
                        background: '#f5f5f5',
                        border: 'none'
                    }}
                >
                    <Form
                        form={form}
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <Form.Item
                            name={"status"}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select your decision !'
                                }
                            ]}
                        >
                            <Select placeholder="Your Reponse"
                                onSelect={(e) => setDisable(e)}
                                options={[
                                    {
                                        label: 'Accepted',
                                        value: true
                                    },
                                    {
                                        label: 'Declined',
                                        value: false
                                    }
                                ]}
                            />
                        </Form.Item>
                        {!isDisable ?
                            <Form.Item name={"justification"} >
                                <TextArea rows={4} placeholder='Your Justification !' />
                            </Form.Item>
                            : null
                        }
                    </Form>
                </Card>
            </Modal>
        </>
    )
}

export default Decision;