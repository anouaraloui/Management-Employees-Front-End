import { Form, Space, Button, DatePicker, Select, Input,} from 'antd';

function FormFilter({ onFilter, clearForm, setCreatedAtAfter, setCreatedAtBefore, setLimit, setSortBy}) {

  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();  
  
  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    const createdBefore = dateString[1]
    setCreatedAtBefore(createdBefore)
    const createdAfter = dateString[0]
    setCreatedAtAfter(createdAfter)
  };  

  return (
    <>
    {/* Form of Filter Data */}
      <Space.Compact  size='large' style={{ marginLeft: 18 }} direction='horizontal'>
      <Form layout='inline' form={form} >
      <Form.Item>
        <span>Filter Data:</span>
      </Form.Item>
      <Form.Item name={"SortBy"}>
        <Select onSelect={(e) => setSortBy(e)} placeholder="Field to sort by" style={{ width: '100%' }}
          options={[
            {
              label: "Creation Date",
              value: "createdAt"
            }
          ]}
        />
      </Form.Item>
      <Form.Item name={"limit"}>
        <Input onChange={(e) => setLimit(e.target.value)} placeholder='Limit' style={{ width: 65 }} />

      </Form.Item>
      <Form.Item name={"dateOfSort"}>
        <RangePicker
          format="YYYY-MM-DD"
          onChange={onChange}
          style={{ width: '100%' }}
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={() => onFilter()} >
          Filter
        </Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={()=> {
            form.resetFields();
            clearForm()}}  >Cancel</Button>
      </Form.Item>
    </Form>  
      </Space.Compact>
    
    </>
  );
}

export default FormFilter;