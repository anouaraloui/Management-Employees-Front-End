import { FileOutlined,  UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, notification } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Context/action'

const Dashboard = () => {
 const history = useNavigate()


  
  const handleLogout = async (e) => {
    e.preventDefault();
    if(logout()) {
        notification.success({
          placement: 'top',
          bottom: 50,
          duration: 1,
          message: `User logout`
        });
      
       setTimeout(() => {
          history('/')
          // document.location.reload(true)
      }, 1000);
       
    }
}

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('User', 'sub1', <UserOutlined />),
  getItem('Files', '9', <FileOutlined />),
  getItem( <span   onClick={handleLogout} ><span><LogoutOutlined style={{marginRight: 6}}/>  Log out</span> </span> )
];

     

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
            items={[
              {
                title: 'User',
              }
            ]}
          >
           
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
           
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Anouar Aloui
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;