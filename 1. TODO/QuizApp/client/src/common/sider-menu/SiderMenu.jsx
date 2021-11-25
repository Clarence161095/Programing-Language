/* eslint-disable react-hooks/exhaustive-deps */
import {
  CommentOutlined,
  HomeOutlined,
  VideoCameraAddOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const { Sider } = Layout;
const { Title } = Typography;

const { SubMenu } = Menu;

function SiderMenu() {
  const location = useLocation();
  let navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const [activeMenu, setActiveMenu] = useState('home');

  const menu = [
    {
      key: 'home',
      title: 'Home',
      icon: <HomeOutlined />,
      content: () => navigate('/home'),
    },
    {
      subKey: 'room',
      title: 'Room',
      icon: <CommentOutlined />,
      listMenuItem: [
        {
          key: 'create_room',
          title: 'Create Room',
          icon: <VideoCameraAddOutlined />,
          content: () => navigate('/create_room'),
        },
      ],
    },
  ];

  useEffect(() => {
    if (location.pathname.split('/')[1]) {
      setActiveMenu(location.pathname.split('/')[1]);
    }
  }, []);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleClickMenu = (fncSetContent, key) => {
    fncSetContent();
    localStorage.setItem('active_menu', key);
    setActiveMenu(key);
  };

  const renderMenuItem = (item) => {
    return (
      <Menu.Item
        key={item.key}
        icon={item.icon}
        onClick={() => handleClickMenu(item.content, item.key)}>
        {item.title}
      </Menu.Item>
    );
  };

  const renderSubMenu = (subMenu) => {
    return (
      <SubMenu key={subMenu.subKey} icon={subMenu.icon} title={subMenu.title}>
        {subMenu.listMenuItem.map((item) => renderMenuItem(item))}
      </SubMenu>
    );
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Title
        style={{
          color: '#fff',
          textAlign: 'center',
          padding: '5px',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/home')}
        level={collapsed ? 3 : 1}>
        Quiz
      </Title>
      <Menu
        theme='dark'
        defaultSelectedKeys={[activeMenu]}
        selectedKeys={[activeMenu]}
        mode='inline'>
        {menu.map((item) => {
          if (item.subKey) {
            return renderSubMenu(item);
          } else {
            return renderMenuItem(item);
          }
        })}
      </Menu>
    </Sider>
  );
}

export default SiderMenu;
