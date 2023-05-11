import { UserAddOutlined, PoweroffOutlined, UserOutlined, DashboardOutlined, UsergroupDeleteOutlined, BellOutlined, CalendarOutlined }
from '@ant-design/icons';
import { Layout, Menu, Switch, notification } from 'antd';
import Sider from 'antd/es/layout/Sider';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../Context/action';

const MenuDashboard = () => {
  //const [collapsed, setCollapsed] = useState(false);collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
  const [theme, setTheme] = useState('dark')
  const changeTheme = (items) => {
    setTheme(items ? 'dark' : 'light')
  }
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
  return (

    <Sider
     style={{
      overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,

    }}
    theme={theme}
    >
      <div

        style={{
          height: 32,
          margin: 16,
        }}
      >
        <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
          style={{ backgroundColor: '#002140' }}
        />
      </div>
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
            return handleLogout()
          } else {
            history(key)
          }
        }}
        items={[
          { label: 'Dashboard ', key:"/dashboard",icon: <DashboardOutlined /> },
          { label: 'Profile', key: `/dashboard/users/${id}`, icon: <UserOutlined /> },
          { label: 'Employees', key: "/dashboard/users", icon: <UsergroupDeleteOutlined /> },
          { label: 'New Employee', key: "/dashboard/users/created", icon:<UserAddOutlined /> },
          { label: 'Requests', key: "/dashboard/request", icon: <CalendarOutlined /> },
          { label: 'Notifications', key: "/dashboard/notification", icon: <BellOutlined /> },
          { label: 'Sign out', key: "signout", icon: <PoweroffOutlined />, danger: true }
        ]}
        theme={theme}

      >

      </Menu>
    </Sider>
  )
};
export default MenuDashboard;