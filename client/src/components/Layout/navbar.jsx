import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar rounded-full mx-auto text-white w-[98%] text-2xl h-[50px] bg-orange-500 mt-4 px-8 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
          <li><Link to="/about" className='btn btn-ghost px-5'>About</Link></li>
          <li>
            <Link to="/domains" className='btn btn-ghost px-5'>Domains</Link>
          </li>
          <li><Link to="/mentor" className='btn btn-ghost px-5'>Mentor</Link></li>
          <li><Link to="/contacts" className='btn btn-ghost px-5'>Contacts</Link></li>
          <li><Link to="/faq" className='btn btn-ghost px-5'>FAQ</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">mentorConnect</Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal gap-5">
          <li><Link to="/about" className='btn btn-ghost px-5'>About</Link></li>
          <li>
            <Link to="/domains" className='btn btn-ghost px-5'>Domains</Link>
          </li>
          <li><Link to="/mentor" className='btn btn-ghost px-5'>Mentor</Link></li>
          <li><Link to="/contacts" className='btn btn-ghost px-5'>Contacts</Link></li>
          <li><Link to="/faq" className='btn btn-ghost px-5'>FAQ</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/join" className="btn px-6">Join</Link>
      </div>
    </div>
  );
}

export default Navbar;
