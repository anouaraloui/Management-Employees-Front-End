import { Layout, Menu, theme } from 'antd';
import MenuDashboard from '../sideBar/index';
import ContentDashboard from '../content/index';
const { Content, Sider } = Layout;

const LayoutApp = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
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

          <Content style={{
            margin: '23px 16px 0',
            minWidth: '1000px'
          }}>
            <div
              style={{
                padding: 24,
                minHeight: '96.9vh',
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