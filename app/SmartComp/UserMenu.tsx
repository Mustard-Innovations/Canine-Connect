import React from 'react';
import { User } from 'firebase/auth';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface UserMenuProps {
  user: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <Bars3Icon className='md:hidden w-6 h-6'/>
          <a className="hidden ml-28 md:flex btn btn-ghost text-xl">Canine Connect</a>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-3 shadow bg-white">
          <p className="m-5 font-bold">Menu</p>
          <div className="mx-3">
            <div className="avatar">
              <div className="w-24 m-3 rounded-full">
                <img src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="User Avatar" />
              </div>
              <div>
                <p className="mt-5 font-semibold">Hi, {user?.displayName || "Guest"}</p>
                <p>Member since {user?.metadata?.creationTime?.split(" ")[0] || "N/A"}</p>
              </div>
            </div>
            <label className="input input-bordered flex items-center gap-2 mr-8 mt-5">
              <input type="text" className="grow" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
              </svg>
            </label>
          </div>
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
