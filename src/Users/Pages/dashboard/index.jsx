import { Menu, Layout, Card, theme } from 'antd';
import MenuDashboard from './sideBar';
import ContentDashboard from './content';
import { WaterMark } from '@ant-design/pro-components';
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <Layout hasSider className='site-layout' 
    style={{
      background: colorBgContainer
    }}>

      <Sider>
          <MenuDashboard />
      </Sider>
          
      <Layout 
      className='site-layout'
        style={{
          margin: '0 16px ',
          position :'relative',
          top: 20,
          bottom: 0
          
        }}>
        <Content>
            <ContentDashboard />
          
        </Content>
      </Layout>
    </Layout>
    </>
  )

};
export default Dashboard;