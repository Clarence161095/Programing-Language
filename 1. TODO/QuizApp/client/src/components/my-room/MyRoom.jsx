/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const MyRoom = () => {
  const { roomCode } = useLocation();

  useEffect(() => {
    console.log('roomCode :>> ', roomCode);
  }, []);

  return <div>My Room</div>;
};

export default MyRoom;
