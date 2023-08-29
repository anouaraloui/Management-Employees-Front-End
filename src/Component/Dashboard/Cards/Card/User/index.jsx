import { Card, Col, Space, Statistic } from 'antd'
import {UserOutlined} from '@ant-design/icons';
const StatusUser = ({userActive, userDisable}) => {
  return (
    <>  
    
    <Col span={6}>
          <Card bordered={true}
            style={{
              marginRight: 20
            }}
          >
            <Space direction='horizontal' >
                <UserOutlined 
                style={{
                    color: 'green',
                    backgroundColor: 'rgba(0,255,0,0.25',
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8
                }}/>            
                <Statistic
                title="User Active"
                value={userActive}                
                 />            
            </Space>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={true}
            style={{
              marginRight: 20
            }}
          >
            <Space direction='horizontal' >
            <UserOutlined 
            style={{
                color: 'red',
                backgroundColor: 'rgba(255,0,0,0.25',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
            }}/>
            <Statistic
              title="User Disable"
              value={userDisable}              
            />
            </Space>
          </Card>
        </Col>
    </>
  )
}

export default StatusUser;