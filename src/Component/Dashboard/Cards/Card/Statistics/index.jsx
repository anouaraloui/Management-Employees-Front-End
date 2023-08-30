import React, { useState } from 'react'
import BarChart from './BarChat';
import LineChart from './LineChart';
import { Card, Col, Row, Space } from 'antd';

function StatisticsGlobal({ UserData, daysOff, balanceDays, daysOffSick }) {

  const [allDaysOff] = useState({
    labels: UserData.map((days) => days.firstName + ' ' + days.lastName),
    datasets: [
      {
        label: "All Days Off",
        data: daysOff,
        backgroundColor: [
          "rgba(75,192,192,1)"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Solde Days",
        data: balanceDays,
        backgroundColor: [
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Days Of Sick",
        data: daysOffSick,
        backgroundColor: [
          "#f3ba2f",
        ],
        borderColor: "black",
        borderWidth: 2,
      }
    ],

  });
  return (
    <div className="App">
      <Row>
        <Col span={6} style={{ margin: 20 }}>
          <Card bordered={true} style={{ width: 750 }}>
            <Space direction='horizontal' >
              <div style={{ width: 700 }}>
                <BarChart chartData={allDaysOff} />
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={4} style={{ margin: 20 }}>
          <Card bordered={true} style={{ width: 750 }}>
            <Space direction='horizontal' >
              <div style={{ width: 700 }}>
                <LineChart chartData={allDaysOff} />
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default StatisticsGlobal;