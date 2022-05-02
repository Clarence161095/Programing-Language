/* eslint-disable react-hooks/exhaustive-deps */
import {
	DeleteOutlined,
	EditOutlined,
	ExclamationCircleOutlined
} from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Input, Modal, Select, Space } from 'antd';
import UserApi from 'api/UserApi';
import TablePaginate from 'components/elements/table-paginate/TablePaginate';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import './User.scss';

const schema = yup
	.object({
		role: yup.string().required(),
	})
	.required();

const roleOption = [
	{ value: 'admin', label: 'admin' },
	{ value: 'plus', label: 'plus' },
	{ value: 'normal', label: 'normal' },
];

function User(props: any) {
	const [visible, setVisible] = useState(false);
	const [confirmModalLoading, setConfirmModalLoading] = useState(false);
	const [selectedName, setSelectedName] = useState('Name');
	const [selectedEmail, setSelectedEmail] = useState('Email');
	const [selectedUid, setSelectedUid] = useState('uid');
	const [selectedRole, setSelectedRole] = useState('normal');
	let fetchTablePaginate = () => {};

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const columns = [
		{
			title: 'Name',
			dataIndex: 'displayName',
			sorter: true,
			width: '25%',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			sorter: true,
		},
		{
			title: 'Role',
			dataIndex: 'role',
			width: '15%',
			sorter: true,
		},
		{
			title: '',
			key: 'action',
			width: '15%',
			render: (record: any) => (
				<Space size='small'>
					<Button
						type='dashed'
						icon={<EditOutlined />}
						onClick={() => handleEditUser(record)}>
						Edit
					</Button>
					<Button
						type='dashed'
						icon={<DeleteOutlined />}
						onClick={() => handleDeleteUser(record)}
						danger>
						Delete
					</Button>
				</Space>
			),
		},
	];

	const handleSelectRole = (data: any) => {
		setSelectedRole(data);
	};

	const handleEditUser = (user: any) => {
		setVisible(true);
		setSelectedRole(user['role']);
		setSelectedName(user['displayName']);
		setSelectedEmail(user['email']);
		setSelectedUid(user['_id']);
	};

	const showDeleteConfirm = (_id: any) => {
		Modal.confirm({
			title: 'Are you sure delete this user?',
			icon: <ExclamationCircleOutlined />,
			content: `Currently, there is no function to add a new user.
      Creating a new user is completely automatic.
      If you want to create a new user, just log in with that Google account (the system will automatically create a new account).`,
			okText: 'Yes',
			okType: 'danger',
			cancelText: 'No',
			async onOk() {
				await UserApi.deleteUser({ _id: _id });
				fetchTablePaginate();
			},
		});
	};

	const handleDeleteUser = (user: any) => {
		setSelectedUid(user['_id']);
		showDeleteConfirm(user['_id']);
	};

	const handleOkModal = () => {
		handleSubmit(onSubmit);
	};

	const handleCancelModal = () => {
		setVisible(false);
	};

	const onSubmit = async (data: any) => {
		setConfirmModalLoading(true);
		await UserApi.updateUser({ _id: selectedUid, ...data });
		setVisible(false);
		setConfirmModalLoading(false);
		fetchTablePaginate();
	};

	const reRender = (fetch: any) => {
		fetchTablePaginate = fetch;
	};

	return (
		<div className='home'>
			<h1>Manage Users</h1>
			<TablePaginate
				columns={columns}
				fetchApi={UserApi.getUser}
				keyRecord={'email'}
				reRender={reRender}
			/>

			<Modal
				title='Edit Users'
				visible={visible}
				onOk={handleOkModal}
				confirmLoading={confirmModalLoading}
				onCancel={handleCancelModal}
				destroyOnClose={true}
				footer={[
					<Button key='cancel' onClick={handleCancelModal}>
						Cancel
					</Button>,
					<Button
						key='submit'
						htmlType='submit'
						form='edit_user_form'
						type='primary'
						loading={confirmModalLoading}
						onClick={handleOkModal}>
						Update
					</Button>,
				]}>
				<Form
					id='edit_user_form'
					preserve={false}
					onFinish={handleSubmit(onSubmit)}>
					<Controller
						name='role'
						control={control}
						render={({ field }) => (
							<Space direction='vertical' style={{ width: '100%' }}>
								<Input size='large' value={selectedName} disabled />
								<Input size='large' value={selectedEmail} disabled />
								<Select
									{...field}
									size='large'
									style={{ width: '100%' }}
									options={roleOption}
									value={selectedRole}
									onSelect={handleSelectRole}
								/>
							</Space>
						)}
					/>
				</Form>
			</Modal>
		</div>
	);
}

export default User;
