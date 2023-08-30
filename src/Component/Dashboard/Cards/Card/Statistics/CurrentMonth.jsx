import React from 'react'
import { Card, Col, Space, Statistic, Progress } from 'antd'
import { CalendarOutlined, UserAddOutlined } from '@ant-design/icons';
function CurrentMonth({ users, request }) {
  return (
    <>

      <Col span={6}>
        <Card bordered={false}
          style={{
            marginRight: 20
          }}
        >
          <Space direction='horizontal' >
            <UserAddOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,255,0,0.25',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
              }} />
            <Statistic
              title="Add User"
              value={users}
            />

          </Space>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}
          style={{
            marginRight: 20
          }}
        >
          <Space direction='horizontal' >
            <CalendarOutlined
              style={{
                color: 'blue',
                backgroundColor: 'rgba(0,0,255,0.25',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
              }} />
            <Statistic
              title="Add Request"
              value={request}
            />
          </Space>
        </Card>
      </Col>
    </>
  )
}

export default CurrentMonth