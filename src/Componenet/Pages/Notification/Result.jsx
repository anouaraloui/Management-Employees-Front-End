
import React from 'react';
import { Result } from 'antd';


const ResultNotification = (props) => {
  return (
    <>
      <Result
        status={props.status}
        title={props.title}
        subTitle={props.subTitle}
        extra={props.extra}
      />
    </>

  )

}


export default ResultNotification;


