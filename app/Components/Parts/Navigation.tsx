'use client';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/Components/SmartComp/AuthContext';
import SearchComponent from '../Listings/Search';
import UserMenu from '@/app/Components/SmartComp/UserMenu';

const Navigation: React.FC = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-white text-black">
      <div className="navbar px-6">
        <UserMenu user={user} numberOfItems={0} />
        <div className="navbar-center">
          <a className="md:hidden btn btn-ghost text-xl">Canine Connect</a>
          <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href=''>Men</Link></li>
            <li><Link href=''>Women</Link></li>
            <li><Link href=''>Kids</Link></li>
            <li><Link href=''>Brands</Link></li>
          </ul>
        </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <SearchComponent />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
