import CreateRoom from 'components/create-room/CreateRoom';
import Home from 'components/home/Home';
import MyRoom from 'components/my-room/MyRoom';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
function Router() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/create_room' element={<CreateRoom />} />
      <Route path='/my_room' element={<MyRoom />} />

      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default Router;
