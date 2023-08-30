import { Typography } from 'antd';
const { Title } = Typography;
const Welcome = () => {
    return(
        <>
        <Title level={2} style={{
            position: 'absolute',
            fontFamily: 'kumbh Sans',
            fontSize : 30,
            fontStyle: 'normal',
            lineHeight : 16,
            color : '#1B212D',
            flex: 'none',
            left: 60,
            fontWeight: 600
        }}>Welcome back!  </Title> 

        <Title level={2}style={{
            position: 'absolute',
            fontFamily: 'kumbh Sans',
            fontSize : 30,
            fontStyle: 'normal',
            lineHeight : 19,
            color : '#1B212D',
            flex: 'none',
            left: 60,
            fontWeight: 600
        }}>Please enter your details</Title>
        </>        
    )
}

export default Welcome;