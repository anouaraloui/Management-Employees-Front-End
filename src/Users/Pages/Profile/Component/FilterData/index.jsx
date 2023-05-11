import { useRef, useEffect, useState } from 'react';
import { axiosInstance } from '../../../../api';
import { Form, Space, Table, Button, DatePicker, Modal, Select, Input, notification, Popconfirm, Tag, Image, Avatar, Row, Col, FloatButton, Pagination, message } from 'antd';

function FilterData({onFilterData}) {
  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalUsersData, setTotalUsers] = useState(null)
  const [createdAtAfter, setCreatedAtAfter] = useState('')
  const [createdAtBefore, setCreatedAtBefore] = useState('')
  const [limit, setLimit] = useState('')
  const [sortBy, setSortBy] = useState('')
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  const dateNow = new Date()

   useEffect(() => {
   loadData();
  }, []);

  const loadData = async () => {
    setLoading(true)
    const response = await axiosInstance.get(`/users?page=1&limit=30&sortBy=createdAt&createdAtBefore=${dateNow}&createdAtAfter=2023-01-01`)
    setGridData(response.data.users)
    setTotalUsers(response.data.totalUsers)
    setLoading(false)
  };

  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    const createdBefore = dateString[1]
    setCreatedAtBefore(createdBefore)
    const createdAfter = dateString[0]
    setCreatedAtAfter(createdAfter)
  };

  const onFilter = async () => {
    axiosInstance.get(`/users?page=1&limit=${limit}&sortBy=${sortBy}&createdAtBefore=${createdAtBefore}&createdAtAfter=${createdAtAfter}`)
      .then((response) => {
        onFilterData(response.data.users)
        setLoading(false)
      })
  };
  const clearForm = () => {
    form.resetFields()
   return onFilterData(gridData)
   
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
              label: "createdAt",
              value: "createdAt"
            }
          ]}
        />
      </Form.Item>
      <Form.Item name={"limitUser"}>
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
        <Button onClick={clearForm}  >Cancel</Button>
      </Form.Item>
    </Form>  
      </Space.Compact>
    
    </>
  );
}

export default FilterData;