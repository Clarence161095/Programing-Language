import { Layout } from 'antd';
import Router from 'common/routers/Router';
import SiderMenu from 'common/sider-menu/SiderMenu';
import './App.scss';

const { Content } = Layout;

function App() {
  return (
    <div className='app'>
      <Layout>
        <SiderMenu />
        <Layout className='site-layout'>
          <Content className='app-content'>
            <Router />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
