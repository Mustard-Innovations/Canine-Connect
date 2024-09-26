'use client';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/Components/SmartComp/AuthContext';
import SearchComponent from '../Listings/Search';
import UserMenu from '@/app/Components/SmartComp/UserMenu';
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';

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
          <div className='hidden md:flex'>
            <button className="btn btn-ghost btn-circle">
              <ShoppingBagIcon className='w-6 h-6'/>
            </button>
            <button className="btn btn-ghost btn-circle">
              <HeartIcon className='w-6 h-6'/>
            </button>
            <button className="btn btn-ghost btn-circle">
              <Link href='/login'>Sign In</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
