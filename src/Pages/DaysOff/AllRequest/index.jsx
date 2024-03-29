import { Card, Modal, Typography } from 'antd';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../../api';
import FilterDays from '../../../Component/daysOff/Filter/index';
import DataDays from '../../../Component/Data/DaysOff/index';
import Details from '../../../Component/daysOff/Details/index'
const AllDaysOff = () => {
  const [request, setRequest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalDaysOff, setTotalDaysOff] = useState(null);
  const dateNow = new Date();
  const [isDetails, setIsDetails] = useState(false);
  const [detailUser, setDetailsUser] = useState([]);
  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    setLoading(true);
    await axiosInstance.get(`/daysOff?page=1&limit=100&sortBy=createdAt&createdAtBefore=${dateNow}&createdAtAfter=2023-01-01`)
      .then((response) => {
        setRequest(response.data.daysOff);
        setLoading(false);
        setTotalDaysOff(response.data.totalDaysOff);
      }).catch((error) => console.log("error :", error));
  };
  const modifiedData = request.map((item) => ({
    ...item,
    key: item._id
  }));
  const getDataFilter = (filterData) => { setRequest(filterData) };
  const getTotalDays = (limitDays) => { setTotalDaysOff(limitDays) };

  const onDetails = async (record) => {
    setIsDetails(true);
    const id = record.userId;
    axiosInstance.get(`/users/${id}`)
      .then((response) => {
        setDetailsUser(response.data);
      })
  };
  const resetEditing = () => {
    setIsDetails(false);
    setDetailsUser(null);
  };

  return (
    <>
      <Card
    style={{
      borderRadius: '25px'
    }}
    >
      <FilterDays onFilterData={getDataFilter} filterDays={getTotalDays} />
      <div>
        <Typography.Title
          level={5}
          style={{
            margin: '0 17px',
          }}
        >
          Total Days Off: {totalDaysOff}
        </Typography.Title>
        <div
          style={{
            marginTop: 0
          }}
        >
          <DataDays
            loadData={loadData}
            modifiedData={modifiedData}
            totalDaysOff={totalDaysOff}
            loading={loading}
            onDetails={onDetails}
            scrollData={{
              x: 1700,
              y: 365,
            }}
          />
        </div>
      </div>      
      </Card> 
      <Modal
        style={{
          maxWidth: 400,
        }}
        title="Details User"
        open={isDetails}
        okText="Ok"
        onCancel={() => {
          resetEditing();
          setDetailsUser([])
        }}
        onOk={() => {
          resetEditing();
          setDetailsUser([])
        }}
      >
        <Details
          firstName={detailUser.map((firstName) => firstName.firstName)}
          lastName={detailUser.map((lastName) => lastName.lastName)}
          role={detailUser.map((role) => role.role)}
          building={detailUser.map((building) => building.building[0])}
          email={detailUser.map((email) => email.email)}
          daysOff={detailUser.map((allDaysOff) => allDaysOff.allDaysOff)}
          sick={detailUser.map((sick) => sick.daysOffSick)}
          balanceDays={detailUser.map((soldeDays) => soldeDays.balanceDays)}
        />
      </Modal>
    </>
  )
}

export default AllDaysOff;