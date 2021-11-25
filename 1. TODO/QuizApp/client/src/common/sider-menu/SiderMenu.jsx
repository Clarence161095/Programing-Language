/* eslint-disable react-hooks/exhaustive-deps */
import {
  CommentOutlined,
  HomeOutlined,
  LogoutOutlined,
  VideoCameraAddOutlined,
} from '@ant-design/icons';
import {
  Button,
  Image,
  Layout,
  Menu,
  Popconfirm,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import { IsSignedIn, UserState } from 'common/states/SiderMenuState';
import CheckLogin, { SetLocalUser } from 'common/utils/CheckLogin';
import auth, { firebase } from 'common/utils/FirebaseConfig';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import './SiderMenu.scss';

const { Sider } = Layout;
const { Title, Text } = Typography;

const { SubMenu } = Menu;

var provider = new firebase.auth.GoogleAuthProvider();

function SiderMenu() {
  const location = useLocation();
  let navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const [activeMenu, setActiveMenu] = useState('home');
  const [isSignedIn, setIsSignedIn] = useRecoilState(IsSignedIn);
  const [localUser, setUser] = useRecoilState(UserState);

  CheckLogin();

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
    setActiveMenu(key);
  };

  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then(async (result) => {
        setIsSignedIn(true);
        setUser(await SetLocalUser(result.user, result.token));
        navigate('/home');
      })
      .catch((error) => {
        // TODO Login failed.
        console.log(`error`, error);
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    auth.signOut();
    setIsSignedIn(false);
    setActiveMenu('home');
    navigate('/home');
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
    <Sider
      className='sider_menu'
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}>
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
      {collapsed && (
        <Space direction='vertical' align='center' style={{ width: '100%' }}>
          {isSignedIn && localUser && (
            <Image
              style={{
                borderRadius: '50%',
                maxWidth: '40px',
                cursor: 'pointer',
              }}
              onClick={onCollapse}
              src={localUser.photoURL}
              preview={false}
            />
          )}
          {!isSignedIn && (
            <Button type='default' shape='round' onClick={handleLogin}>
              Login
            </Button>
          )}
        </Space>
      )}

      {!collapsed && (
        <Space direction='vertical' align='center' style={{ width: '100%' }}>
          {isSignedIn && localUser && (
            <Space
              direction='baseline'
              align='center'
              style={{ width: '100%' }}>
              <Image
                style={{
                  borderRadius: '50%',
                  maxWidth: '40px',
                  cursor: 'pointer',
                }}
                onClick={onCollapse}
                src={localUser.photoURL}
                preview={false}
              />
              <Text
                style={{ width: '90px', color: 'white' }}
                ellipsis={{ tooltip: localUser.displayName }}>
                {localUser.displayName}
              </Text>
              <Tooltip title='Logout' placement='right'>
                <Popconfirm
                  placement='bottom'
                  title='Do you want to sign out?'
                  onConfirm={handleLogout}
                  okText='Yes'
                  cancelText='No'>
                  <LogoutOutlined
                    style={{ fontSize: '25px' }}
                    className='sider_menu-logout'
                  />
                </Popconfirm>
              </Tooltip>
            </Space>
          )}
          {!isSignedIn && (
            <Button type='default' shape='round' onClick={handleLogin}>
              Login
            </Button>
          )}
        </Space>
      )}

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
