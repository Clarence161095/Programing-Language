/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Space } from 'antd';
import PaginateApi from 'api/PaginateApi';
import TablePaginate from 'components/elements/table-paginate/TablePaginate';
import React from 'react';
import './User.scss';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '25%'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: true,
    width: '25%'
  },
  {
    title: 'Body',
    dataIndex: 'body',
  },
  {
    title: '',
    key: 'action',
    width: '15%',
    render: (record: any) => (
      <Space size="middle">
        <Button
          onClick={() => window.alert(record.email)}
        >Edit</Button>
        <Button >Delete</Button>
      </Space>
    ),
  }
]

function User(props: any) {

  return (
    <div className="home">
      <TablePaginate
        columns={columns}
        fetchApi={PaginateApi.get}
        keyRecord={'email'}
      />
    </div>
  );
}

export default User;