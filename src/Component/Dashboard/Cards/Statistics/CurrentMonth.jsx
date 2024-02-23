import React from 'react'
import { Card, Col, Space, Statistic, Progress, Row } from 'antd'
import { CalendarOutlined, UserAddOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';
import './index.css'
const formatter = (value) => <CountUp end={value} separator="," />;

function CurrentMonth({ users, request }) {
  return (
    <>
      <Row gutter={16}
        style={{
          justifyContent: 'center'
        }}        
      >
        <Col span={4}
        style={{
          margin: 20
        }}
        className='currentStat'
        >
          <Card bordered={true}
          style={{
            borderRadius: '25px',
            boxShadow: '12px 12px 2px 1px rgba(0,255,0, .2)',
            minWidth: '140px',
          }}
          >
            <Space direction='horizontal'>
              <UserAddOutlined
                style={{
                  color: 'green',
                  backgroundColor: 'rgba(0,255,0,0.25',
                  borderRadius: 20,
                  fontSize: '2rem',
                  padding: 8
                }} />
              <Statistic
                title="Add User"
                value={users}
                valueStyle={{
                  color: 'rgb(76 175 80)',
                  fontWeight: 600,
                  fontSize: '2rem'                
                }} 
                formatter={formatter}
                className='statUser'                
              />
            </Space>
          </Card>
        </Col>
        <Col span={4} 
        style={{
          margin: 20
        }}
        className='currentStat'
        >
          <Card bordered={true} 
          style={{
            borderRadius: '25px',
            boxShadow: '12px 12px 2px 1px rgba(0,0,255, .2)',
            minWidth: '140px',
          }}
          >
            <Space direction='horizontal'>
              <CalendarOutlined
                style={{
                  color: 'blue',
                  backgroundColor: 'rgba(0,0,255,0.25',
                  borderRadius: 20,
                  fontSize: '2rem',
                  padding: 8
                }} />
              <Statistic
                title="Add Request"
                value={request}
                valueStyle={{
                  color: 'blue',
                  fontWeight: 600,
                  fontSize: '2rem'                 
                }}
                formatter={formatter}                
              />
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CurrentMonth;