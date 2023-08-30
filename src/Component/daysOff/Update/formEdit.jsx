import { Card, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import React from 'react'
import dayjs from 'dayjs';

const FormEdit = ({ change, type, justificationSick, startDay, endDay }) => {
    const [form] = Form.useForm();
    const { RangePicker } = DatePicker;
    const dateFormat = 'YYYY/MM/DD';
    const onChange = (value, dateString) => {
        change((pre) => {
            return { ...pre, endDay: dateString[1], startDay: dateString[0] };
        })
    };
    const onFinish = async (values) => {
        console.log('values :', values);
    }
    return (
        <Card
            style={{
                position: 'relative',
                alignItems: 'center',
                background: '#f5f5f5',
                border: 'none'
            }} >
            <Form form={form} name="register"

                onFinish={onFinish}
                scrollToFirstError  >
                <Row gutter={[8, 24]}>
                    <Col span={16} >

                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the date !',
                                },
                            ]} >
                            <RangePicker
                                format="YYYY-MM-DD"
                                defaultValue={[dayjs(startDay, dateFormat), dayjs(endDay, dateFormat)]}
                                onChange={onChange}
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select the type !',
                                },
                            ]}>
                            <Select
                                value={type}
                                placeholder="Type" style={{ width: '100%' }}
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
                                onChange={(value) => {
                                    change((pre) => {
                                        return { ...pre, type: value }
                                    })
                                }}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 24]}>
                    <Col span={12} >
                        <Form.Item  >
                            <Input
                                value={justificationSick}
                                placeholder='Justification Sick'
                                onChange={(e) => {
                                    change((pre) => {
                                        return { ...pre, justificationSick: e.target.value };
                                    });
                                }}
                            />
                        </Form.Item>
                    </Col>

                </Row>
            </Form>
        </Card>
    )
}

export default FormEdit;