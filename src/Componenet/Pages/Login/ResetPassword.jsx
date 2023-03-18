import { LockOutlined} from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from 'antd'
import '../../Pages/Login/Form.css'
import { resetPassword } from '../../Context/action';
import { useUserContext } from '../../Context/context';

const ResetPassword = () => {
    
    const [password, setPassword,confirmPassword , setConfirmPassword] = useUserContext()
    const history = useNavigate()

    let tokenURL = useParams()
    const Submit = async (e) => {
        e.preventDefault();
        let token = tokenURL.token
        await resetPassword({password, confirmPassword,token})
        if(password != confirmPassword) {
            notification.error({
                placement: 'top',
                bottom: 50,
                duration: 2,
                message: `Passwords must match`
              });
            
        }else return history('/resetconfirm')
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
    <Form
        action='POST'
        name="normal_login"
        className="login-form"
        
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
            <p style={{ marginTop: -15 }}>Please enter your new password.</p>



           <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        
                        placeholder="New Password"
                    />
                </Form.Item>
                <Form.Item
                    name="confirm password"
                    rules={[
                        {
                            required: true,
                            message: 'Confirm your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        placeholder="Confirm password"
                    />
                </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit" className=" login-form-forgot" onClick={Submit}>
                    Confirm
                </Button>
            </Form.Item>

        </Card>
    </Form>

    );
};
export default ResetPassword;


