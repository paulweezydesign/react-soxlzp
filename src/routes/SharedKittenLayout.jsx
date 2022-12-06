import { Outlet } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <>
      <h2 className="text-6xl md:text-7xl font-black text-center">
        Let the cuteness begin..
      </h2>
      <Outlet />
    </>
  );
};
export default Home;
