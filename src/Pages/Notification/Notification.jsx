import ResultNotification from './Result';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const Notification = () => {
  const [notification, setNotification] = useState('')
  const history = useNavigate()
  let content;
  let Url = document.URL
  let sendconfirm = Url.includes('/sendconfirm')
  let resetconfirm = Url.includes('/resetconfirm')
  useEffect(() => {
    const getNotif = () => {
      content = <ResultNotification status="success"
        title={resetconfirm ? "Successfully reset password!" : sendconfirm ? "Successfully send link to reset your password!" : history('*')}
        subTitle={resetconfirm ? "Please back home to login again." : sendconfirm ? "Please check your email." : history('*')}
        extra={[
          <Button type="primary" htmlType="submit" onClick={(() => { history('/') })} >
            {resetconfirm ? "Login" : "Home"}
          </Button>

        ]} />
      setNotification(content)
    }
    getNotif()

  }, [])

  return (
    <>
      {notification}
    </>

  )

}

export default Notification;