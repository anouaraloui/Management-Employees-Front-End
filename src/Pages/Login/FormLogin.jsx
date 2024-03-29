import './Form.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { loginUser } from '../../Context/action';
import { useUserContext } from '../../Context/context';
import jwt from 'jwt-decode'


const Login = () => {
    const [email, setEmail, password, setPassword] = useUserContext();
    const history = useNavigate();
    const onFinish = async (values) => {
        let user = await loginUser({ email, password });
        if (user) {
            notification.success({
                placement: 'top',
                bottom: 50,
                duration: 1,
                message: `User Login`
            });
            const token = user.data.token;
            const decoded = jwt(token);
            const id = decoded.userId;
            const role = decoded.role;
            console.log("role :", role);
            setTimeout(() => {
                {
                    role === "Super Admin"
                    ? history(`/dashboard`)
                    : history(`/dashboard/users/profile/${id}`)
                }
            }, 1000);
        };
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            action='POST'
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Card bordered={false}
                style={{
                    background: 'rgb(240, 242, 245)'
                }}
                className='cardForm'
                >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        { type: 'email', message: "Please enter a valid email" },
                    ]}
                    hasFeedback
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value)}}
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link to="/forgotPassword" className='login-form-forgot'>
                        Forgot Password
                    </Link>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" >
                        Log in
                    </Button>
                </Form.Item>
            </Card>
        </Form>
    );
};
export default Login;