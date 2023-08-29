import { useRef, useEffect, useState } from 'react';
import { axiosInstance } from '../../../api';
import { Form, Space, Table, Button, DatePicker, Modal, Select, Input, notification, Popconfirm, Tag, Image, Avatar, Row, Col, FloatButton, Pagination, message } from 'antd';
import FormFilter from '../../FormFilter/index';

function FilterDays(props) {
  const [createdAtAfter, setCreatedAtAfter] = useState('')
  const [createdAtBefore, setCreatedAtBefore] = useState('')
  const [limit, setLimit] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [request, setRequest] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalDaysOff, setTotalDaysOff] = useState(null)
  const dateNow = new Date()

  useEffect(()=> {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    await axiosInstance.get(`/daysOff?page=1&limit=30&sortBy=createdAt&createdAtBefore=${dateNow}&createdAtAfter=2023-01-01`)
      .then((response) => {
        console.log('response :', response);
        setRequest(response.data.daysOff)
        setLoading(false)
        setTotalDaysOff(response.data.totalDaysOff)
      })
  };
  

  const onFilter = async () => {
    axiosInstance.get(`/daysOff?page=1&limit=${limit}&sortBy=${sortBy}&createdAtBefore=${createdAtBefore}&createdAtAfter=${createdAtAfter}`)
      .then((response) => {
        console.log('response :', response);
        props.onFilterData(response.data.daysOff)
        setLoading(false)
        props.filterDays(response.data.daysOff.length)
        console.log('limit Users : ', response.data.daysOff.length);
      })
  };
  const clearForm = () => {    
    props.filterDays(totalDaysOff)
    props.onFilterData(request)
    setCreatedAtAfter('')
    setCreatedAtBefore('')
    setLimit('')
    setSortBy('')
   
  };
  const getCreatedAfter = (createdAtAfter) => {setCreatedAtAfter(createdAtAfter)}
  const getSortBy = (sortBy) => {setSortBy(sortBy)}
  const getLimit = (limit) => {setLimit(limit)}
  const getCreatedBefore = (createdBefore) => {setCreatedAtBefore(createdBefore)}
  return (
    <>
    <FormFilter 
    onFilter={onFilter} 
    clearForm={clearForm} 
    setCreatedAtAfter={getCreatedAfter}
    setCreatedAtBefore={getCreatedBefore}
    setLimit={getLimit}
    setSortBy={getSortBy}    
    />    
    </>
  );
}

export default FilterDays;