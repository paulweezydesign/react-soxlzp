import React from 'react';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';

import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />

      <Outlet />
      <Modal />
    </>
  );
}

export default App;
