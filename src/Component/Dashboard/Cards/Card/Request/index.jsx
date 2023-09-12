import { Card, Col, Row, Space, Statistic } from 'antd'
import { ScheduleOutlined} from '@ant-design/icons';
import CountUp from 'react-countup';
const formatter = (value) => <CountUp end={value} />;

const RequestDays = ({totalDaysOff}) => {
  return (
    <>      
    <Col span={5}
    style={{
      margin: 20
    }}>
          <Card bordered={true}
            style={{
              borderRadius: '25px',
              boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
              minWidth: '140px'
            }}
          >
            <Space direction='horizontal'>
            < ScheduleOutlined 
            style={{
              color: 'blue',
              backgroundColor: 'rgba(0,0,255,0.25',
              borderRadius: 20,
              fontSize: '2rem',
              padding: 8
              
          }}/>
            <Statistic
              title="Users Request"
              value={totalDaysOff}
              valueStyle={{
                color: 'blue',
                fontWeight: 600,
                fontSize: '2rem',
              }}
              formatter={formatter}              
            />
            </Space>
          </Card>
        </Col>
    </>
  )
}

export default RequestDays;