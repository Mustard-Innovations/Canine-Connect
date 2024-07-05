import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col mb-12 items-center text-center bg-black m-10 p-10">
      <div className="text-3xl capitalize text-wrap text-white">Subscribe to our newsletter</div>
      <p className="p-3 text-white">
        Top your email below and get the new notifications about Canine Connect
      </p>
      <form className="w-full max-w-sm" action="">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Add your email here"
            required
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            <span>
              {/* Show arrow icon on smaller screens */}
              <div className="md:hidden">
                <ArrowRightIcon className='w-6 h-6'/>
              </div>
              {/* Show "Subscribe" text on larger screens */}
              <div className="hidden md:block">
                <span>Subscribe</span>
              </div>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
