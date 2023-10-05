import { Form, Space, Button, DatePicker, Select, Input, Typography, } from 'antd';
import './index.css'
function FormFilter({ onFilter, clearForm, setCreatedAtAfter, setCreatedAtBefore, setLimit, setSortBy }) {

  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();

  const onChange = (value, dateString) => {
    const createdBefore = dateString[1];
    setCreatedAtBefore(createdBefore);
    const createdAfter = dateString[0];
    setCreatedAtAfter(createdAfter);
  };

  return (
    <>
      <Space.Compact size='large' style={{ margin: '0 17px' }} direction='horizontal'>
        <Form layout='inline' form={form} >
          <Form.Item className='formItem'>
            <Typography.Title
              level={5}
              style={{
                margin: 0,
              }}
            >
              Filter Data:
            </Typography.Title>
          </Form.Item>
          <Form.Item name={"SortBy"} className='formItem'>
            <Select onSelect={(e) => setSortBy(e)} placeholder="Field to sort by" style={{ width: '100%' }}
              options={[
                {
                  label: "Creation Date",
                  value: "createdAt"
                }
              ]}
            />
          </Form.Item>
          <Form.Item name={"limit"} className='formItem'>
            <Input onChange={(e) => setLimit(e.target.value)} placeholder='Limit' style={{ width: 65 }} />
          </Form.Item>
          <Form.Item name={"dateOfSort"} className='formItem'>
            <RangePicker
              format="YYYY-MM-DD"
              onChange={onChange}
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item className='formItem'>
            <Button onClick={() => onFilter()} style={{ margin: '0px 10px' }}>
              Filter
            </Button>
            <Button onClick={() => {
              form.resetFields();
              clearForm()
            }} >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Space.Compact>
    </>
  );
}

export default FormFilter;