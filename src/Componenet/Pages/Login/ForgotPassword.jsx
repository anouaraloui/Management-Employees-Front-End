
import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd'
import '../../Pages/Login/Form.css'
import { forgotPassword } from '../../Context/action';
import { useUserContext } from '../../Context/context';

const ForgotPassword = () => {
    const [email, setEmail] = useUserContext()
    const history = useNavigate()
    async function submit(e) {
        e.preventDefault();
        let forgotPasswordSend = await forgotPassword({email})
        if(forgotPasswordSend) return history('/sendconfirm')  
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const onReset = () => {
        history('/')
    };
    return (<Form
        action='POST'
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        style={{
            position: 'relative',
            maxWidth: 400,
            top: '12rem',
            left: '35rem'

        }}
    >
        <Card title="Reset your password"
            bordered={false}
            style={{
                width: 400,
                background: 'rgb(240, 242, 245)'
            }}>
            <p style={{ marginTop: -15 }}>Please enter your email to send you a password reset link.</p>



            <Form.Item

                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}>

                <Input prefix={<UserOutlined className="site-form-item-icon" />} value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
            </Form.Item>



            <Form.Item>
                <Button type="primary" htmlType="submit" className=" login-form-forgot" onClick={submit}>
                    Send
                </Button>
                <Button htmlType="button" className=" login-form-forgot" onClick={onReset}>
                    Cancel
                </Button>
            </Form.Item>

        </Card>
    </Form>

    );
};
export default ForgotPassword;


