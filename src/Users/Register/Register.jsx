import React, { useEffect, useRef } from 'react';
import { Button, Form, Input, Select, Upload, notification, message, Card, Row, Col } from 'antd';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { axiosInstance } from '../api';
import avatarDefault from '../assets/avatar.jpg'
import { optionBuilding, optionsRole } from '../Pages/Profile/Component/OptionSelect/optionsSelect';
import convertToBase64 from '../Pages/Profile/Component/ConvertImage';

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const AddUser = () => {
    const [form] = Form.useForm();
    const [newUser, setNewUsers] = useState([])
    const token = localStorage.getItem('token')
    const decodedToken = jwtDecode(token)
    const roleUser = decodedToken.role
    const [file, setFile] = useState('')
    const onFinish = async (values) => {
        console.log('values', values);
        try {
            if (roleUser != "Super Admin") {
                message.error("You can't add new employee")
            }
            else {
                values = await Object.assign(values, { profile: file })
                await axiosInstance.post('/users', values)
                    .then((response) => {
                        console.log('finich', values);
                        console.log('response', response);
                        setNewUsers(response.data.user)
                        message.success(response.data.message)
                    })
                form.resetFields();
                setFile('')
            }
        } catch (error) {
            console.log('error', error);
            message.error(error.data.error.message)
        }
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle >
            <Select
                style={{
                    width: 75,
                }}
            >
                <Option value="+216" >+216</Option>
            </Select>
        </Form.Item>
    );
    console.log('register : ', newUser);
    const onUpload = async (e) => {
        console.log('e', e.target.files[0]);
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
        console.log('base :', base64);
    }
    return (
        <>
            <Row gutter={16}
                style={{ width: '100%', justifyContent: 'center' }}>
                <Col span={8}>
                    <Card
                        style={{
                            maxWidth: 600,
                            position: 'relative',
                            alignItems: 'center',
                            background: '#f5f5f5',
                            border: 'none'
                        }} >
                        <Form {...formItemLayout} form={form} name="register"
                            onFinish={onFinish}
                            style={{
                                maxWidth: 600
                            }}
                            scrollToFirstError  >
                            <Form.Item
                                name="firstName"
                                label="First Name"
                                rules={[
                                    {
                                        type: 'text',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your First Name!',
                                    },
                                ]} >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                rules={[
                                    {
                                        type: 'text',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your Last Name!',
                                    },
                                ]}  >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}  >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="role"
                                label="Role"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Role is Required'
                                    }
                                ]}  >
                                <Select placeholder="Software Engineer" options={optionsRole} />
                            </Form.Item>
                            <Form.Item
                                name="building"
                                label="Building"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Building is Required'
                                    }
                                ]} >
                                <Select placeholder="Front-End" options={optionBuilding} />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]} >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }} />
                            </Form.Item>
                            <Form.Item
                                name='profile'
                                label='Avatar'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please upload your picture!',

                                    }
                                ]} >
                                <div >
                                    <label htmlFor="profile">
                                        <img src={ '' ||file || avatarDefault} alt="avatar" width={"100px"} />
                                    </label>
                                    <input onChange={onUpload} type="file" id='profile' name='profile' accept='.jpeg, .png, .jpg' />
                                </div>
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" >
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
};
export default AddUser;
