import { useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../../../api';
import { Form, FloatButton, Typography, Card } from 'antd';
import FilterData from '../../../Component/User/FilterData/index';
import Data from '../../../Component/Data/User/index';

function Profile() {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalUsersData, setTotalUsers] = useState(null);
  const [form] = Form.useForm();;
  const dateNow = new Date();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const response = await axiosInstance.get(`/users?page=1&limit=30&sortBy=createdAt&createdAtBefore=${dateNow}&createdAtAfter=2023-01-01`);
    setGridData(response.data.users);
    setTotalUsers(response.data.totalUsers);
    setLoading(false);
  };

  const modifiedData = gridData.map((item) => ({
    ...item,
    key: item._id
  }));

  const getDataFilter = (filterData) => { setGridData(filterData) };
  const getTotalUsers = (limitUsers) => { setTotalUsers(limitUsers) };

  return (
    <>
    <Card
    style={{
      borderRadius: '25px'
    }}
    >    
      <FilterData onFilterData={getDataFilter} filterUsersData={getTotalUsers}
      />
      <div>
        <Typography.Title
          level={5}
          style={{
            margin: '0 17px',
          }}
        >
          Total Users : {totalUsersData}
        </Typography.Title>
        <div
          style={{
            marginTop: 0
          }}
        >
          <Data
            pagination={true}
            modifiedData={modifiedData}
            loading={loading}
            loadData={loadData}
            scrollData={{
              x: 1700,
              y: 348,
            }}
          />
        </div>
      </div>
      </Card>
    </>
  );
}

export default Profile;