import { Form, Input} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

function Details({  sick,daysOff,firstName, lastName, email, role, building,balanceDays }) {
  const [form] = Form.useForm();
  return (
    <>
        <Form
          form={form}
          {...formItemLayout}
          style={{
            maxWidth: 600,
          }}>
          <Form.Item label='Name'
          >
            <Input 
              value={`${firstName}  ${lastName} `}
              disabled
              style={{
                fontWeight: 600,
                color: 'black'
              }}
            />
          </Form.Item>
          <Form.Item label='Email'>
            <Input
              value={email}
              disabled
              style={{
                fontWeight: 600,
                color: 'black'
              }}
            />
          </Form.Item>
          <Form.Item label='Role'>
            <Input 
              value={role}
              disabled
              style={{
                fontWeight: 600,
                color: 'black'
              }}
              
            />
          </Form.Item>
          <Form.Item label='Building'>
            <Input 
              value={building}
              disabled
              style={{
                fontWeight: 600,
                color: 'black'
              }}
            />
          </Form.Item>
          <Form.Item label='Balance of Days'>
            <Input 
              value={balanceDays}
              disabled
              style={{
                fontWeight: 600,
                color: 'black'
              }}
            />
          </Form.Item>
          <Form.Item label='Days Off'>
            <Input 
              value={daysOff}
              disabled
              style={{
                fontWeight: 600,
                color: 'black'
              }}
            />
          </Form.Item>
          <Form.Item label='Days of Sick'>
            <Input 
              value={sick}
              disabled
              style={{
                fontWeight: 600,
                color: 'black'
              }}
            />
          </Form.Item>          
        </Form>       
    </>
  );
}

export default Details;