/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './CreateRoom.scss';
import { Input, Space, Typography } from 'antd';

const { Title } = Typography;

const CreateRoom = () => {
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(
      process.env.REACT_APP_API_URL || 'http://localhost:9000',
      {
        transports: ['websocket'],
      },
    );
  }, []);
  return (
    <Space direction='vertical' className='create_room'>
      <Title style={{ color: '#fff' }}>Create Room</Title>
      <Input placeholder='Enter Room Name...' />
    </Space>
  );
};

export default CreateRoom;
