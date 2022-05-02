/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
	AliwangwangOutlined,
	AppstoreAddOutlined,
	ExpandOutlined,
	HomeOutlined,
	IdcardOutlined,
	LoginOutlined,
	LogoutOutlined,
	TeamOutlined,
	WechatOutlined
} from '@ant-design/icons';
import {
	Button,
	Image,
	Layout,
	Menu,
	Popconfirm,
	Space,
	Tooltip,
	Typography
} from 'antd';
import firebase from 'firebase/config';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import UserState, { IsSignedIn, Role } from 'store/UserState';
import CheckLogin, { SetLocalUser, SetRole } from 'utils/CheckLogin';
import LocalStorageService from 'utils/LocalStorageService';
import DashboardRouter from '../../routers/DashboardRouter';
import './Dashboard.scss';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

var provider = new firebase.auth.GoogleAuthProvider();

function Dashboard(props: any) {
	let navigate = useNavigate();
	const [isSignedIn, setIsSignedIn] = useRecoilState(IsSignedIn);
	const [localUser, setUser] = useRecoilState(UserState);
	const [role, setRoleState] = useRecoilState(Role);
	const [collapsedLefMenu, setCollapsedLefMenu] = useState(false);
	const [activeMenu, setActiveMenu] = useState('home');

	CheckLogin();

	const menu = [
		{
			key: 'home',
			title: 'Home',
			icon: <HomeOutlined />,
			role: ['admin', 'plus', 'normal'],
			content: () => navigate('/home'),
		},
		{
			subKey: 'admin',
			title: 'Admin',
			icon: <TeamOutlined />,
			role: ['admin'],
			listMenuItem: [
				{
					key: 'manage_user',
					title: 'Manage Users',
					icon: <IdcardOutlined />,
					role: ['admin'],
					content: () => navigate('/user'),
				},
			],
		},
		{
			subKey: 'room',
			title: 'Room',
			icon: <WechatOutlined />,
			role: ['admin', 'plus', 'normal'],
			listMenuItem: [
				{
					key: 'my_room',
					title: 'My Room',
					icon: <AppstoreAddOutlined />,
					role: ['admin', 'plus'],
					content: () => navigate('/my_room'),
				},
				{
					key: 'join_room',
					title: 'Join Room',
					icon: <ExpandOutlined />,
					role: ['admin', 'plus', 'normal'],
					content: () => navigate('/join_room'),
				},
			],
		},
		{
			subKey: 'quiz',
			title: 'Quiz',
			icon: <AliwangwangOutlined />,
			role: ['admin', 'plus'],
			listMenuItem: [
				{
					key: 'create_quiz',
					title: 'Create Quiz',
					icon: <AppstoreAddOutlined />,
					role: ['admin'],
					content: () => navigate('/create_quiz'),
				},
			],
		},
	];

	const onCollapseLefMenu = () => {
		setCollapsedLefMenu(!collapsedLefMenu);
	};

	const handleLogin = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(async (result: any) => {
				setIsSignedIn(true);
				setUser(await SetLocalUser(result.user, result.token));
				SetRole(setRoleState);
				navigate('/home');
			})
			.catch((error: any) => {
				// TODO Login failed.
				console.log(`error`, error);
			});
	};

	const handleLogout = () => {
		LocalStorageService.removeLogin();
		localStorage.clear();
		firebase.auth().signOut();
		setIsSignedIn(false);
		setRoleState('normal');
		LocalStorageService.setEncode('active_menu', 'home');
		setActiveMenu('home');
		navigate('/home');
	};

	useEffect(() => {
		const active_menu = LocalStorageService.getDecodeString('active_menu');
		if (active_menu) {
			setActiveMenu(active_menu);
			menu.forEach((menu) => {
				if (menu.listMenuItem) {
					menu.listMenuItem.forEach((item) => {
						if (item.key === active_menu) {
							item.content();
						}
					});
				} else if (menu.key === active_menu) {
					menu.content();
				}
			});
		}
	}, []);

	const handleClickMenu = (fncSetContent: any, key: any) => {
		fncSetContent();
		LocalStorageService.setEncode('active_menu', key);
		setActiveMenu(key);
	};

	const renderMenuItem = (item: any) => {
		if (item.role.includes(role)) {
			return (
				<Menu.Item
					key={item.key}
					icon={item.icon}
					onClick={() => handleClickMenu(item.content, item.key)}>
					{item.title}
				</Menu.Item>
			);
		}
	};

	const renderSubMenu = (subMenu: any) => {
		if (subMenu.role.includes(role)) {
			return (
				<SubMenu key={subMenu.subKey} icon={subMenu.icon} title={subMenu.title}>
					{subMenu.listMenuItem.map((item: any) => renderMenuItem(item))}
				</SubMenu>
			);
		}
	};

	return (
		<div className='dashboard'>
			<Layout>
				<Sider
					className='dashboard_desktop'
					collapsible
					collapsed={collapsedLefMenu}
					onCollapse={onCollapseLefMenu}>
					{!collapsedLefMenu && (
						<Title level={2} className='dashboard_desktop_logo'>
							Quiz App
						</Title>
					)}
					{collapsedLefMenu && (
						<div className='dashboard_desktop_avatar'>
							<Title level={4} className='dashboard_desktop_logo--mini'>
								Quiz
							</Title>
							<Image
								className='dashboard_desktop_avatar--single'
								onClick={onCollapseLefMenu}
								src={localUser.photoURL}
								preview={false}
							/>
							{!isSignedIn && (
								<Button
									type='default'
									shape='round'
									onClick={handleLogin}
									className='dashboard_desktop_buttonLogin'>
									Login
								</Button>
							)}
						</div>
					)}

					{!collapsedLefMenu && (
						<div className='dashboard_desktop_login'>
							{!isSignedIn && (
								<Button
									type='default'
									shape='round'
									icon={<LoginOutlined twoToneColor='#52c41a' />}
									onClick={handleLogin}
									className='dashboard_desktop_buttonLogin'>
									Login
								</Button>
							)}

							{isSignedIn && localUser && (
								<div className='dashboard_desktop_login_info'>
									<Space size='middle'>
										<Image
											onClick={onCollapseLefMenu}
											src={localUser.photoURL}
											preview={false}
										/>
										<Text
											style={{ maxWidth: '80px', color: 'white' }}
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
													className='dashboard_desktop_login_info_logout'
													style={{ fontSize: '25px' }}
												/>
											</Popconfirm>
										</Tooltip>
									</Space>
								</div>
							)}
						</div>
					)}

					<Menu
						theme='dark'
						defaultSelectedKeys={[activeMenu]}
						selectedKeys={[activeMenu]}
						mode='inline'>
						{menu.map((item: any) => {
							if (item.subKey) {
								return renderSubMenu(item);
							} else {
								return renderMenuItem(item);
							}
						})}
					</Menu>
				</Sider>

				<Layout className='dashboard_mobile'>
					<Header>
						<Title level={2} className='dashboard_mobile_logo'>
							Quiz
						</Title>

						<div className='dashboard_mobile_login'>
							{!isSignedIn && (
								<Button
									type='default'
									shape='round'
									style={{ padding: '3px 8px 3px 8px' }}
									onClick={handleLogin}>
									Login
								</Button>
							)}
							{isSignedIn && localUser && (
								<div className='dashboard_mobile_login_info'>
									<Popconfirm
										placement='bottom'
										title='Do you want to sign out?'
										onConfirm={handleLogout}
										okText='Yes'
										cancelText='No'>
										<Image src={localUser.photoURL} preview={false} />
									</Popconfirm>
								</div>
							)}
						</div>

						<Menu
							theme='dark'
							defaultSelectedKeys={[activeMenu]}
							selectedKeys={[activeMenu]}
							mode='horizontal'>
							{menu.map((item: any) => {
								if (item.subKey) {
									return renderSubMenu(item);
								} else {
									return renderMenuItem(item);
								}
							})}
						</Menu>
					</Header>
				</Layout>

				<Layout className='dashboard_content'>
					<Content className='site-layout-background'>
						<DashboardRouter />
					</Content>
				</Layout>
			</Layout>
		</div>
	);
}

export default Dashboard;
