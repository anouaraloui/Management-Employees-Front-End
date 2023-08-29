import { Typography } from 'antd';
const { Title } = Typography;
const date = new Date().toLocaleDateString()
const time = new Date().toLocaleTimeString()
const CurrentDate = () => {
    return (
        <>
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
        </>
    );
}

export default CurrentDate;