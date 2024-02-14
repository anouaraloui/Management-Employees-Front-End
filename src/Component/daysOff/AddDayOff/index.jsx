import React, { useState } from 'react';
import { Button, Form, Input, Select, message, Card, Row, Col, DatePicker, Modal } from 'antd';
import jwtDecode from 'jwt-decode';
import { axiosInstance } from '../../../api';
import { PlusCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const AddDaysOff = ({ loadData }) => {
    const [form] = Form.useForm();
    const [daysOff, setDaysOff] = useState([]);
    const [startDay, setStarDay] = useState('');
    const [endDay, setEndDay] = useState('');
    const [newReq, setNewReq] = useState(false);
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;
    const { RangePicker } = DatePicker;
    
    const onChange = (value, dateString) => {       
        const endDay = dateString[1];
        setEndDay(endDay);
        const startDay = dateString[0];
        setStarDay(startDay);
    };
    const onFinish = async (values) => {
        form.validateFields()
            .then(async (values) => {
                await axiosInstance.post('/daysOff', { ...values, startDay, endDay, userId })
                    .then((response) => {
                        message.success(response.data.message);
                        setDaysOff(response.data.newDaysOff);
                        form.resetFields();
                        setEndDay();
                        setStarDay();
                        setTimeout(() => {
                            setNewReq(false);
                        }, 1000);
                        return loadData();
                    })
                    .catch((err) => {
                        message.error(err.data.error);
                    })
            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            });
    };
    const resetAddReq = () => {
        setNewReq(false);
        form.resetFields();
    }
    const addRequest = () => {
        setNewReq(true);
    }

    const disabledDate = (current) => {
        const holidaysPublicDays = ['01-01', '03-20', '04-09', '05-01', '06-16', '07-08', '07-25', '08-13', '09-16', '10-15', '12-17']
        return current && current < dayjs().endOf('day') || holidaysPublicDays.includes(dayjs(current).format('MM-DD'));
  };
  
    return (
        <>
            <Button onClick={addRequest}
                style={{
                    color: 'Highlight',
                    margin: '0 20px 0 20px'
                }}
            >
                New Request
                <PlusCircleOutlined />
            </Button>
            <Modal
                style={{
                    maxWidth: 450,
                }}
                title="Add Days Off"
                open={newReq}
                okText="Send"
                onCancel={() => {
                    resetAddReq()
                }}
                onOk={() => {
                    onFinish();
                }}>
                <Card
                    style={{
                        position: 'relative',
                        alignItems: 'center',
                        background: '#f5f5f5',
                        border: 'none'
                    }} >
                    <Form
                        form={form} name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <Row gutter={[8, 24]}>
                            <Col span={16} >
                                <Form.Item
                                    name={'daysRequest'}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input the date !',
                                        },
                                    ]} >
                                    <RangePicker
                                        format="YYYY-MM-DD"
                                        onChange={onChange}
                                        style={{ width: '100%' }}
                                        disabledDate={disabledDate }
                                        
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={8} >
                                <Form.Item name={"type"}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select the type !',
                                        },
                                    ]}>
                                    <Select placeholder="Type" style={{ width: '100%' }}
                                        options={[
                                            {
                                                label: "Paid",
                                                value: "Paid"
                                            },
                                            {
                                                label: 'Unpaid',
                                                value: 'Unpaid',
                                            },
                                            {
                                                label: 'Sick',
                                                value: 'Sick',
                                            }
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[8, 24]}>
                            <Col span={12} >
                                <Form.Item name={"justificationSick"} >
                                    <Input placeholder='Justification Sick' />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Modal>
        </>
    )
};
export default AddDaysOff;
