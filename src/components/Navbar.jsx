import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Navbar = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <nav className="items-center grid grid-cols-2 md:grid-cols-4 px-[6%] py-4">
      <div className="">
        <NavLink to="/">
          <a className="text-3xl font-bold">React App</a>
        </NavLink>
      </div>
      <div className="hidden md:flex md:justify-evenly md:col-span-2">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/kittens">Kittens</NavLink>
        <NavLink to="/resources">Resources</NavLink>
      </div>
      <div className="hidden md:flex md:justify-end">
        <NavLink
          className="btn bg-[deeppink] border-[deeppink] hover:border-[hotpink] hover:bg-[hotpink] hover:text-white"
          to="/contact"
        >
          Contact us
        </NavLink>
      </div>
      <div className="flex justify-end md:hidden">
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
        <Sidebar />
      </div>
    </nav>
  );
};
export default Navbar;
