import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { axiosInstance } from '../../../api';
import { isAuthenticated, setAuthToken } from '../../../Context/action';
import Data from '../../../Component/Data/User/index';

function UserProfile() {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  const id = userId;
  useEffect(() => {
    loadData()
  }, []);

  const loadData = async () => {
    if (isAuthenticated) {
      setAuthToken(token);
      setLoading(true);
      axiosInstance.get(`/users/${id}`)
        .then((response) => {
          setGridData(response.data);
          setLoading(false);
        })
    }
  };

  const modifiedData = gridData.map((item) => ({
    ...item,
    key: item._id
  }));
  return ( 
        <Data
          loadData={loadData}
          pagination={false}
          modifiedData={modifiedData}
          loading={loading} 
          scrollData={{
            x: 0,
          }}   
        />
  );
}

export default UserProfile;