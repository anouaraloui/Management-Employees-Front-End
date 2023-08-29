import { Card, Col, Space, Statistic } from 'antd'
import { ScheduleOutlined} from '@ant-design/icons';
const RequestDays = ({totalDaysOff}) => {
  return (
    <>        
    <Col span={6}>
          <Card bordered={true}
            style={{
              marginRight: 20
            }}
          >
            <Space direction='horizontal'>
            < ScheduleOutlined 
            style={{
              color: 'blue',
              backgroundColor: 'rgba(0,0,255,0.25',
              borderRadius: 20,
              fontSize: 24,
              padding: 8
          }}/>
            <Statistic
              title="Request"
              value={totalDaysOff}
              valueStyle={{
                color: '#cf1322',
              }}
            />
            </Space>
          </Card>
        </Col>
    </>
  )
}

export default RequestDays;