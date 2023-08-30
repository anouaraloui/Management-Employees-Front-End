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
            />
          </Form.Item>
          <Form.Item label='Email'>
            <Input
              value={email}
            />
          </Form.Item>
          <Form.Item label='Role'>
            <Input 
              value={role}
            />
          </Form.Item>
          <Form.Item label='Building'>
            <Input 
              value={building}
            />
          </Form.Item>
          <Form.Item label='Balance of Days'>
            <Input 
              value={balanceDays}
            />
          </Form.Item>
          <Form.Item label='Days Off'>
            <Input 
              value={daysOff}
            />
          </Form.Item>
          <Form.Item label='Days of Sick'>
            <Input 
              value={sick}
            />
          </Form.Item>          
        </Form>       
    </>
  );
}

export default Details;