import { Card, Col,  Space, Statistic } from 'antd'
import {UserOutlined} from '@ant-design/icons';
import CountUp from 'react-countup';
import './index.css'
const formatter = (value) => <CountUp end={value} separator="," />;

const StatusUser = ({userActive, userDisable}) => {
  return (
    <>      
    <Col span={5}
    style={{
      margin: 20
    }}
    className='cardStat'
    >
          <Card bordered={true}
            style={{
              borderRadius: '25px',
              boxShadow: '12px 12px 2px 1px rgba(0,255,0, .2)',
              minWidth: '140px'
            }}
          >
            <Space direction='horizontal' >
                <UserOutlined 
                style={{
                    color: 'green',
                    backgroundColor: 'rgba(0,255,0,0.25',
                    borderRadius: 20,
                    fontSize: '2rem',
                    padding: 8
                    
                }}/>            
                <Statistic
                title="Users Active"
                value={userActive}
                valueStyle={{
                  color: 'rgb(76 175 80)',
                  fontWeight: 600,
                  fontSize: '2rem'                
                }}    
                formatter={formatter}             
                 />            
            </Space>
          </Card>
        </Col>
        <Col span={5}
        style={{
          margin: 20
        }}
        className='cardStat'
        >
          <Card bordered={true}
            style={{
              borderRadius: '25px',
              boxShadow: '12px 12px 2px 1px rgba(255,0,0, .2)',
              minWidth: '140px'
            }}
          >
            <Space direction='horizontal' >
            <UserOutlined 
            style={{
                color: 'red',
                backgroundColor: 'rgba(255,0,0,0.25',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                fontSize: '2rem' 
            }}/>
            <Statistic
              title="Users Disable"
              value={userDisable}
              valueStyle={{
                color: '#cf1322',
                fontWeight: 600,
                fontSize: '2rem'                 
              }}   
              formatter={formatter}            
            />
            </Space>
          </Card>
        </Col>
          
    </>
  )
}

export default StatusUser;