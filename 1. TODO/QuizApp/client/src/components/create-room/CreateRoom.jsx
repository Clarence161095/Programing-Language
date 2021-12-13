/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Input, Space, Typography } from 'antd';
import { makeCode } from 'common/utils/utils';
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './CreateRoom.scss';
import { useNavigate } from 'react-router';

const { Title } = Typography;

const CreateRoom = () => {
  let navigate = useNavigate();
  const [roomName, setRoomName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [user, setUser] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(
      process.env.REACT_APP_API_URL || 'http://localhost:9000',
      {
        transports: ['websocket'],
      },
    );

    if (localStorage.getItem('roomName')) {
      setRoomName(localStorage.getItem('roomName'));
    }

    if (localStorage.getItem('roomCode')) {
      setRoomCode(localStorage.getItem('roomCode'));
    }

    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (typeof user === 'object') {
        setUser(user);
      }
      const myRoomID = `my_room_${user.uid}`;
      localStorage.setItem('myRoomID', myRoomID);
      socketRef.current.on(myRoomID, (payload) => {
        if (payload === localStorage.getItem('roomCode')) {
          navigate('/my_room', { roomCode: payload });
        }
      });
    }
  }, []);

  const handleRandomCode = () => {
    const randomCode = makeCode(6);
    setRoomCode(randomCode);
    localStorage.setItem('roomCode', randomCode);
  };

  const handleChangeCode = (e) => {
    const value = e.target.value;
    setRoomCode(value);
    localStorage.setItem('roomCode', value);
  };

  const handleChangeRoomName = (e) => {
    const value = e.target.value;
    setRoomName(value);
    localStorage.setItem('roomName', value);
  };

  const handleCreateRoom = () => {
    if (localStorage.getItem('roomName') && localStorage.getItem('roomCode')) {
      const name = localStorage.getItem('roomName');
      const code = localStorage.getItem('roomCode');
      if (localStorage.getItem('token') && localStorage.getItem('user')) {
        socketRef.current.emit('create_room', {
          roomName: name,
          roomCode: code,
          user: user,
        });
      } else {
        window.alert('You do not have permission to create a room');
      }
    } else {
      window.alert('Name and code of room is required');
    }
  };

  return (
    <Space
      direction='vertical'
      className='create_room'
      style={{ minWidth: '40%' }}>
      <Title style={{ color: '#fff' }}>Create Room</Title>
      <Input
        placeholder='Name of room...'
        value={roomName}
        onChange={handleChangeRoomName}
      />
      <Space>
        <Input
          placeholder='CODE'
          value={roomCode}
          onChange={handleChangeCode}
        />
        <Button onClick={handleRandomCode}>Random</Button>
      </Space>
      <Button onClick={handleCreateRoom}>Create</Button>
    </Space>
  );
};

export default CreateRoom;
