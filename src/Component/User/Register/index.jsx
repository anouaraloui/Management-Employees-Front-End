import { Button, Form, Input, Select, Card, Row, Col } from 'antd';
import avatarDefault from '../../../assets/avatar.jpg'
import { optionBuilding, optionsRole } from '../OptionSelect/optionsSelect';
import convertToBase64 from '../../ConvertImage/index';
import './index.css'
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
const FormRegister = ({ onFinish, setFile, file, form }) => {
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

    const onUpload = async (e) => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }

    return (
        <>
            <Card className='cardRegister' >
                <Form {...formItemLayout} form={form} name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Row gutter={[8, 24]}>
                        <Col span={12} >
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
                                    {
                                        min: 3
                                    }
                                ]} hasFeedback
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12} >
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
                                    {
                                        min: 3
                                    }
                                ]}
                                hasFeedback
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[8, 24]}>
                        <Col span={12} >
                            <Form.Item
                                name="phone"
                                label="Phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                    {
                                        max: 8,
                                        min: 8,

                                    }
                                ]}
                                hasFeedback
                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }} />
                            </Form.Item>
                        </Col>
                        <Col span={12} >
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
                                ]}
                                hasFeedback
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[8, 24]} >
                        <Col span={12} >
                            <Form.Item
                                name="role"
                                label="Role"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Role is Required'
                                    }
                                ]}
                                hasFeedback
                            >
                                <Select placeholder="Software Engineer" options={optionsRole} />
                            </Form.Item>
                        </Col>
                        <Col span={12} >
                            <Form.Item
                                name="building"
                                label="Building"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Building is Required'
                                    }
                                ]} hasFeedback
                            >
                                <Select placeholder="Front-End" options={optionBuilding} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[8, 24]}>
                        <Col span={12} >
                            <Form.Item
                                name='profile'
                                label='Avatar'
                            >
                                <div >
                                    <label htmlFor="profile">
                                        <img src={'' || file || avatarDefault} alt="avatar" width={"100px"} />
                                    </label>
                                    <input onChange={onUpload} type="file" id='profile' name='profile' accept='.jpeg, .png, .jpg' />
                                </div>
                            </Form.Item>
                        </Col>
                    </Row >
                    <Row justify={'center'}>
                        <Col span={8} >
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" >
                                    Register
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item>
                                <Button type="dashed" htmlType="reset"
                                >
                                    Cancel
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
    )
};
export default FormRegister;