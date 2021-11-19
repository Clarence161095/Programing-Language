import Dashboard from 'features/dashboard/Dashboard';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="*" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;