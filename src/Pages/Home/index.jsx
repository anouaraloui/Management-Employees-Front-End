import React from 'react';
import Login from '../Login/FormLogin';
import { Typography } from 'antd';
import './index.css'
const { Title } = Typography;
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
function Home() {
    return (
        <>
            <div>
                <Title level={2} style={{
                    position: 'absolute',
                    left: 60,
                    height: 24,
                    width: 400,
                    lineHeight: 11.5,
                    color: '#1B212D',
                    fontFamily: 'kumbh Sans',
                    fontSize: 30,
                    fontStyle: 'normal',
                    fontWeight: 300

                }}>
                    {time} {date}
                </Title>
            </div>
            <div>
                <Title level={2} style={{
                    position: 'absolute',
                    fontFamily: 'kumbh Sans',
                    fontSize: 30,
                    fontStyle: 'normal',
                    lineHeight: 16,
                    color: '#1B212D',
                    flex: 'none',
                    left: 60,
                    fontWeight: 600
                }}>Welcome back!</Title>

                <Title level={2} style={{
                    position: 'absolute',
                    fontFamily: 'kumbh Sans',
                    fontSize: 30,
                    fontStyle: 'normal',
                    lineHeight: 19,
                    color: '#1B212D',
                    flex: 'none',
                    left: 60,
                    fontWeight: 600
                }}>Please enter your details</Title>
            </div>
            <div className='login'>
                <Login />
            </div>
        </>
    )
}

export default Home;
