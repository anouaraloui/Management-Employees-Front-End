import { PlusCircleOutlined, UserAddOutlined, PoweroffOutlined, UserOutlined, DashboardOutlined, UsergroupDeleteOutlined, BellOutlined, CalendarOutlined, ScheduleOutlined }
  from '@ant-design/icons';
import { Layout, Menu, Switch, notification } from 'antd';
import Sider from 'antd/es/layout/Sider';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../Context/action';
import './sideBar.css'
const MenuDashboard = () => {
  //const [collapsed, setCollapsed] = useState(false);collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
  
  const handleLogout = async (e) => {
    if (logout()) {
      notification.success({
        placement: 'top',
        bottom: 50,
        duration: 1,
        message: `User logout`
      });

      setTimeout(() => {
        history('/')
      }, 1000);

    }
  }
  useEffect(() => {
    const event = (e) => {
      e.preventDefault();
      handleLogout()
    }
  }, [])
  const history = useNavigate()
  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token)
  const userId = decodedToken.userId
  const id = userId
  const role = decodedToken.role
  console.log('role :', role);
  const  itemsAdmin= [
    { label: 'Dashboard ', key: "/dashboard", icon: <DashboardOutlined /> },
    { label: 'Profile', key: `/dashboard/users/profile/${id}`, icon: <UserOutlined /> },
    { label: 'Employees', key: "/dashboard/users", icon: <UsergroupDeleteOutlined /> },
    { label: 'New Employee', key: "/dashboard/users/created", icon: <UserAddOutlined /> },
    { label: 'All Request', key: "/dashboard/listDays", icon: <ScheduleOutlined /> },    
    { label: 'Days Off User', key: `/dashboard/dayoffUser/${id}`, icon: <CalendarOutlined /> },
    { label: 'Sign out', key: "signout", icon: <PoweroffOutlined />, danger: true }
  ]
  const  itemsUser= [
    { label: 'Profile', key: `/dashboard/users/profile/${id}`, icon: <UserOutlined /> },
    { label: 'All Request', key: "/dashboard/listDays", icon: <ScheduleOutlined /> },
    { label: 'Days Off User', key: `/dashboard/dayoffUser/${id}`, icon: <CalendarOutlined /> },
    { label: 'Sign out', key: "signout", icon: <PoweroffOutlined />, danger: true }
  ] 

  return (
      <Menu
      onClick={({ key }) => {
        if (key === "signout") {
          return handleLogout()
        } else {
          history(key)
        }
      }}
      items={ role === 'Super Admin' ? itemsAdmin : itemsUser }
      theme= "dark"
      mode="inline"
     
      
    /> 
  )
};
export default MenuDashboard;