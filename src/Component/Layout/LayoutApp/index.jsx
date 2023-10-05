import { Layout, Menu } from 'antd';
import MenuDashboard from '../sideBar/index';
import ContentDashboard from '../content/index';
import './index.css'
const { Content, Sider } = Layout;

const LayoutApp = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <>
      <Layout className='layout'>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }} 
          style={{
            minHeight: '100vh'
          }}         
          >
          <Menu >
            <MenuDashboard />
          </Menu>
        </Sider>

        <Layout className='container'>
          <Content style={{
            margin: '30px 0',
          }}>
            <div
              style={{
                padding: 10,
                // minHeight: '92vh',
                background: 'rgb(241, 245, 249)',
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