import { FloatButton, Modal, Space } from 'antd';
import { useState } from 'react';
import { axiosInstance } from '../../../api';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import AddDaysOff from '../../../Component/daysOff/AddDayOff/index';
import DataDays from '../../../Component/Data/DaysOff/index';
import DeleteAll from '../../../Component/daysOff/DeleteAll/index'
const UserDaysOff = () => {
  const [request, setRequest] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalDaysOff, setTotalDaysOff] = useState(null)
  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token)
  const userId = decodedToken.userId
  const id = userId
  console.log('id : ', id);
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    await axiosInstance.get(`/daysOff/${id}`)
      .then((response) => {
        console.log('response :', response);
        setRequest(response.data)
        setLoading(false)
        setTotalDaysOff(response.data.length)
      })
  };

  const modifiedData = request.map((item) => ({
    ...item,
    key: item._id
  }));

  return (
    <>
      <FloatButton.BackTop />
      <Space.Compact
        size='large'
        style={{
          float: 'right'
        }}>
        {modifiedData.length >= 1 && <DeleteAll loadData={loadData} />}
        <AddDaysOff loadData={loadData} />
      </Space.Compact>
      <DataDays
        loadData={loadData}
        modifiedData={modifiedData}
        totalDaysOff={totalDaysOff}
        loading={loading}
      />
    </>
  )
}

export default UserDaysOff;
