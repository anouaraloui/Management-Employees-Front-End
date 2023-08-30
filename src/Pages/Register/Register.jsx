import { Form, message } from 'antd';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { axiosInstance } from '../../api';
import FormRegister from '../../Component/User/Register/index'

const AddUser = () => {
    const [form] = Form.useForm();
    const [newUser, setNewUsers] = useState([]);
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const roleUser = decodedToken.role;
    const [file, setFile] = useState('');
    const onFinish = async (values) => {
        console.log('values', values);
        try {
            if (roleUser != "Super Admin") {
                message.error("You can't add new employee");
            }
            else {
                values = await Object.assign(values, { profile: file })
                await axiosInstance.post('/users', values)
                    .then((response) => {
                        setNewUsers(response.data.user);
                        message.success(response.data.message);
                    })
                form.resetFields();
                setFile('');
            }
        } catch (error) {
            message.error(error.data.error.message);
        }
    };

    return (
        <>
            <div
                style={{
                    marginLeft: '10%'
                }}
            >
                <FormRegister
                    file={file}
                    setFile={setFile}
                    onFinish={onFinish}
                    form={form}
                />
            </div>
        </>
    )
};
export default AddUser;
