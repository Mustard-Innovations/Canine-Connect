'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from 'firebase/auth';
import { auth } from '@/firebase.config';
import { Bars3Icon, UserCircleIcon, Cog6ToothIcon, ArrowLeftEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface UserMenuProps {
  user: User | null;
  numberOfItems: number;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, numberOfItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const router = useRouter()

  const onLogout = () => {
    auth.signOut();
    router.push('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar-start">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
          onClick={toggleDropdown}
        >
          <Bars3Icon className="md:hidden w-6 h-6" />
          <a className="hidden ml-28 md:flex btn btn-ghost text-xl">Canine Connect</a>
        </div>
        {isDropdownOpen && (
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] shadow bg-white">
            <p className="m-5 font-bold">Menu</p>
            <div className="mx-3">
              <div className="avatar">
                <div className="m-4">
                  {user?.photoURL ? (
                    <img
                      className="w-24 m-3 rounded-full"
                      src={user.photoURL}
                      alt="User Avatar"
                    />
                  ) : (
                    <UserCircleIcon className="w-12 h-12" />
                  )}
                </div>
                <div>
                  <p className="mt-5 font-semibold">Hi, {user?.displayName || 'Guest'}</p>
                  <p>
                    Member since{' '}
                    {user?.metadata?.creationTime?.split(' ')[0] || 'N/A'}
                  </p>
                </div>
              </div>
              <label className="input input-bordered flex items-center gap-2 mr-8 mt-5">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <li className='font-semibold my-2'>
              <a>My Bags ({numberOfItems} items)</a>
            </li>
            <li className='font-semibold my-2'>
              <a>Men</a>
            </li>
            <li className='font-semibold my-2'>
              <a>Women</a>
            </li>
            <li className='font-semibold my-2'>
              <a>Kids</a>
            </li>
            <li className='font-semibold my-2'>
              <a>Brands</a>
            </li>
            <div className="my-5 capitalize">
              {user ? (
                <>
                  <Link className="flex m-2" href="/profile">
                    Settings
                    <Cog6ToothIcon className="h-6 w-6" />
                  </Link>
                  <Link onClick={onLogout} className="flex m-2" href="/login">
                    Log out
                    <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
                  </Link>
                </>
              ) : (
                <Link className="flex m-2" href="/login">
                  Log in
                  <ArrowLeftEndOnRectangleIcon className="h-6 w-6" />
                </Link>
              )}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
