import { Row} from 'antd'
import {  SmileTwoTone} from '@ant-design/icons';
import React, { useState, useEffect } from 'react'
import { axiosInstance } from '../../../../api'
import RequestDays from './Request'
import StatusUser from './User'
import CurrentMonth from './Statistics/CurrentMonth'
import dayjs from 'dayjs'
import { Typography } from 'antd';
const { Title } = Typography;
const StatsData = () => {
  const [userActive, setUserActive] = useState()
  const [userDisable, setUserDisable] = useState()
  const [totalDaysOff, setTotalDaysOff] = useState()
  const [userData, setUserData] = useState([])
  const [reqData, setReqData] = useState([])
  const dateNow = new Date()
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    await axiosInstance.get(`/users?page=1&limit=100&sortBy=createdAt&createdAtBefore=${dateNow}&createdAtAfter=2023-01-01`)
      .then(responseUser => {
        setUserData(responseUser.data.users)
        setUserDisable(responseUser.data.users.filter((active) => active.isActive === false).length)
        setUserActive(responseUser.data.users.filter((active) => active.isActive === true).length)


      })
    await axiosInstance.get(`/daysOff?page=1&limit=100&sortBy=createdAt&createdAtBefore=${dateNow}&createdAtAfter=2023-01-01`)
      .then(responseRequest => {
        setReqData(responseRequest.data.daysOff)
        setTotalDaysOff(responseRequest.data.totalDaysOff)
      })

  };
 
  const currentMonth = dayjs().format('YYYY-MM');

  const userCreated = userData.map((date) => dayjs(date.createdAt).format('YYYY-MM'))
  const requestCreated = reqData.map((date) => dayjs(date.createdAt).format('YYYY-MM'))
  // const allDaysOff = userData.map((days)=> days.allDaysOff)
  // const balanceDays = userData.map((days)=> days.balanceDays)
  // const daysOffSick = userData.map((days)=> days.daysOffSick)
  
  // const includesDate = userCreated.forEach(function (item) {
  //   if (item === 10) console.log('item === 3');
  //   else console.log('No ');
  // })
  const dateCreatedUser = userCreated.filter(date => {
    return date === currentMonth
  })
  const filterDateCreatedUser = dateCreatedUser.length
  
  const dateCreatedRequest = requestCreated.filter(date => {
    return date === currentMonth
  })
  const filterDateCreatedRequest = dateCreatedRequest.length

  console.log('filter date created : ', filterDateCreatedRequest);
  
  return (
    <>

      {/* <Card
        style={{
          marginTop: 0,
          background: 'none',
          padding: 0,
          flexWrap: 'nowrap',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
        bordered= {false}
      > */}
        <Row  style={{justifyContent: 'center'}} >
          <Title level={2}>Welcome to your application <SmileTwoTone /> </Title>
        </Row>
        <Row
          style={{
            margin: 20,
            justifyContent: 'center',
            
          }}
        >
          <StatusUser userActive={userActive} userDisable={userDisable} />
          <RequestDays totalDaysOff={totalDaysOff} />
        </Row>
        <Row style={{
              justifyContent: 'center',
            }}>
          <Title level={2}> Current Month  </Title>
        </Row>
        <Row
          style={{
            paddingBottom: 24,
            marginLeft: 20,
            justifyContent: 'center'
          }}
        >
          <CurrentMonth users={filterDateCreatedUser} request={filterDateCreatedRequest} />
        </Row>
        {/* <Row style={{
              justifyContent: 'center',
            }}>
          <Title level={2}>Days Off Overview  </Title>
        </Row>
        <Row
        style={{
          marginLeft: 20,
          justifyContent: 'center'
        }}>
        <StatisticsGlobal UserData={userData} daysOff={allDaysOff}
        balanceDays={balanceDays} daysOffSick={daysOffSick}
        />
      </Row> */}


      {/* </Card> */}


    </>
  )
}

export default StatsData;