import { Card, FloatButton, Modal, Space } from 'antd';
import { useState } from 'react';
import { axiosInstance } from '../../../api';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import AddDaysOff from '../../../Component/daysOff/AddDayOff/index';
import DataDays from '../../../Component/Data/DaysOff/index';
import DeleteAll from '../../../Component/daysOff/DeleteAll/index';
const UserDaysOff = () => {
  const [request, setRequest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalDaysOff, setTotalDaysOff] = useState(null);
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  const id = userId;
  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    setLoading(true);
    await axiosInstance.get(`/daysOff/${id}`)
      .then((response) => {
        setRequest(response.data);
        setLoading(false);
        setTotalDaysOff(response.data.length)
      })
    };

  const modifiedData = request.map((item) => ({
    ...item,
    key: item._id
  }));

  return (
    <>
      <Card
    style={{
      borderRadius: '25px'
    }}
    >

      <Space.Compact
        size='large'
        style={{
          float: 'right',
          marginBottom: 20
        }}>
        {modifiedData.length >= 1 && <DeleteAll loadData={loadData} />}
        <AddDaysOff loadData={loadData} />
      </Space.Compact>
      <DataDays
        loadData={loadData}
        modifiedData={modifiedData}
        totalDaysOff={totalDaysOff}
        loading={loading}
        scrollData={{
          x: 1700,
          y: 365,
        }}
      />
      </Card>
    </>
  )
}

export default UserDaysOff;
