/* eslint-disable react-hooks/exhaustive-deps */
import { Input, Table } from 'antd';
import useInputText from 'hooks/useInputTex';
import React, { useEffect, useState } from 'react';
import './TablePaginate.scss'

const stateInitializer = {
  data: [],
  pagination: {},
  loading: false,
}

const scroll = {
  x: 'true',
  y: '100%',
}

function TablePaginate({ columns, fetchApi, keyRecord }: any) {
  const [state, setState] = useState(stateInitializer)
  const keySearch = useInputText('')
  const [params, setParams] = useState({})
  const { data, pagination, loading } = state;

  const fetch = async (params: any = null) => {
    setState({ ...state, loading: true })
    const dataFromDB = await fetchApi(params ? params : { ...params })
    if (dataFromDB) {
      setState({
        loading: false,
        data: dataFromDB['docs'],
        pagination: {
          pageSize: dataFromDB['limit'],
          current: dataFromDB['page'],
          total: dataFromDB['totalDocs'],
          showQuickJumper: true,
          showSizeChanger: true,
          position: ['bottomRight'],
        }
      })
    }
  }

  useEffect(() => {
    fetch({ ...params })
  }, [params])

  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    setParams({
      ...params,
      page: pagination['current'] ? pagination['current'] : 1,
      limit: pagination['pageSize'] ? pagination['pageSize'] : 10,
      order: sorter['order'] ? sorter['order'] : null,
      field: sorter['field'] ? sorter['field'] : keyRecord,
      keySearch: keySearch.value,
    })
  }

  const handleSearch = (value: any) => {
    setParams({
      ...params,
      keySearch: keySearch.value,
    })
  }

  return (
    <div className="tablePaginate">
      <Table
        columns={columns}
        title={() =>
          <Input.Search value={keySearch.value} onChange={keySearch.onChange} placeholder="Search or filter by the key...." loading={loading} size="large" onSearch={handleSearch} />
        }
        rowKey={record => record[keyRecord]}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        bordered={true}
        scroll={scroll}
        onChange={handleTableChange}
      />
    </div>
  );
}

export default TablePaginate;