import { Layout, Menu, theme } from 'antd';
import MenuDashboard from '../sideBar/index';
import ContentDashboard from '../content/index';
import './layout.css'
const { Header, Content, Footer, Sider } = Layout;

const LayoutApp = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      {/* <Layout hasSider className='site-layout' 
    style={{
      background: colorBgContainer
    }}>
      <Sider className='siderMenu'>
      </Sider>
          
      <Layout 
      className='site-layout'
        style={{
          position :'relative',
          top: 20,
          bottom: 0
          
        }}>
        <Content>
            <ContentDashboard />          
        </Content>
      </Layout>
    </Layout> */}

      <Layout >
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          
          >
          <Menu>
            <MenuDashboard />
          </Menu>
        </Sider>

        <Layout>
          <Header style={{
            padding: 0,
            background: colorBgContainer,
          }} />
          <Content style={{
            margin: '24px 16px 0',
          }}>
            <div
              style={{
                padding: 24,
                minHeight: '100vh',
                minWidth: '360px',
                background: colorBgContainer,
              }}
            >
              <ContentDashboard />
            </div>

          </Content>
        </Layout>
      </Layout>

    </>

  )

};
export default LayoutApp;