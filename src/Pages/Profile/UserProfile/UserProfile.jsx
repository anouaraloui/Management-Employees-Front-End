import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { axiosInstance } from '../../../api';
import { isAuthenticated, setAuthToken } from '../../../Context/action';
import Data from '../../../Component/Data/User/index';
import { Card } from 'antd';

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
      setAuthToken(token)
      console.log('token', token);
      setLoading(true)
      axiosInstance.get(`/users/${id}`)
        .then((response) => {
          console.log('respons', response.data);
          setGridData(response.data);
          setLoading(false)
        })
    }
  };

  const modifiedData = gridData.map((item) => ({
    ...item,
    key: item._id
  }));
  return (
    <div >
      
        <Data
          loadData={loadData}
          pagination={false}
          modifiedData={modifiedData}
          loading={loading} 
          scrollData={{
            x: 0,
          }}   
        />
    
      {/* <Card
    style={{
      width: 320,
      margin: 'auto'
    }}
    cover={
      <img
        alt="profile picture"
        src={gridData.map(avatar=> avatar.profile)}
      />
    }
    actions={
      [
        
        <EditOutlined key="edit" onClick={handleClick}/>
      ]
    
  }

    extra={<UpdateUser
      record={gridData}
      loadData={loadData}
    />}
    
  >
    
    <Meta
      avatar={<img src={ gridData.map(profile=> profile.profile)} style={{
          backgroundColor: '#f56a00',
          width: 60
        }}
           /> }
      title={gridData.map(name=> `${name.firstName} ${name.lastName}` )}
      
    />
  
    <table>
  <tr>
    <td>Email</td>
    <td>{gridData.map(email=> email.email)}</td>
  </tr>
  <tr>
    <td>Role</td>
    <td>{gridData.map(role=> role.role)}</td>
  </tr>
  <tr>
    <td>Building</td>
    <td>{gridData.map(building=> building.building)}</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>{gridData.map(phone=> phone.phone)}</td>
  </tr>
  <tr>
    <td>Days Off</td>
    <td>{gridData.map(allDaysOff=> allDaysOff.allDaysOff)}</td>
  </tr>
  <tr>
    <td>Sick</td>
    <td>{gridData.map(daysOffSick=> daysOffSick.daysOffSick)}</td>
  </tr>
  <tr>
    <td>Status</td>
    <td>{gridData.map(isActive=> { 
      return <span>{isActive.isActive ? 'Active' : 'Disable'}</span>
      })}</td>
  </tr>
  <tr>
  <UpdateUser
      record={gridData}
      loadData={loadData}
    />
  </tr>
</table>

  </Card> */}
  
    </div>
  );
}

export default UserProfile;